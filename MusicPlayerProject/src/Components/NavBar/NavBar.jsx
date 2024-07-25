import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-400 w-full flex justify-between items-center font-semibold px-2 py-4">
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
      <div>
        <button className="text-white">Sign up</button>
        <button className="text-white" onClick={() => navigate("/signin")}>
          Login
        </button>
      </div>
    </div>
  );
};

export default NavBar;
