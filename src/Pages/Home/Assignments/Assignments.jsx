import axios from "axios";
import React, { useEffect, useState } from "react";
import Assignment from "../Assignment/Assignment";

const server_url = import.meta.env.VITE_SERVER_URL;

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [filterBy, setFilterBy] = useState(null);

  useEffect(() => {
    axios.get(`${server_url}/assignments`).then((data) => {
      setAssignments(data.data);
    });
  }, []);

  const handleFilter = (difficulty) => {
    setFilterBy(difficulty);
  };

  const filteredAssignments = filterBy
    ? assignments.filter((assignment) => assignment.difficulty === filterBy)
    : assignments;

  return (
    <>
      <div className="dropdown mx-auto w-full flex justify-center items-center mt-10">
        <div tabIndex={0} role="button" className="btn m-1">
          Filter by Difficulty
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <span onClick={() => handleFilter("Easy")}>Easy</span>
          </li>
          <li>
            <span onClick={() => handleFilter("Medium")}>Medium</span>
          </li>
          <li>
            <span onClick={() => handleFilter("Hard")}>Hard</span>
          </li>
          <li>
            <span onClick={() => setFilterBy(null)}>Clear Filter</span>
          </li>
        </ul>
      </div>
      <div className="grid mx-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {filteredAssignments.map((assignment) => (
          <Assignment
            setAssignments={setAssignments}
            assignments={assignments}
            assignment={assignment}
            key={assignment._id}
          />
        ))}
      </div>
    </>
  );
};

export default Assignments;
