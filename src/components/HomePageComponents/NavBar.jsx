import React from "react";
import logo from "../../assets/ASF_logo.png";

const NavBar = () => {
  const commonLi = <>
   <li>
              <a>Home</a>
            </li>

            <li>
              <a>Catering</a>
            </li>
            <li>
              <a>Private Dining</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a className="btn btn-primary text-[#3c5b50]">View Menu</a>
            </li>
  </>
  return (
    <>
      <div className="navbar bg-transparent mt-5">
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
      </div>

    
    </>
  );
};

export default NavBar;
