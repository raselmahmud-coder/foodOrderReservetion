import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/ASF_logo.png";
import greenBg from "../../assets/green_screen.png";
const NavBar = () => {
  const [isClicked, setClicked] = useState(false);

  const commonLi = (
    <>
      <li className="hover:animate-bounce lg:py-0 py-3">
        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? "text-red-500" : "text-gray-100"
            } hover:text-yellow-300 transition-all duration-500 ease-in-out font-bold`
          }
          to={"/"}>
          Home
        </NavLink>
      </li>
      <li className="hover:animate-bounce lg:py-0 py-3">
        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? "text-red-500" : "text-gray-100"
            } hover:text-yellow-300 transition-all duration-500 ease-in-out font-bold`
          }
          to={"/catering"}>
          Catering
        </NavLink>
      </li>
      <li className="hover:animate-bounce lg:py-0 py-3">
        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? "text-red-500" : "text-gray-100"
            } hover:text-yellow-300 transition-all duration-500 ease-in-out font-bold`
          }
          to="/private-dining">
          Private Dining
        </NavLink>
      </li>
      <li className="hover:animate-bounce lg:py-0 py-3">
        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? "text-red-500" : "text-gray-100"
            } hover:text-yellow-300 transition-all duration-500 ease-in-out font-bold`
          }
          to="/careers">
          Careers
        </NavLink>
      </li>
      <li className="hover:animate-bounce lg:py-0 py-3">
        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? "text-red-500" : "text-gray-100"
            } hover:text-yellow-300 transition-all duration-500 ease-in-out font-bold`
          }
          to="/about">
          About
        </NavLink>
      </li>
      <li className="hover:animate-bounce lg:py-0 py-3">
        <button className="btn hover:animate-bounce lg:py-0 py-3 btn-primary active:text-gray-100">
          View Menu
        </button>
      </li>
    </>
  );
  return (
    <>
      <section className="container mx-auto relative">
        <nav className="flex justify-between  py-5" id="backToTop">
          <div>
            <Link to="/">
              <img src={logo} className="h-10" />
            </Link>
          </div>
          {/* Mobile menu here start*/}
          <div
            // style={{ display: "block", width: "100%" }}
            className=" lg:hidden block">
            {/* Hamburger Icon */}
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
              style={{
                backgroundImage: `url(${greenBg})`,
                width: "100%",
                zIndex: "1",
              }}
              tabIndex={0}
              className={`${
                !isClicked ? "hidden " : "text-gray-100"
              } absolute top-[100%] left-0 w-full m-0 p-0 list-none bg-transparent border-none text-xl z-50 shadow text-center`}>
              {/* this menu for mobile */}
              {commonLi}
            </ul>
          </div>

          {/* Mobile menu here End*/}

          {/* Desktop menu here start*/}
          <div className="hidden lg:block">
            <ul className="flex gap-8 justify-center items-center text-xl px-1 text-secondary">
              {commonLi}
            </ul>
          </div>

          {/* Desktop menu here End*/}
        </nav>
      </section>
    </>
  );
};

export default NavBar;
