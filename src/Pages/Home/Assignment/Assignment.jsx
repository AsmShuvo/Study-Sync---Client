import React from "react";
import { FaPen } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const Assignment = ({ assignment }) => {
  const { _id, subject, image, title, difficulty, details, marks } = assignment;
  return (
    <div className="mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Topic: {subject}</h2>
          <p>Title: {title}</p>
          <p>Difficulty Level: {difficulty}</p>
          <p>Marks: {marks}</p>
          <p>Deadline: --/--/--</p>
          <div className="card-actions justify-end">
            <button className="btn btn-circle bg-red">
              <FaEye />
            </button>
            <button className="btn btn-circle bg-red">
              <MdDeleteForever />
            </button>
            <button className="btn btn-circle bg-red">
              <FaPen />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
