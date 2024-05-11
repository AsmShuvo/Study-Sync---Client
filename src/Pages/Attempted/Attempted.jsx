import React from "react";
import { useLoaderData } from "react-router-dom";

const Attempted = () => {
  const pendings = useLoaderData();
  console.log(pendings);
  const { title, pending_status, obtained, feedback } = pendings;
  return (
    <div>
      <div className="overflow-x-auto my-20 mx-10 bg-red ">
        <table className="table table-xs ">
          <thead className=" ">
            <tr className="text-xl  bg-deep border-2 border-red">
              <th className=" font-semibold tracking-wider text-success">
                Title
              </th>
              <th className=" font-semibold tracking-wider text-success">
                Status
              </th>
              <th className=" font-semibold tracking-wider text-success">
                Obtained Marks
              </th>
              <th className=" font-semibold tracking-wider text-success">
                Feedback
              </th>
            </tr>
          </thead>
          <tbody>
            {pendings.map((item) => (
              <tr className=" bg-deep border-2 border-red">
                <th className="text-lg">{item.title}</th>
                <th className="text-lg">{item.pending_status}</th>
                <th className="text-lg">{item.obtained}</th>
                <th className="text-lg">{item.feedback}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attempted;
