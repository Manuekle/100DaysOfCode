import React from "react";
import bussines from "./svg/bussines.svg";
import about from "./svg/about-me.svg";

function Container() {
  return (
    <div>
      <div className="max-w-6xl pt-24 lg:pt-32 pb-16 lg:pb-24 xl:px-5 px-12 relative z-20 justify-center mx-auto flex lg:flex-row flex-col items-center sm:text-center lg:text-left">
        <div className="lg:w-1/2 w-full">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-200 sm:text-4xl">
            Hi, I'm <span className="text-sky-400">Manuel</span>.<br /> I Design
            and build web applications.
          </h2>
          <p className="my-5 text-lg text-gray-400 mx-auto sm:text-2xl sm:my-9 sm:max-w-3xl md:leading-tight lg:pr-16">
            Hi, I'm a web developer from Colombia. I specialize in building web
            applications with Django and React styled in Tailwind.
          </p>
        </div>

        <div class="lg:w-1/2 w-full lg:max-w-none max-w-md lg:pt-0 pt-20 mx-auto lg:pl-20">
          <img
            src={bussines}
            alt="bussines"
            class="w-full h-auto bg-gray-100 rounded-lg"
          />
        </div>
      </div>

      <div className="max-w-6xl pt-24 lg:pt-32 pb-16 lg:pb-24 xl:px-5 px-12 relative z-20 justify-center mx-auto flex lg:flex-row flex-col items-center sm:text-center lg:text-left">
        <div className="lg:w-1/2 w-full">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-200 sm:text-4xl">
            My Favorites <span className="text-sky-400">Hobbies</span>
          </h2>
          <p className="my-5 text-lg text-gray-400 mx-auto sm:text-2xl sm:my-9 sm:max-w-3xl md:leading-tight lg:pr-16">
            Much of my career was always related to technology and thanks to
            that I managed to combine my two hobbies during all these years, in
            addition to sharing other hobbies with different people.
          </p>
        </div>
        <div class="lg:w-1/2 w-full lg:max-w-none max-w-md lg:pt-0 pt-20 mx-auto lg:pl-20">
          <img
            src={about}
            alt="about"
            className="w-full h-auto bg-gray-100 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Container;
