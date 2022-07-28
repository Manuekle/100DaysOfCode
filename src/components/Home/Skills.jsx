import React from "react";
// icons
import icons from "./Child/Icons";
import Status from "./Child/Status";

function Skills() {
  return (
    <div>
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-200 sm:text-4xl text-center">
        My{" "}
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-500 relative inline-block">
          <span className="relative text-white text-"> Skills</span>
        </span>{" "}
        Today
      </h2>

      <div className="max-w-6xl pt-24 pb-16 lg:pb-24 xl:px-5 px-12 relative z-20 justify-center mx-auto flex lg:flex-row flex-col items-center sm:text-center lg:text-left">
        <Status/>
        <div className="lg:w-full w-full lg:max-w-none max-w-md lg:pt-0 pt-2 mx-auto lg:pl-20">
          <div class="grid gap-2 px-1 lg:px-12 grid-cols-4 lg:grid-cols-5 p-10 items-center text-center place-content-center">
            {icons.map((icon) => (
              <div className="bg-zinc-800 rounded-xl p-2">
                <img
                  src={icon.img}
                  alt={icon.name}
                  className="w-full h-auto transition ease-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
