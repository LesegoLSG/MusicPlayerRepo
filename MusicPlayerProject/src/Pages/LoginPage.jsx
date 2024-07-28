import React, { useState } from "react";
import NavBarTop from "../Components/NavBar/NavBarTop";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { SiNeteasecloudmusic } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import {
  validateEmail,
  validateSimplePassword,
} from "../Components/Reusables/FomValidation";
import Footer from "../Components/Footer/Footer.jsx";
import AuthOptions from "../Components/AuthOptions/AuthOptions.jsx";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    const email = e.target.value;
    const isValidEmail = validateEmail(email);
    setLoginData({ ...loginData, email });
    setIsEmailValid(isValidEmail); // Passing validation result to parent component
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const isValidPassword = validateSimplePassword(password);
    setLoginData({ ...loginData, password });
    setIsPasswordValid(isValidPassword); // Pass validation result to parent component
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleRememberMe = () => {
    setRememberMe((prevRememberMe) => !prevRememberMe);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (isEmailValid && isPasswordValid) {
      console.log("Login details: ", loginData);
    } else {
      alert(
        "Email or Password incorrect please enter valid email or password."
      );
    }
  };
  return (
    <section className="w-full min-h-screen bg-black ">
      {/* NavBar */}
      <NavBarTop />

      {/* Login container */}
      <div className="w-full h-auto flex justify-center items-center">
        <div className="max-w-screen-2xl container flex flex-col justify-center items-center px-4 py-10  bg-neutral-900 rounded-md mx-2 mb-2 ">
          {/* header */}{" "}
          <div className="w-full lg:w-[30%]">
            <div className="w-full flex flex-col justify-center items-center gap-y-1 text-white my-10">
              <SiNeteasecloudmusic size={50} className="text-hoverColor my-2" />
              <h1 className="text-white text-2xl md:text-4xl font-extrabold  text-center">
                Login to Less-Ego
              </h1>
            </div>
            {/* form */}
            <form className="w-full h-auto flex flex-col justify-center items-start gap-y-2">
              <label className="text-white">Email or username</label>
              <input
                type="email"
                value={loginData.email}
                onChange={handleEmailChange}
                placeholder="Email or username"
                className="inputField"
              />
              <label className="text-white">Password</label>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  value={loginData.password}
                  onChange={handlePasswordChange}
                  placeholder="Password"
                  className="inputField pr-10"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-white"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {/* Checkbox for Remember me */}
              <div className="w-full flex items-center gap-x-2 my-4">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={toggleRememberMe}
                  className="h-5 w-5 text-green-500 focus:ring-0 cursor-pointer"
                />
                <label htmlFor="rememberMe" className="text-white">
                  Remember me
                </label>
              </div>

              <div className="w-full flex justify-center items-center">
                <button onClick={handleLogin} className="successBtn">
                  Login
                </button>
              </div>
              <div className="w-full flex justify-center items-center">
                <h1>Forgot your password?</h1>
              </div>
            </form>

            {/* Login options */}
            <AuthOptions />

            <div className="w-full flex justify-center items-center my-6">
              <p className="text-white">
                Don't have an account?{" "}
                <span
                  onClick={() => navigate("/signup")}
                  className="border-b cursor-pointer"
                >
                  Sign up for free.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default LoginPage;
