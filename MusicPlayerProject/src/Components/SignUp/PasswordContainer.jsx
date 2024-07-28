import React, { useState } from "react";
import { validatePassword } from "../Reusables/FomValidation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

//Step 2 of sign up process
const PasswordContainer = ({ formData, setFormData, isValid }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const isValidPassword = validatePassword(password);
    setFormData({ ...formData, password });
    isValid(isValidPassword); // Pass validation result to parent component
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center items-start gap-y-4">
      <div className="w-full flex flex-col justify-center items-start gap-y-1">
        <h4 className="text-white ">Password</h4>
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            value={formData.password}
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
      </div>
      <div className="text-white">
        <h4 className="text-base font-bold ">
          Your password mst contain at least
        </h4>
        <p>* 1 letter</p>
        <p>* 1 number or special character (example:#?!&)</p>
        <p>* 10 Characters</p>
      </div>
    </div>
  );
};

export default PasswordContainer;
