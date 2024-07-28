import React from "react";
import { validatePersonalDetails } from "../Reusables/FomValidation";

//Step 3 of sign up process
const PersonalDetailsContainer = ({ formData, setFormData, isValid }) => {
  const handleNameChange = (e) => {
    const name = e.target.value;
    const isValidDetails = validatePersonalDetails(
      name,
      formData.dateOfBirth,
      formData.gender
    );
    setFormData({ ...formData, name });
    isValid(isValidDetails); // Pass validation result to parent component
  };

  const handleDateOfBirthChange = (e) => {
    const dateOfBirth = e.target.value;
    const isValidDetails = validatePersonalDetails(
      formData.name,
      dateOfBirth,
      formData.gender
    );
    setFormData({ ...formData, dateOfBirth });
    isValid(isValidDetails); // Pass validation result to parent component
  };

  const handleGenderChange = (e) => {
    const gender = e.target.value;
    const isValidDetails = validatePersonalDetails(
      formData.name,
      formData.dateOfBirth,
      gender
    );
    setFormData({ ...formData, gender });
    isValid(isValidDetails); // Pass validation result to parent component
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center items-start gap-y-4">
      {/* Name */}
      <div className="w-full flex flex-col justify-center items-start gap-y-1">
        <h4 className="text-white ">Name</h4>
        <p className="text-gray-400">This name will appear on your profile</p>
        <input
          type="name"
          value={formData.name}
          onChange={handleNameChange}
          placeholder="John"
          className="inputField"
        />
      </div>
      {/* Date of birth */}
      <div className="w-full flex flex-col justify-center items-start gap-y-1">
        <h4 className="text-white ">Date of birth</h4>
        <p className="text-gray-400">
          Why we need your date of birth? Learn more.
        </p>
        <input
          type="date"
          value={formData.dateOfBirth}
          placeholder="DD-MM-YYYY"
          onChange={handleDateOfBirthChange}
          className="inputField"
        />
      </div>
      {/* Gender */}
      <div className="w-full flex flex-col justify-center items-start gap-y-1">
        <h4 className="text-white ">Gender</h4>
        <p className="text-gray-400">
          We use your gender to help personalize our content recommendations and
          ads for you.
        </p>
        <div className="flex gap-x-4">
          <label className="text-white">
            <input
              type="radio"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleGenderChange}
              className="cursor-pointer"
            />
            Male
          </label>
          <label className="text-white">
            <input
              type="radio"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleGenderChange}
              className="cursor-pointer"
            />
            Female
          </label>
          <label className="text-white">
            <input
              type="radio"
              value="Non-binary"
              checked={formData.gender === "Non-binary"}
              onChange={handleGenderChange}
              className="cursor-pointer"
            />
            Non-binary
          </label>
          <label className="text-white">
            <input
              type="radio"
              value="Prefer not to say"
              checked={formData.gender === "Prefer not to say"}
              onChange={handleGenderChange}
              className="cursor-pointer"
            />
            Prefer not to say
          </label>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsContainer;
