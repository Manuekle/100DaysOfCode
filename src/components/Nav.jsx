import React from "react";
import { Link } from "react-router-dom";
import { boxIcon } from "boxicons";

function Nav() {
  return (
    <div className="py-5">
      <nav className="flex justify-between space-x-4 bg-transparent rounded-md py-3">
        <div className="flex justify-start">
          <a
            target="_blank"
            href="https://github.com/Manuekle"
            className="text-4xl px-3"
          >
            <box-icon
              type="logo"
              color="white"
              animation="tada-hover"
              name="github"
            ></box-icon>
          </a>
        </div>
        <div className="flex justify-center">
          <Link
            to="/"
            className="font-medium px-3 py-2 text-sky-50 hover:bg-sky-50 hover:text-slate-900"
          >
            Home
          </Link>
          <Link
            to="/"
            className="font-medium px-3 py-2 text-sky-50 hover:bg-sky-50 hover:text-slate-900"
          >
            Team
          </Link>
          <div className="dropdown dropdown-hover px-3 py-2 hover:bg-sky-50 text-sky-50 hover:text-slate-900">
            <label tabIndex="0" className="hover:text-slate-900">
              Projects
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/calculator" className="text-sky-50">
                  Calculator
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="font-medium px-3 py-2 text-sky-50 hover:bg-sky-50 hover:text-slate-900"
          >
            Reports
          </Link>
        </div>
        <div className="flex justify-start">
          <div className="text-4xl px-3">
            <input type="checkbox" className="toggle toggle-xs" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
