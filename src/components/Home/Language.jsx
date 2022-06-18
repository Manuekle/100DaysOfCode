import React from "react";
// icons
import python from "./svg/icons/python.svg";
import django from "./svg/icons/django.svg";
import javascript from "./svg/icons/javascript.svg";
import typescript from "./svg/icons/typescript.svg";
import sass from "./svg/icons/sass.svg";
import react from "./svg/icons/react.svg";
import vue from "./svg/icons/vue.svg";
import postgresql from "./svg/icons/postgresql.svg";
import git from "./svg/icons/git.svg";
import postman from "./svg/icons/postman.svg";

function Language() {
  return (
    <div className="p-12">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-200 sm:text-4xl text-center">
        My{" "}
        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-500 relative inline-block">
          <span class="relative text-white"> Skills</span>
        </span>
        {" "}Today
      </h2>
      <div className="md:lg:xl:px-40 py-20">
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-2 place-content-center">
          {/* python */}
          <div className="p-10 flex flex-col items-center text-center bg-zinc-800 rounded-xl cursor-pointer">
            <span class="p-5 rounded-lg">
              <img
                src={python}
                width="100"
                alt="python"
                className="content-center transition ease-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </span>

            <p class="text-2xl font-black text-gray-100 mt-3">Python</p>
            <p class="mt-2 font-bold text-sm text-slate-100">
              2 years of experience
            </p>
          </div>
          {/* Django */}
          <div className="p-10 flex flex-col items-center text-center bg-zinc-800 rounded-xl cursor-pointer">
            <span class="p-5">
              <img
                src={django}
                width="100"
                alt="django"
                className="content-center transition ease-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </span>

            <p class="text-2xl font-black text-gray-100 mt-3">Django</p>
            <p class="mt-2 font-bold text-sm text-slate-100">
              2 years of experience
            </p>
          </div>
          {/* Javascript */}
          <div className="p-10 flex flex-col items-center text-center bg-zinc-800 rounded-xl cursor-pointer">
            <span class="p-5 rounded-lg">
              <img
                src={javascript}
                width="100"
                alt="javascript"
                className="content-center transition ease-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </span>

            <p class="text-2xl font-black text-gray-100 mt-3">Javascript</p>
            <p class="mt-2 font-bold text-sm text-slate-100">
              1 years of experience
            </p>
          </div>
          {/* typescript */}
          <div className="p-10 flex flex-col items-center text-center bg-zinc-800 rounded-xl cursor-pointer">
            <span class="p-5 rounded-lg">
              <img
                src={typescript}
                width="100"
                alt="typescript"
                className="content-center transition ease-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </span>

            <p class="text-2xl font-black text-gray-100 mt-3">Typescript</p>
            <p class="mt-2 font-bold text-sm text-slate-100">
              1 years of experience
            </p>
          </div>
          {/* sass */}
          <div className="p-10 flex flex-col items-center text-center bg-zinc-800 rounded-xl cursor-pointer">
            <span class="p-5 rounded-lg">
              <img
                src={sass}
                width="100"
                alt="sass"
                className="content-center transition ease-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </span>

            <p class="text-2xl font-black text-gray-100 mt-3">Sass</p>
            <p class="mt-2 font-bold text-sm text-slate-100">
              1 years of experience
            </p>
          </div>
          {/* vue */}
          <div className="p-10 flex flex-col items-center text-center bg-zinc-800 rounded-xl cursor-pointer">
            <span class="p-5 rounded-lg">
              <img
                src={vue}
                width="100"
                alt="vue"
                className="content-center transition ease-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </span>

            <p class="text-2xl font-black text-gray-100 mt-3">Vue</p>
            <p class="mt-2 font-bold text-sm text-slate-100">
              1 years of experience
            </p>
          </div>
          {/* postgresql */}
          <div className="p-10 flex flex-col items-center text-center bg-zinc-800 rounded-xl cursor-pointer">
            <span class="p-5 rounded-lg">
              <img
                src={postgresql}
                width="100"
                alt="postgresql"
                className="content-center transition ease-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </span>

            <p class="text-2xl font-black text-gray-100 mt-3">Postgresql</p>
            <p class="mt-2 font-bold text-sm text-slate-100">
              2 years of experience
            </p>
          </div>
          {/* git */}
          <div className="p-10 flex flex-col items-center text-center bg-zinc-800 rounded-xl cursor-pointer">
            <span class="p-5 rounded-lg">
              <img
                src={git}
                width="100"
                alt="git"
                className="content-center transition ease-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </span>

            <p class="text-2xl font-black text-gray-100 mt-3">Git</p>
            <p class="mt-2 font-bold text-sm text-slate-100">
              3 years of experience
            </p>
          </div>
          {/* postman */}
          <div className="p-10 flex flex-col items-center text-center bg-zinc-800 rounded-xl cursor-pointer">
            <span class="p-5 rounded-lg">
              <img
                src={postman}
                width="100"
                alt="postman"
                className="content-center transition ease-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </span>

            <p class="text-2xl font-black text-gray-100 mt-3">Postman</p>
            <p class="mt-2 font-bold text-sm text-slate-100">
              2 years of experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Language;
