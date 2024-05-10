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

const server_url = import.meta.env.VITE_SERVER_URL;
console.log(server_url);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
          console.log(x);
          return x;
        },
      },
    ],
  },
]);

export default router;
