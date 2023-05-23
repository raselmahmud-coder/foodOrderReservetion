import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/ASF_logo.png";

const NavBar = () => {
  const [isClicked, setClicked] = useState(false);

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
    <section className="container mx-auto">
      <nav className="navbar py-5" id="backToTop">
        <div className="lg:navbar-start flex justify-around w-full">
          <div
            style={{ display: "block", width: "100%" }}
            className="dropdown dropdown-open">
            <label
              onClick={() => setClicked(!isClicked)}
              tabIndex={0}
              className="btn btn-primary lg:hidden">
              {isClicked ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
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
              style={{ width: "150%" }}
              tabIndex={0}
              className={`${
                !isClicked ? "hidden " : undefined
              } menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box`}>
              {/* this menu for mobile */}
              {commonLi}
            </ul>
          </div>
          <Link to="/" className="block lg:hidden">
            <img src={logo} alt="" className="h-10" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-secondary">
            {commonLi}
          </ul>
        </div>
        {/*  <div className="navbar-end lg:hidden">
          <Link to="/">
            <img src={logo} alt="" className="h-10" />
          </Link>
        </div> */}
      </nav>
    </section>
  );
};

export default NavBar;
