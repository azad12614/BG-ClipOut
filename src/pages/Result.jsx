import React, { useState } from "react";
import { assets } from "../assets/assets";

const apiKey = "3kkcZK1LV9vSGK7mk2mCvW5o";
const apiKey2 = "4751b980d2464b818a932dc298630714";

const url = apiKey.startsWith("3")
  ? "https://api.remove.bg/v1.0/removebg/"
  : "https://api.slazzer.com/v2.0/remove_image_background"; // Choose based on API key

const Result = () => {
  const [image, setImage] = useState(null);
  const [bgremove, setBgremove] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  console.log(image);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      handleChangeBg(file);
    }
  };

  const handleChangeBg = async () => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("image_file", image);
    formData.append("size", "auto");

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "X-Api-Key": apiKey,
        },
        body: formData,
      });

      if (!res.ok) {
        const errorMessage = await res.text();
        throw new Error(`API error: ${res.status} - ${errorMessage}`);
      }

      const blob = await res.blob();
      const reader = new FileReader();
      reader.onloadend = () => setBgremove(reader.result);
      reader.readAsDataURL(blob);
    } catch (error) {
      console.error("Error removing background:", error);
      setError(error.message); // Set user-friendly error message
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  const downloadImage = () => {
    if (bgremove) {
      const link = document.createElement("a");
      link.href = bgremove;
      link.download = image.name + "bg-removed.png";
      link.click();
    }
  };

  return (
    <div className="mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]">
      <div className="bg-white rounded-lg px-8 py-6 drop-shadow-sm">
        <div className="flex flex-col sm:grid grid-cols-2 gap-8">
          <div className="flex flex-col">
            <p className="font-semibold text-gray-600 mb-2">Original</p>
            {image && (
              <img
                className="rounded-md border"
                src={URL.createObjectURL(image)}
                alt=""
              />
            )}
            {!image && (
              <img
                className="rounded-md border"
                src={assets.image_w_bg}
                alt=""
              />
            )}
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-gray-600 mb-2">
              Background Removed
            </p>
            <div className="rounded-md border border-gray-300 h-full relative bg-layer">
              {!bgremove && !image && (
                <img
                  className="rounded-md border h-full"
                  src={assets.image_wo_bg}
                  alt=""
                />
              )}
              {!bgremove && (
                <>
                  {isLoading && (
                    <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                      <div className="border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
                    </div>
                  )}
                  {!bgremove && error && (
                    <p className="text-red-500 text-sm">Error: {error}</p>
                  )}
                </>
              )}
              {bgremove && (
                <img
                  className="rounded-md border h-full"
                  src={bgremove}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end items-center flex-warp gap-4 mt-6">
          <a
            href="#"
            onClick={downloadImage} // Trigger the download function
            className="px-8 py-2.5 text-white text-sm bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full hover:scale-105 transition-all duration-700"
          >
            Download Image
          </a>
        </div>
        <div className="text-center pt-12">
          <input
            type="file"
            accept="image/*"
            name=""
            id="upload2"
            hidden
            onChange={handleFileChange}
          />
          <label
            className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700"
            htmlFor="upload2"
          >
            <div className="width={20} text-white">
              <span class="material-symbols-outlined">upload</span>
            </div>
            <p className="text-white text-sm pt-1 font-bold">
              Upload your image
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Result;
