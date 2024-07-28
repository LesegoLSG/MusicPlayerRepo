import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

//Alternative authentication for signin and signup
const AuthOptions = () => {
  return (
    <div className="border-t border-b border-gray-700 w-full h-auto flex flex-col py-10  gap-y-2">
      {/* Google button */}
      <button className="authBtn">
        <FcGoogle className="w-5 h-5" />
        Continue with Google
      </button>
      {/* Facebook button */}
      <button className="authBtn">
        <IoLogoFacebook className="w-5 h-5" />
        Continue with Google
      </button>
      {/* Apple button */}
      <button className="authBtn">
        <FaApple className="w-5 h-5" />
        Continue with Google
      </button>
    </div>
  );
};

export default AuthOptions;
