import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import axios from "axios";
import Swal from "sweetalert2";

const AssignmentDetails = () => {
  const assignments = useLoaderData();
  // console.log(assignments);
  const {
    _id,
    image,
    title,
    marks,
    difficulty,
    details,
    deadline,
  } = assignments;
  const server_url = import.meta.env.VITE_SERVER_URL;
  // console.log(server_url);
  const deadlineDate = new Date(deadline);
  const formattedDeadline = deadlineDate.toLocaleDateString();
  const { user } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
    // console.log(show);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const doc = form.doc.value;
    const note = form.note.value;
    const email = user?.email;
    const obtained = null;
    const pending_status = "Pending";
    const feedback = "";
    // console.log(doc, note, email);
    const takenAssignment = {
      email,
      doc,
      note,
      obtained,
      pending_status,
      feedback,
      title,
      marks,
      difficulty,
      details,
      deadline,
    };
    axios.post(`${server_url}/submitted`, takenAssignment).then((data) => {
      // console.log(data.data);
      if (data.data.insertedId) {
        Swal.fire("Assignment Submitted Succesfully");
        form.reset();
      }
    });
  };
  return (
    <div className="my-20">
      {/* =====take assignment===== */}
      <div className={show ? "" : "hidden"}>
        <div className="bg-red mx-2 md:mx-10 my-10">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
              <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                <a href="/" className="mb-6 sm:mx-auto">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400">
                    <svg
                      className="w-10 h-10 text-deep-purple-900"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </a>
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                      <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                      >
                        <defs>
                          <pattern
                            id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                            x="0"
                            y="0"
                            width=".135"
                            height=".30"
                          >
                            <circle cx="1" cy="1" r=".7" />
                          </pattern>
                        </defs>
                        <rect
                          fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                          width="52"
                          height="24"
                        />
                      </svg>
                      <span className="relative">Take</span>
                    </span>{" "}
                    the assignment
                  </h2>
                  <p className="text-base text-indigo-100 md:text-lg">
                    Please give proper links of PDF/DOC of your assignment here
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col justify-center items-center">
                    <input
                      type="text"
                      placeholder="PDF LINK HERE"
                      name="doc"
                      className="input input-bordered input-error w-full max-w-xs"
                    />
                    <textarea
                      placeholder="Qiuck Note"
                      name="note"
                      className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                    ></textarea>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide transition duration-200 mt-4 text-white rounded shadow-md shadow-rose-300 hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="">
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                {title}
              </h1>

              <div className="mt-8 space-y-5">
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="mx-2 tracking-wide leading-6">
                    Marks: {marks}
                  </span>
                </p>

                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="mx-2 tracking-wide leading-6">
                    Difficulty: {difficulty}
                  </span>
                </p>
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="mx-2 tracking-wide leading-6">
                    Deadline: {formattedDeadline}
                  </span>
                </p>

                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="mx-2 tracking-wide leading-6">
                    Assignment Description: {details}
                  </span>
                </p>
              </div>
            </div>

            <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
              <form className="flex flex-col lg:flex-row">
                <input
                  type="email"
                  defaultValue={user?.email}
                  disabled
                  className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400  border-none appearance-none bg-[#dddddd9d] rounded focus:outline-none focus:placeholder-transparent focus:ring-0"
                />

                <button
                  onClick={handleShow}
                  type="button"
                  className="h-10 w-28 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-red rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                >
                  Take
                </button>
              </form>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
              src={image}
              alt="glasses photo"
            />
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 lg:inset-x-auto bottom-6 lg:right-8 xl:right-10 xl:bottom-8">
        <div className="lg:w-72 px-6 lg:px-0">
          <div className="p-2 bg-blue-600 rounded-lg shadow-lg sm:p-3">
            <div className="flex flex-wrap items-center justify-between">
              <div
                target="_blank"
                className="flex items-center flex-1 w-0 cursor-pointer"
              >
                <span className="flex p-2 bg-blue-800 rounded-lg">
                  <svg
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.12954 3.00772C5.48563 2.38457 6.14831 2 6.86603 2H17.134C17.8517 2 18.5144 2.38457 18.8704 3.00772L20.0133 5.00772C20.6612 6.14163 20.0618 7.51107 18.9235 7.89532C18.9276 7.97661 18.9269 8.0591 18.9209 8.14249L18.0638 20.1425C17.989 21.1891 17.1181 22 16.0689 22H7.9311C6.88182 22 6.01094 21.1891 5.93618 20.1425L5.07904 8.14249C5.07308 8.0591 5.07231 7.97661 5.07645 7.89531C3.93813 7.51105 3.33874 6.14162 3.98668 5.00772L5.12954 3.00772ZM7.07396 8L7.28824 11H16.7117L16.926 8H7.07396ZM7.71681 17L7.9311 20H16.0689L16.2831 17H7.71681ZM18.2768 6L17.134 4L6.86603 4L5.72317 6H18.2768Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>

                <p className="ml-3 font-medium tracking-wide text-white truncate">
                  By me a coffee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
