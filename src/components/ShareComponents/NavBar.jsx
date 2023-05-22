import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/ASF_logo.png";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const [hideMenu, setHideMenu] = useState(false);
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
            <label tabIndex={0} className="btn btn-primary lg:hidden">
              {clicked ? (
                <label
                  onClick={() => {
                    setClicked(!clicked);
                    setHideMenu(!hideMenu);
                  }}
                  className="btn btn-sm btn-circle">
                  ✕
                </label>
              ) : (
                <svg
                  onClick={() => setClicked(!clicked)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ff0000">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              )}
            </label>
            <ul
              tabIndex={0}
              className={`${
                hideMenu ? "hidden " : undefined
              } menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64`}>
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
