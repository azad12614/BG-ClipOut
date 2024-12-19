import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex items-center justify-between px-4 lg:px-44 py-3">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-8 sm:w-12" />
      </Link>
      <p className="flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @rakib | All right reserved.
      </p>
      <div className="flex justify-center gap-2">
        <img
          src={assets.fb}
          alt=""
          className="rounded-full max-w-10 max-h-10"
        />
        <img
          src={assets.X}
          alt=""
          className="rounded-full max-w-8 max-h-8 mt-1"
        />
      </div>
    </div>
  );
};

export default Footer;
