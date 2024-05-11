import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#140D0d]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/assignments">Assignments</NavLink>
              </li>
              <li>
                <NavLink to="/reviews">Reviews</NavLink>
              </li>
              <li>
                <NavLink to="/create">Create Assignment</NavLink>
              </li>
              <li>
                <NavLink to="/attempted">Show Attempted</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img src={logo} className="w-36 h-10" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/assignments">Assignments</NavLink>
            </li>
            <li>
              <NavLink to="/reviews">Reviews</NavLink>
            </li>
            <li>
              <NavLink to="/create">Create Assignment</NavLink>
            </li>
            <li>
              <NavLink to="/attempted">Show Attempted</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
