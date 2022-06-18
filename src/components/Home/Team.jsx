import React from "react";
import avatar from "./svg/avatar1.png";

function Team() {
  return (
    <div id="team">
      <div className="container xl:max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap flex-row -mx-4 justify-center">
          <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
            <div
              className="relative overflow-hidden mb-12 hover-grayscale-0 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="relative overflow-hidden px-6">
                <img
                  src={avatar}
                  className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
                  alt="avatar"
                />
              </div>
              <div className="pt-6 text-center">
                <p className="text-lg leading-normal font-bold mb-1">
                  Manuel Esteban
                </p>
                <p className="text-gray-500 leading-relaxed font-light">
                  Web Developer
                </p>

                <div className="mt-2 mb-5 space-x-2">
                  <a
                    aria-label="Twitter link"
                    href="https://twitter.com/Manu3L3l"
                  >
                    <box-icon color="gray" type='logo' name='twitter'></box-icon>
                  </a>
                  <a
                    aria-label="Facebook"
                    href="https://www.facebook.com/manu3l.3razo/"
                  >
                    <box-icon color="gray" type='logo' name='facebook-circle'></box-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
