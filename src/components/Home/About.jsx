import React from "react";
import bussines from "./svg/bussines.svg";

function About() {
  return (
    <div id='about'>
      <div className="max-w-6xl pt-24 lg:pt-32 pb-16 lg:pb-24 xl:px-5 px-12 relative z-20 justify-center mx-auto flex lg:flex-row flex-col items-center sm:text-center lg:text-left">
        <div className="lg:w-1/2 w-full">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-200 sm:text-4xl">
            Hi, I'm <span className="text-sky-500">Manuel Esteban Erazo</span>{" "}👋
            <br /> I Design and build web applications.
          </h2>
          <p className="my-5 text-lg text-gray-400 mx-auto sm:text-2xl sm:my-9 sm:max-w-3xl md:leading-tight lg:pr-16">
            A passionate Full Stack Software Developer 🚀 having an experience
            of building Web applications with Django / React and
            some other cool libraries and frameworks.
          </p>
        </div>

        <div className="lg:w-1/2 w-full lg:max-w-none max-w-md lg:pt-0 pt-20 mx-auto lg:pl-20">
          <img
            src={bussines}
            alt="bussines"
            className="w-full h-auto bg-gray-100 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
