import React from "react";

function Status() {
    return (
        <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-200 sm:text-2xl">
                Crazy 🥴 full stack developer who wants to explore every tech stack
                <br />
                <span className="text-sky-500">My Status</span> :
            </h2>
            <p className="my-5 text-lg text-gray-400 mx-auto sm:text-lg sm:my-9 sm:max-w-3xl md:leading-tight lg:pr-16">
                Front-End/Design
                <div class="w-full bg-gray-200 rounded-full">
                    <div class="bg-yellow-400 text-xs font-medium text-black text-center p-2 leading-none rounded-l-full" style={{ width: "55%" }}></div>
                </div>
            </p>
            <p className="my-5 text-lg text-gray-400 mx-auto sm:text-lg sm:my-9 sm:max-w-3xl md:leading-tight lg:pr-16">
                Back-End
                <div class="w-full bg-gray-200 rounded-full">
                    <div class="bg-green-700 text-xs font-medium text-black text-center p-2 leading-none rounded-l-full" style={{ width: "70%" }}></div>
                </div>
            </p>
            <p className="my-5 text-lg text-gray-400 mx-auto sm:text-lg sm:my-9 sm:max-w-3xl md:leading-tight lg:pr-16">
                Programming
                <div class="w-full bg-gray-200 rounded-full">
                    <div class="bg-sky-500 text-xs font-medium text-black text-center p-2 leading-none rounded-l-full" style={{ width: "60%" }}></div>
                </div>
            </p>
        </div>
    )
}

export default Status;