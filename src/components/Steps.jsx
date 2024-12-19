import React from "react";

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-300 bg-clip-text text-transparent">
        Steps to remove background <br /> image in seconds
      </h1>
      <div className="flex items-center flex-wrap gap-4 mt-16 xl:mt-24 justify-center">
        <div className="flex items-start gap-2 width={80} text-wrap bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <div className="width={20} mt-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 p-1 rounded-lg w-8 h-8 justify-center align-center text-white">
            <span class="material-symbols-outlined">upload</span>
          </div>
          <div>
            <p className="text-xl font-medium">Upload Image</p>
            <p className="text-sm text-neutral-500 mt-1">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2 width={80} text-wrap bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <div className="width={20} mt-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 p-1 rounded-lg w-8 h-8 justify-center align-center text-white">
            <span class="material-symbols-outlined">remove</span>
          </div>
          <div>
            <p className="text-xl font-medium">Remove Background</p>
            <p className="text-sm text-neutral-500 mt-1">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2 width={80} text-wrap bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <div className="width={20} mt-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 p-1 rounded-lg w-8 h-8 justify-center align-center text-white">
            <span class="material-symbols-outlined">download</span>
          </div>
          <div>
            <p className="text-xl font-medium">Download Image</p>
            <p className="text-sm text-neutral-500 mt-1">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
