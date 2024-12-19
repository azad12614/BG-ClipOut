import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-4 py-3 lg:mx-44">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-8 sm:w-12" />
      </Link>
      <Link to="/result">
        <button className="bg-zinc-800 text-white flex items-center gap-2 px-2 py-2 sm:px-8 sm:p-3 text-sm rounded-full">
          Get started
          <div className="pt-2 w-2 sm:w-3">
            <span class="material-symbols-outlined">chevron_right</span>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
