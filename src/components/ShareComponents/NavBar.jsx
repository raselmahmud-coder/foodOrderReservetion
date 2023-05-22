import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/ASF_logo.png";

const NavBar = () => {
  const commonLi = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : undefined
          }
          to={"/"}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : undefined
          }
          to={"/catering"}>
          Catering
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : undefined
          }
          to="/private-dining">
          Private Dining
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : undefined
          }
          to="/careers">
          Careers
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : undefined
          }
          to="/about">
          About
        </NavLink>
      </li>
      <li>
        <button className="btn btn-primary active:text-gray-100">
          View Menu
        </button>
      </li>
    </>
  );
  return (
    <>
      <nav className="navbar py-5" id="backToTop">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ff0000">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {/* this menu for mobile */}
              {commonLi}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" className="h-10 hidden lg:block" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-secondary">
            {commonLi}
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
          <Link to="/">
            <img src={logo} alt="" className="h-10" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
