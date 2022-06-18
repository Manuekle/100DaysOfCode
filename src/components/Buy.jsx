/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Buy() {
  return (
    <div className="flex items-end justify-end fixed bottom-0 right-0 mb-6 mr-6 z-10">
      <div>
        <a
          title="Buy me a beer"
          href="https://www.buymeacoffee.com/meerazo7b"
          rel="noreferrer"
          className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
        >
          <img
            className="object-cover object-center w-full h-full rounded-full"
            src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
          />
        </a>
      </div>
    </div>
  );
}

export default Buy;
