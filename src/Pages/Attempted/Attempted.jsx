import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";

const Attempted = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  // console.log(userEmail);
  const server_url = import.meta.env.VITE_SERVER_URL;
  const url = `${server_url}/submitted?email=${userEmail}`;
  const [pendingOfUser, setPendingOfUser] = useState([]);

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((data) => {
      // console.log(data.data);
      setPendingOfUser(data.data);
    });
  }, [userEmail]);

  // console.log("Pending of user:", pendingOfUser);
  // const { title, pending_status, obtained, feedback } = pendingOfUser;
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
            {pendingOfUser.map((item) => (
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
