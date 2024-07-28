import React from "react";

//Step 4 of sign up process
const TermsContainer = ({ formData, setFormData, handleFormSubmit }) => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-start gap-y-4 text-white">
      <div className="w-full flex justify-start items-center gap-y-1 bg-black/50 px-10 py-4 gap-2 rounded-md">
        <input type="checkbox" className="" />
        <p className="flex flex-wrap">
          Please send me news and offers from Less-Ego
        </p>
      </div>
      <div className="w-full flex  justify-start items-center gap-y-1 bg-black/50 px-10 py-4 gap-2 rounded-md">
        <input type="checkbox" className="w-5 h-5" />
        <p className="flex flex-wrap">
          Share my registration data with Spotify's content providers for
          marketing purposes.
        </p>
      </div>
      <div className="w-full flex justify-start items-center gap-y-1 bg-black/50 px-10 py-4 gap-2 rounded-md">
        <input type="checkbox" className="w-5 h-5" />
        <p className="flex flex-wrap">
          I agree to the Less-Ego Terms and Conditions of Use and Privacy
          Policy.
        </p>
      </div>
      <div className="w-full">
        <button className="successBtn" onClick={() => handleFormSubmit()}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default TermsContainer;
