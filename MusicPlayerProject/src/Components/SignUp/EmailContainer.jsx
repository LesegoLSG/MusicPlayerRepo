import React from "react";
import { validateEmail } from "../../Components/Reusables/FomValidation";

//Step 1 of sign up process
const EmailContainer = ({ formData, setFormData, isValid }) => {
  const handleEmailChange = (e) => {
    const email = e.target.value;
    const isValidEmail = validateEmail(email);
    setFormData({ ...formData, email });
    isValid(isValidEmail); // Passing validation result to parent component
  };
  return (
    <div className="w-full h-auto flex flex-col justify-center items-start gap-y-4">
      <div className="w-full flex flex-col justify-center items-start gap-y-1">
        <h4 className="text-white ">Email address</h4>
        <input
          type="email"
          value={formData.email}
          onChange={handleEmailChange}
          placeholder="Email address"
          className="inputField"
        />
      </div>
    </div>
  );
};

export default EmailContainer;
