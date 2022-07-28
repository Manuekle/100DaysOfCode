import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleQuestion,
  faEarthAmericas,
  faMeteor,
  faGraduationCap,
  faBars,
  faClose
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <div className="py-5">
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-zinc-800">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <div className="px-3">
            <a href="https://github.com/Manuekle" Target="_blank">
              <FontAwesomeIcon icon={faGithubAlt} color="gray" />
            </a>
          </div>
          {/* sm */}
          <div class="flex items-center md:order-2">
            <div
              class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown"
            ></div>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 rounded-lg md:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <div class="w-6 h-6" fill="currentColor">
                <FontAwesomeIcon icon={faBars} color="gray" size="lg" />
              </div>
              <div class="hidden w-6 h-6" fill="currentColor">
                <FontAwesomeIcon icon={faClose} color="gray" size="lg" />
              </div>
            </button>
          </div>
          {/* Lg */}
          <div
            class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#about"
                  className="font-bold text-sm text-neutral-500 hover:text-neutral-400"
                >
                  <div className="flex flex-wrap">
                    <div>
                      <FontAwesomeIcon icon={faMeteor} color="gray" />
                    </div>
                    <div className="px-1 font-black">ABOUT ME</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href='#work'
                  className="font-bold text-sm text-neutral-500 hover:text-neutral-400"
                >
                  <div className="flex flex-wrap">
                    <div>
                      <FontAwesomeIcon icon={faEarthAmericas} color="gray" />
                    </div>
                    <div className="px-1 font-black">WORK</div>
                  </div>
                </a>
              </li>
              <li>
                <Link
                  to="/"
                  className="font-bold text-sm text-neutral-500 hover:text-neutral-400"
                >
                  <div className="flex flex-wrap">
                    <div>
                      <FontAwesomeIcon icon={faGraduationCap} color="gray" />
                    </div>
                    <div className="px-1 font-black"> EDUCATION</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="font-bold text-sm text-neutral-500 hover:text-neutral-400"
                >
                  <div className="flex flex-wrap">
                    <div>
                      <FontAwesomeIcon icon={faCircleQuestion} color="gray" />
                    </div>
                    <div className="px-1 font-black">FAQ</div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
