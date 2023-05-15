import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/ASF_logo.png";
import bgPattern from "../../assets/Pattern.png";


const NavBar = () => {
  const commonLi = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      <li>
        <Link to={"/catering"}>Catering</Link>
      </li>
      <li>
        <Link to="/private-dining">Private Dining</Link>
      </li>
      <li>
        <Link to="/careers">Careers</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <button className="btn btn-primary text-[#3c5b50]">View Menu</button>
      </li>
    </>
  );
  return (
    <>
      <nav
        className="navbar py-5">
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
              {commonLi}
            </ul>
          </div>
          <img src={logo} alt="" className="h-10 hidden lg:block" />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-secondary">
            {commonLi}
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
          <img src={logo} alt="" className="h-10" />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
