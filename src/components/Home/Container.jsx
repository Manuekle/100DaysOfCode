import React from "react";
import { Link } from "react-router-dom";
import bussines from "./svg/bussines.svg";
import about from "./svg/about-me.svg";

function Container() {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-2 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-200 sm:text-4xl">
            Hi, I'm <span className="text-sky-400">Manuel</span>.<br /> I Design
            and build web applications.
          </h2>
          <p className="mt-4 text-xl text-neutral-500">
            Hi, I'm a web developer from Colombia. I specialize in building web
            applications with Django and React styled in Tailwind
          </p>
        </div>
        <div className="grid">
          <img
            src={bussines}
            width="500"
            alt="bussines"
            className="bg-gray-100 rounded-lg"
          />
        </div>
      </div>
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-2 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div className="grid">
          <img
            src={about}
            alt="about"
            width="500"
            className="bg-gray-100 rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-200 sm:text-4xl">
            My Favorites <span className="text-sky-400">Hobbies</span>
          </h2>
          <p className="mt-4 text-xl text-neutral-500">
            Much of my career was always related to technology and thanks to
            that I managed to combine my two hobbies during all these years, in
            addition to sharing other hobbies with different people.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Container;
