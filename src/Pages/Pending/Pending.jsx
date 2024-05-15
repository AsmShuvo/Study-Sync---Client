import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Pending = () => {
  const pendings = useLoaderData();
  const { myTheme } = useContext(AuthContext);
  const { _id, title, pending_status, obtained, feedback } = pendings;
  return (
    <div>
      <div className="overflow-x-auto my-20 md:mx-10 bg-red ">
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
                Submitted By
              </th>
              <th className=" font-semibold tracking-wider text-success">
                Feedback
              </th>
              <th className=" font-semibold tracking-wider text-success">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {pendings.map((item) => (
              <tr
                className={`bg-${
                  myTheme == "dark" ? "darkBlue" : "blue-200"
                } border-2 border-red`}
              >
                <th className="text-lg font-mono">{item.title}</th>
                <th className="text-lg font-mono">{item.pending_status}.</th>
                <th className="text-lg">{item.obtained}</th>
                <th className="text-gray-300 font-mono">{item.email}</th>
                <th className="text-lg">{item.feedback}</th>
                <th className="text-lg">
                  {item.pending_status != "Completed" ? (
                    <Link to={`/evaluate/${item._id}`}>
                      <button className="btn btn-link hover:scale-125">
                        Evaluate
                      </button>
                    </Link>
                  ) : (
                    <button className="btn btn-sm bg-green-500 text-white hover:bg-green-500 hover:text-white disabled">
                      Completed
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pending;
