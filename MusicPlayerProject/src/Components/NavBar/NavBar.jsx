import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="bg-blue-400 w-full flex justify-between items-center font-semibold px-2 py-4">
      <div className="flex items-center gap-2">
        <FaArrowLeft className="text-white text-2xl" />
        <FaArrowRight className="text-white text-2xl" />
      </div>
      <div>
        <button className="text-white">Sign up</button>
        <button className="text-white">Login</button>
      </div>
    </div>
  );
};

export default NavBar;
