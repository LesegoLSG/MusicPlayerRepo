import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

//NavBar with navigation arrows and authentication buttons
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-neutral-700 w-full flex justify-between items-center font-semibold px-2 py-4 rounded-md">
      <div className="flex items-center gap-2">
        <FaArrowLeft
          onClick={() => navigate(-1)}
          className="text-white text-2xl cursor-pointer"
        />
        <FaArrowRight
          onClick={() => navigate(1)}
          className="text-white text-2xl cursor-pointer"
        />
      </div>
      <div className="flex gap-x-2">
        <button className="btnAction" onClick={() => navigate("/signup")}>
          Sign up
        </button>
        <button className="btnAction" onClick={() => navigate("/signin")}>
          Login
        </button>
      </div>
    </div>
  );
};

export default NavBar;
