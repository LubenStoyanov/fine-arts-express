import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar max-w-7xl self-center h-20">
      <div className="navbar-start text-primary">
        <NavLink to={`/`} className="btn btn-ghost w-20 normal-case">
          <img src="/Logo2.png" />
        </NavLink>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content shadow bg-base-100 text-primary rounded-box w-22 text-lg font-semibold"
          >
            <li>
              <NavLink to="music">Music</NavLink>
            </li>
            <li>
              <NavLink to="art">Art</NavLink>
            </li>
            <li>
              <NavLink to="literature">Literature</NavLink>
            </li>
            <li>
              <NavLink to="create">Create</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end text-primary hidden md:flex">
        <ul className="menu menu-horizontal p-0 text-lg font-semibold">
          <li>
            <NavLink to="music">Music</NavLink>
          </li>
          <li>
            <NavLink to="art">Art</NavLink>
          </li>
          <li>
            <NavLink to="literature">Literature</NavLink>
          </li>
          <li>
            <NavLink to="create">Create</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
