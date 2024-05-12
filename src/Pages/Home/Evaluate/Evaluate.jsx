import axios from "axios";
import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Evaluate = () => {
  const server_url = import.meta.env.VITE_SERVER_URL;
  console.log(server_url);
  const pending = useLoaderData();
  console.log("Pending assignments", pending);
  const id = useParams();
  console.log(id);
  //   console.log(typeof id);
  //   filtering the id
  const assignment = pending.find((item) => item._id == id.id);
  console.log(assignment);
  const {
    _id,
    email,
    doc,
    note,
    obtained,
    pending_status,
    details,
    difficulty,
    marks,
    title,
    feedback,
  } = assignment;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const got = form.marks.value;
    const review = form.review.value;
    const updatedAssignment = {
      email,
      doc,
      obtained: got,
      pending_status: "Completed",
      details,
      difficulty,
      marks,
      title,
      feedback: review,
    };
    Swal.fire({
      title: "Submit Marks?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Submit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`${server_url}/submitted/${_id}`, updatedAssignment)
          .then((data) => {
            if (data.data.modifiedCount) {
              Swal.fire("Assignment Evaluated!");
              form.reset();
            }
          })
          .catch((error) => {
            console.error("Error Evalauteing assignment:", error);
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
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-red">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <p className="text-base text-gray-700 md:text-lg">{title}</p>
            </div>
            <div className="my-4 font-serif">{note}</div>
            <hr className="mb-6 border-gray-300" />
            <Link to={doc} target="_blank">
              <span className="cursor-pointer btn-link text-white bg-blue-700">
                {doc}
              </span>
            </Link>
            <div>
              Total marks:
              <p className=" inline-block mt-8 ml-1 text-yellow-100">
                {" "}
                {marks}
              </p>
            </div>
          </div>
          <div className="px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-2/5">
            <div className="mb-5 font-semibold">Give marks</div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-1">
              <input
                type="text"
                placeholder="Give marks here"
                name="marks"
                className="input input-bordered w-full bg-deep"
              />

              <textarea
                placeholder="Your Review Here..."
                name="review"
                className="textarea textarea-bordered textarea-lg w-full bg-deep"
              ></textarea>

              <button
                type="submit"
                className="btn bg-green-500 w-full text-white font-semibold tracking-wide outline-none border-none mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evaluate;
