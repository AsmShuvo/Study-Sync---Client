import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./../../../Providers/AuthProviders";
const Navbar = () => {
  const { user, logOut, myTheme, setMyTheme } = useContext(AuthContext);
  const toggleTheme = () => {
    setMyTheme(myTheme == "light" ? "dark" : "light");
  };
  console.log(myTheme);

  // console.log(user);
  return (
    <div>
      <div
        className={`navbar border-b ${
          myTheme == "light" ? "bg-white" : "bg-blue-900"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost bg-red lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm bg-gray-700 dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              <li>
                <NavLink activeClassName="bg-green-500" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/assignments">Assignments</NavLink>
              </li>
              <li>
                <NavLink to="/create">Create Assignment</NavLink>
              </li>
              <li>
                <NavLink to="/attempted">Show Attempted</NavLink>
              </li>
              <li>
                <NavLink to="/pending">Pending</NavLink>
              </li>
              <label
                htmlFor="Toggle4"
                className="inline-flex items-center p-1 cursor-pointer dark:bg-gray-700 dark:text-gray-100"
              >
                <input
                  id="Toggle4"
                  type="checkbox"
                  className="hidden peer"
                  checked
                />
                <span className="px-4 py-2 dark:bg-gray-400 peer-checked:dark:bg-gray-700">
                  Light
                </span>
                <span className="px-4 py-2 dark:bg-gray-700 peer-checked:dark:bg-violet-600">
                  Dark
                </span>
              </label>
            </ul>
          </div>
          <Link to="/" className="btn btn-link text-xl">
            StudySync
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <NavLink className="text-black text-lg font-mono" to="/">
                Home
              </NavLink>
            </li>
            <li className="ml-2 border-l pl-2">
              <NavLink
                className="text-black text-lg font-mono"
                to="/assignments"
              >
                Assignments
              </NavLink>
            </li>
            <li className="ml-2 border-l pl-2">
              <NavLink className="text-black text-lg font-mono" to="/create">
                Create Assignment
              </NavLink>
            </li>
            <li className="ml-2 border-l pl-2">
              <NavLink className="text-black text-lg font-mono" to="/attempted">
                Show Attempted
              </NavLink>
            </li>
            <li className="mx-2 border-l pl-2">
              <NavLink className="text-black text-lg font-mono" to="/pending">
                Pending
              </NavLink>
            </li>
            <label
              onClick={toggleTheme}
              htmlFor="Toggle4"
              className="inline-flex items-center p-1 cursor-pointer dark:bg-gray-700 dark:text-gray-100"
            >
              <input id="Toggle4" type="checkbox" className="hidden peer" />
              <span className="px-4 py-2 dark:bg-gray-400 peer-checked:dark:bg-gray-700">
                Light
              </span>
              <span className="px-4 py-2 dark:bg-gray-700 peer-checked:dark:bg-violet-600">
                Dark
              </span>
            </label>
          </ul>
        </div>
        <div className="navbar-end">
          {!user ? (
            <div className="navbar-end flex gap-1 w-full">
              <Link
                to="/login"
                className="group relative rounded inline-block overflow-hidden border border-red px-8 py-1 focus:outline-none focus:ring"
              >
                <span className="absolute inset-y-0 left-0 w-[2px] bg-red transition-all group-hover:w-full group-active:bg-red"></span>

                <button className="relative text-sm font-semibold text-red transition-colors group-hover:text-white">
                  Login
                </button>
              </Link>
              <Link
                to="/register"
                className="group relative rounded inline-block overflow-hidden border border-red px-8 py-1 focus:outline-none focus:ring"
              >
                <span className="absolute inset-y-0 left-0 w-[2px] bg-red transition-all group-hover:w-full group-active:bg-red"></span>

                <button className="relative text-sm font-semibold text-red transition-colors group-hover:text-white">
                  Register
                </button>
              </Link>
            </div>
          ) : (
            <div className="navbar-end flex gap-1 w-full">
              <div className="dropdown dropdown-end md:mr-4 ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <span className="bg-gray-400 hover:bg-gray-400 capitalize text-black">
                      {user?.displayName}
                    </span>
                  </li>
                  <li>
                    <span className="text-lg font-semibold" onClick={logOut}>
                      Logout
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
