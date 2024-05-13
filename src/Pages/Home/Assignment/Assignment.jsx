import React from "react";
import { FaPen } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Assignment = ({ assignment, assignments, setAssignments }) => {
  const { _id, subject, image, title, difficulty, details, marks, deadline } =
    assignment;
  const server_url = import.meta.env.VITE_SERVER_URL;
  // console.log(server_url);
  // =====Convert deadline to a Date object=====
  const deadlineDate = new Date(deadline);

  // =====Format deadline to show only the date part=====
  const formattedDeadline = deadlineDate.toLocaleDateString();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${server_url}/assignment/${id}`)
          .then((data) => {
            if (data.data.deletedCount > 0) {
              // console.log("DELETED DATA");
              // Remove the deleted spot from userSpots
              const updatedAssignments = assignments.filter(
                (it) => it._id !== id
              );
              setAssignments(updatedAssignments);
              Swal.fire("Deleted Successfully");
            }
          })
          .catch((error) => {
            console.error("Error deleting spot:", error);
            // Optionally, you can show an error message to the user using Swal or another method
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Failed to delete spot",
            });
          });
      }
    });
  };

  const hanldeUpdate = (e) => {};

  return (
    // <div className="mx-auto">
    //   <div className="card w-72 md:w-80 lg:w-96 bg-base-100 shadow-xl image-full">
    //     <figure>
    //       <img src={image} alt="Shoes" />
    //     </figure>
    //     <div className="card-body">
    //       <h2 className="card-title">Topic: {subject}</h2>
    //       <p>Title: {title}</p>
    //       <p>Difficulty Level: {difficulty}</p>
    //       <p>Marks: {marks}</p>
    //       <p>Deadline:{formattedDeadline}</p>
    //       <div className="card-actions justify-end">
    //         <Link to={`/assignment/${_id}`}>
    //           <button className="btn btn-circle bg-red">
    //             <FaEye />
    //           </button>
    //         </Link>
    //         <button
    //           onClick={() => handleDelete(_id)}
    //           className="btn btn-circle bg-red"
    //         >
    //           <MdDeleteForever />
    //         </button>
    //         <Link to={`update/${_id}`}>
    //           <button className="btn btn-circle bg-red">
    //             <FaPen />
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class="relative flex flex-col justify-center overflow-hidden bg-slate-100 py-6 sm:py-12">
      <div class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-deep transition-all duration-300 group-hover:scale-[10]"></span>
        <div class="relative z-10 mx-auto max-w-md">
          <span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
            <img src={image} className="" />
          </span>
          <div class="space-y-2 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <p className="font-bold">{title}</p>
            <p className=" font-mono">{difficulty}</p>
            <p className=" font-mono">{marks}</p>
            <p className=" font-mono">{formattedDeadline}</p>
          </div>
          <div class="pt-5 text-base font-semibold leading-7">
            <div className="card-actions justify-end">
              <Link to={`/assignment/${_id}`}>
                <button className="btn btn-circle border-none outline-none bg-red">
                  <FaEye />
                </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-circle border-none outline-none  bg-red"
              >
                <MdDeleteForever />
              </button>
              <Link to={`update/${_id}`}>
                <button className="btn btn-circle border-none outline-none  bg-red">
                  <FaPen />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
