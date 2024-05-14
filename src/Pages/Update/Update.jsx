import React, { useContext, useState } from "react";
import Datepicker from "../../Date/Datepicker";
import axios from "axios";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { IoIosWarning } from "react-icons/io";
import { AuthContext } from "../../Providers/AuthProviders";

const Update = () => {
  const loadedData = useLoaderData();
  console.log("Data before Update:", loadedData);
  const { _id, title, difficulty, marks, details, image, email } = loadedData;
  const { user } = useContext(AuthContext);
  const server_url = import.meta.env.VITE_SERVER_URL;
  //   console.log(server_url);
  console.log(email);
  const [deadline, setDeadline] = useState(new Date(null));
  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const difficulty = form.difficulty.value;
    const marks = form.mark.value;
    const photo = form.photo.value;
    const details = form.details.value;
    // =====Convert deadline to a Date object=====
    const deadlineDate = new Date(deadline);

    // =====Format deadline to show only the date part=====
    const formattedDeadline = deadlineDate.toLocaleDateString();
    console.log(title, difficulty, marks, details, deadline, photo);

    const updatedAssignment = {
      title,
      difficulty,
      marks,
      details,
      image: photo,
      deadline: formattedDeadline,
      email,
    };
    console.log(updatedAssignment);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`${server_url}/assignment/${_id}`, updatedAssignment)
          .then((data) => {
            console.log(data.data.modifiedCount);
            if (data.data.modifiedCount) {
              Swal.fire("Assignment Updated Successfully !");
              form.reset();
            }
          })
          .catch((error) => {
            console.error("Error deleting assignment:", error);
            // Optionally, you can show an error message to the user using Swal or another method
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Failed to Update spot",
            });
          });
      }
    });
  };
  return (
    <div className="min-h-screen my-10">
      <div className="m-8 bg-red  rounded-xl shadow-2xl">
        <div>
          <form className="card-body" onSubmit={handlePost}>
            <div className="space-y-2  ">
              <p className="text-amber-200">Update Assignment</p>
              <p className="text-amber-200">
                This information will be displayed publicly so be carefull and
                honest while sharing
              </p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Assignment Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Example: Laws of motion"
                className="input input-bordered"
                defaultValue={title}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Thumbnail Image URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Place URL here"
                className="input input-bordered"
                defaultValue={image}
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-lg">Marks</span>
              </label>
              <input
                type="text"
                name="mark"
                placeholder="Total marks here"
                className="input input-bordered w-full"
                defaultValue={marks}
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-lg">Deadline</span>
              </label>
              <Datepicker deadline={deadline} setDeadline={setDeadline} />
            </div>
            <div className=" ">
              <label className="label">
                <span className="label-text text-lg">Details/Question</span>
              </label>
              <textarea
                placeholder="details"
                name="details"
                className="textarea textarea-bordered textarea-md w-full h-64"
                defaultValue={details}
              ></textarea>
            </div>

            <div>
              <label className="label">
                <span className="label-text">Difficulty</span>
              </label>
              <select
                name="difficulty"
                className="select select-bordered w-full max-w-xs"
                defaultValue={difficulty}
              >
                <option disabled selected>
                  Select
                </option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <hr />

            <div>
              <button
                type="submit"
                className="btn btn-wide bg-success text-white"
              >
                Uppdate Assignment
              </button>
              <p className="flex items-center gap-2 mt-4 text-amber-200">
                {" "}
                <IoIosWarning className="bg-warning rounded m-1 text-xl" />
                Remember You won't be able to redo once you update the
                assignment. So please recheck and submit if it need to be
                updated
              </p>
              <marquee className="mt-4 font-bold text-lg text-red bg-warning rounded-full">
                {" "}
                © This assignment is created by {email}
              </marquee>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
