import React from "react";
import { Link } from "react-router-dom";
import { boxIcon } from "boxicons";

function Nav() {
  return (
    <div className="py-5">
      <nav className="flex justify-between bg-zinc-800 rounded-md py-3">
        <div className="flex justify-start">
          <div className="px-3">
            <a href="https://github.com/Manuekle">
              <box-icon
                color="gray"
                animation="tada-hover"
                type="logo"
                name="github"
              ></box-icon>
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            to="/"
            className="px-4 text-sm text-neutral-500 hover:text-neutral-700"
          >
            <div className="flex flex-wrap">
              <div>
                <box-icon color="gray" type="solid" name="game"></box-icon>
              </div>
              <div className="px-1 pt-0.5 font-black">About me</div>
            </div>
          </Link>
          <Link
            to="/"
            className="px-4 font-bold text-sm text-neutral-500 hover:text-neutral-700"
          >
            <div className="flex flex-wrap">
              <div>
                <box-icon color="gray" name="world"></box-icon>
              </div>
              <div className="px-1 pt-0.5 font-black">Proyects</div>
            </div>
          </Link>
          <Link
            to="/"
            className="px-4 font-bold text-sm text-neutral-500 hover:text-neutral-700"
          >
            <div className="flex flex-wrap">
              <div>
                <box-icon color="gray" name="help-circle"></box-icon>
              </div>
              <div className="px-1 pt-0.5  font-black">FAQ</div>
            </div>
          </Link>
        </div>
        <div className="flex justify-start">
          <div className="px-3">
            <box-icon color="gray" name="user-circle" type="solid"></box-icon>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
