import React, { useContext, useState } from "react";
import Datepicker from "../../Date/Datepicker";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";

const CreateAssignment = () => {
  const server_url = import.meta.env.VITE_SERVER_URL;
  // console.log(server_url);
  const { user } = useContext(AuthContext);
  const [deadline, setDeadline] = useState(new Date(null));
  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const difficulty = form.difficulty.value;
    const marks = form.mark.value;
    const image = form.image.value;
    const details = form.details.value;
    const email = user?.email;
    // console.log(title, difficulty, marks, details, deadline, image);
    const newAssignment = {
      title,
      difficulty,
      marks,
      details,
      image,
      deadline,
      email,
    };
    axios.post(`${server_url}/assignments`, newAssignment).then((data) => {
      // console.log(data.data);
      if (data.data.insertedId) {
        Swal.fire("Assignment Created Succesfully");
        form.reset();
      }
    });
  };
  return (
    <div className="min-h-screen my-10">
      <div className="m-8 bg-deep border-[#9753536b] rounded-xl shadow-2xl">
        <div>
          <form className="card-body" onSubmit={handlePost}>
            <div className="space-y-2  ">
              <p className="text-green-500">Create Assignment</p>
              <p className="text-green-500">
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
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Thumbnail Image URL</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Place URL here"
                className="input input-bordered"
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
              ></textarea>
            </div>

            <div>
              <label className="label">
                <span className="label-text">Difficulty</span>
              </label>
              <select
                name="difficulty"
                className="select select-bordered w-full max-w-xs"
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
              <button type="submit" className="btn btn-wide bg-red text-white">
                Create Assignment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;
