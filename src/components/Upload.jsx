import React from "react";

const Upload = () => {
  return (
    <div>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-300 bg-clip-text text-transparent py-6 md:py-16">
        See the magic, Try Now
      </h1>
      <div className="text-center pb-24">
        <input type="file" accept="image/*" name="" id="upload2" hidden />
        <label
          className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700"
          htmlFor="upload2"
        >
          <div className="width={20} text-white">
            <span class="material-symbols-outlined">upload</span>
          </div>
          <p className="text-white text-sm pt-1 font-bold">Upload your image</p>
        </label>
      </div>
    </div>
  );
};

export default Upload;
