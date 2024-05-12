import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Assignments from "../Pages/Home/Assignments/Assignments";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import Features from "../Pages/Home/Features/Features";
import Register from "./../Pages/Register/Register";
import Login from "./../Pages/Login/Login";
import Navbar from "./../Pages/Home/Navbar/Navbar";
import AssignmentDetails from "./../Pages/Home/AssignmentDetails/AssignmentDetails";
import Update from "../Pages/Update/Update";
import { Take } from "../Pages/TakeAssignment/Take";
import Attempted from "../Pages/Attempted/Attempted";
import Pending from "../Pages/Pending/Pending";
import Error from "../Pages/Error/Error";
import Evaluate from "../Pages/Home/Evaluate/Evaluate";

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
        element: <CreateAssignment />,
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
        element: <AssignmentDetails />,
        loader: ({ params }) => {
          const x = fetch(`${server_url}/assignment/${params.id}`);
          // console.log(x);
          return x;
        },
      },

      {
        path: "/take_assignment",
        element: <Take />,
      },
      {
        path: "/attempted",
        element: <Attempted />,
        loader: () => fetch(`${server_url}/submitted`),
      },
      {
        path: "/pending",
        element: <Pending />,
        loader: () => fetch(`${server_url}/submitted`),
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) => {
          const x = fetch(`${server_url}/assignment/${params.id}`);
          // console.log(x);
          return x;
        },
      },
      {
        path: "/evaluate/:id",
        element: <Evaluate />,
        loader: () => fetch(`${server_url}/submitted`),
      },
    ],
  },
]);

export default router;
