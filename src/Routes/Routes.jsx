import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Assignments from "../Pages/Home/Assignments/Assignments";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import Features from "../Pages/Home/Features/Features";
import Register from "./../Pages/Register/Register";
import Login from "./../Pages/Login/Login";
import AssignmentDetails from "./../Pages/Home/AssignmentDetails/AssignmentDetails";
import Update from "../Pages/Update/Update";
import Attempted from "../Pages/Attempted/Attempted";
import Pending from "../Pages/Pending/Pending";
import Error from "../Pages/Error/Error";
import Evaluate from "../Pages/Home/Evaluate/Evaluate";
import PrivateRoute from "../Layout/PrivateRoute";
import axios from "axios";
import Completed from "../Pages/Completed/Completed";

const server_url = import.meta.env.VITE_SERVER_URL;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/assignments",
        element: <Assignments />,
      },
      {
        path: "/assignments",
        element: <Assignments />,
      },
      {
        path: "/create",
        element: (
          <PrivateRoute>
            <CreateAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/assignment/:id",
        element: (
          <PrivateRoute>
            <AssignmentDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          const x = fetch(`${server_url}/assignment/${params.id}`);
          // console.log(x);
          return x;
        },
      },
      {
        path: "/attempted",
        element: (
          <PrivateRoute>
            <Attempted />
          </PrivateRoute>
        ),
        // loader: () => fetch(`${server_url}/submitted`),
      },
      {
        path: "/pending",
        element: (
          <PrivateRoute>
            <Pending />
          </PrivateRoute>
        ),
        loader: async () => {
          const data = await axios.get(`${server_url}/submitted`, {
            withCredentials: true,
          });
          console.log(data.data);
          return data.data;
        },
      },
      {
        path: "/completed",
        element: (
          <PrivateRoute>
            <Completed />
          </PrivateRoute>
        ),
        loader: async () => {
          const data = await axios.get(`${server_url}/submitted`, {
            withCredentials: true,
          });
          console.log(data.data);
          return data.data;
        },
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          const x = fetch(`${server_url}/assignment/${params.id}`);
          // console.log(x);
          return x;
        },
      },
      {
        path: "/evaluate/:id",
        element: (
          <PrivateRoute>
            <Evaluate />
          </PrivateRoute>
        ),
        loader: async () => {
          const data = await axios.get(`${server_url}/submitted`, {
            withCredentials: true,
          });
          console.log(data.data);
          return data.data;
        },
      },
    ],
  },
]);

export default router;
