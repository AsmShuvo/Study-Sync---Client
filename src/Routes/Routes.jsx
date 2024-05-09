import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Assignments from "../Pages/Home/Assignments/Assignments";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
const server_url = import.meta.env.VITE_SERVER_URL;

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
    ],
  },
]);

export default router;
