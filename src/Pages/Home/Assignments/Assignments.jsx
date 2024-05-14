import axios from "axios";
import React, { useEffect, useState } from "react";
import Assignment from "../Assignment/Assignment";

const server_url = import.meta.env.VITE_SERVER_URL;

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    axios.get(`${server_url}/assignments`).then((data) => {
      let sortedAssignments = [...data.data];
      if (sortBy === "easyToHard") {
        sortedAssignments.sort(
          (a, b) => mapDifficulty(a.difficulty) - mapDifficulty(b.difficulty)
        );
      } else if (sortBy === "hardToEasy") {
        sortedAssignments.sort(
          (a, b) => mapDifficulty(b.difficulty) - mapDifficulty(a.difficulty)
        );
      }
      setAssignments(sortedAssignments);
    });
  }, [sortBy]);

  const mapDifficulty = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return 1;
      case "Medium":
        return 2;
      case "Hard":
        return 3;
      default:
        return 0; // Default value for unknown difficulty
    }
  };

  const handleSort = (sortType) => {
    setSortBy(sortType);
  };

  return (
    <>
      <div className="dropdown mx-auto w-full flex justify-center items-center mt-10">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <span onClick={() => handleSort("easyToHard")}>Easy to Hard</span>
          </li>
          <li>
            <span onClick={() => handleSort("hardToEasy")}>Hard to Easy</span>
          </li>
        </ul>
      </div>
      <div className="grid mx-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {assignments.map((assignment) => (
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
