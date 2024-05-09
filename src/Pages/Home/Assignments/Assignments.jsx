import axios from "axios";
import React, { useEffect, useState } from "react";
import Assignment from "../Assignment/Assignment";
const server_url = import.meta.env.VITE_SERVER_URL;
const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    axios.get(`${server_url}/assignments`).then((data) => {
      //   console.log(data.data);
      setAssignments(data.data);
    });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
      {assignments.map((assignment) => (
        <Assignment assignment={assignment} key={assignment._id} />
      ))}
    </div>
  );
};

export default Assignments;
