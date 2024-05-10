import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png";
const Navbar = () => {
  return (
    <div className="px-4 pt-2 ">
      <div className="navbar bg-[#140D0d] rounded-xl">
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
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={logo} className="w-36 h-10" />
          </a>
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
          </ul>
        </div>
        <div className="navbar-end">
          {/* <div className="dropdown dropdown-end">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 roboto"
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
            </ul>
          </div> */}
          <div>
            <div className="navbar-end flex gap-1 w-full">
              <Link
                to="/login"
                class="group relative rounded inline-block overflow-hidden border border-red px-8 py-1 focus:outline-none focus:ring"
              >
                <span class="absolute inset-y-0 left-0 w-[2px] bg-red transition-all group-hover:w-full group-active:bg-red"></span>

                <button class="relative text-sm font-semibold text-red transition-colors group-hover:text-white">
                  Login
                </button>
              </Link>
              <Link
                to="/register"
                class="group relative rounded inline-block overflow-hidden border border-red px-8 py-1 focus:outline-none focus:ring"
              >
                <span class="absolute inset-y-0 left-0 w-[2px] bg-red transition-all group-hover:w-full group-active:bg-red"></span>

                <button class="relative text-sm font-semibold text-red transition-colors group-hover:text-white">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
