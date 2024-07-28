import React, { useState } from "react";
import NavBarTop from "../Components/NavBar/NavBarTop";
import Logo2 from "../assets/Logo/Logo2.png";
import EmailContainer from "../Components/SignUp/EmailContainer";
import PasswordContainer from "../Components/SignUp/PasswordContainer";
import PersonalDetailsContainer from "../Components/SignUp/PersonalDetailsContainer";
import TermsContainer from "../Components/SignUp/TermsContainer";

import { IoIosArrowBack } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { SiNeteasecloudmusic } from "react-icons/si";

import { useNavigate } from "react-router-dom";
import {
  validateEmail,
  validatePassword,
  validatePersonalDetails,
  validateTerms,
} from "../Components/Reusables/FomValidation";
import Footer from "../Components/Footer/Footer";
import AuthOptions from "../Components/AuthOptions/AuthOptions";

const SignupPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    dateOfBirth: "",
    gender: "",
  });

  //Validation state for current step
  const [valid, setValid] = useState(false);

  const formTitle = [
    "Signup(email)",
    "Create a password",
    "Tell us about yourself",
    "Terms & Conditions",
  ];

  const pageDisplay = () => {
    switch (page) {
      case 0:
        return (
          <EmailContainer
            formData={formData}
            setFormData={setFormData}
            isValid={setValid}
          />
        );
      case 1:
        return (
          <PasswordContainer
            formData={formData}
            setFormData={setFormData}
            isValid={setValid}
          />
        );
      case 2:
        return (
          <PersonalDetailsContainer
            formData={formData}
            setFormData={setFormData}
            isValid={setValid}
          />
        );
      case 3:
        return (
          <TermsContainer
            formData={formData}
            setFormData={setFormData}
            isValid={setValid}
            handleFormSubmit={handleFormSubmit}
          />
        );
      default:
        return null;
    }
  };
  const handleFormSubmit = () => {
    // console.log("formData: ", formData);
    navigate("/signin");
  };

  const handleNext = () => {
    if (page === 0) {
      const isValidEmail = validateEmail(formData.email);
      setValid(isValidEmail);
    } else if (page === 1) {
      const isValidPassword = validatePassword(formData.password);
      setValid(isValidPassword);
    } else if (page === 2) {
      const isValidPersonalDetails = validatePersonalDetails(
        formData.name,
        formData.dateOfBirth,
        formData.gender
      );
      setValid(isValidPersonalDetails);
    } else if (page === 3) {
      const isValidTerms = validateTerms(formData.termsChecked);
      setValid(isValidTerms);
    }

    if (valid) {
      setPage(page + 1);
    } else {
      alert("Please fill in all required fields correctly.");
    }
  };

  return (
    <section className="w-full min-h-screen bg-black ">
      <NavBarTop />
      {/* Main Container */}
      <div className="w-full h-auto flex justify-center items-center">
        <div className=" max-w-screen-2xl  container bg-neutral-900 flex justify-center items-center px-4 rounded-md mx-2 mb-2">
          <div className="w-full lg:w-[30%] flex flex-col gap-y-4 px- py-10 ">
            {page == 0 && (
              <div className="text-white w-full flex flex-col justify-center items-center my-4">
                <SiNeteasecloudmusic className="text-hoverColor" size={32} />
                <h1 className="text-2xl md:text-4xl flex flex-col justify-center items-center font-extrabold text-center ">
                  Sign up for free <br /> and <br /> enjoy good melody
                </h1>
              </div>
            )}
            {/* show ProgressBar when page is not 0 (start page) */}

            {page != 0 && (
              <div className="w-full h-2 bg-gray-200 rounded-md">
                <span
                  style={{
                    width:
                      page == 0
                        ? "25%"
                        : page == 1
                        ? "50%"
                        : page == 2
                        ? "75%"
                        : "100%",
                  }}
                  className="block bg-blue-600 h-full rounded-md"
                ></span>
              </div>
            )}
            {/* Show the back arrow and page title when user is not on the first page  */}
            {page != 0 && (
              <div className="w-full flex justify-start items-center gap-x-6">
                <IoIosArrowBack
                  size={30}
                  disabled={page == 0}
                  onClick={() => setPage((currentPage) => currentPage - 1)}
                  className="text-white cursor-pointer"
                />
                <div className="w-full h-auto flex flex-col gap-4">
                  <h1 className="text-white text-lg  font-semibold">
                    Step {page + 1}
                  </h1>
                  <h1 className="text-white text-lg  font-semibold">
                    {formTitle[page]}
                  </h1>
                </div>
              </div>
            )}
            {/* Body */}
            <div>{pageDisplay()}</div>
            {/* Hide the next button on the last page */}
            {page != 3 && (
              <div className="w-full my-4">
                <button
                  //   disabled={!valid}
                  onClick={handleNext}
                  className="successBtn"
                >
                  Next
                </button>
              </div>
            )}

            {/* Show alternative buttons on the first page */}
            {page == 0 && <AuthOptions />}

            {page == 0 && (
              <div className="text-white my-6">
                <p>
                  Already have an account?{" "}
                  <span
                    onClick={() => navigate("/signin")}
                    className="border-b cursor-pointer"
                  >
                    Log in here.
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SignupPage;
