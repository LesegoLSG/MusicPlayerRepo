import React from "react";
import NavBarTop from "../Components/NavBar/NavBarTop";

const LoginPage = () => {
  return (
    <section className="w-full min-h-screen bg-black ">
      {/* NavBar */}
      <NavBarTop />

      {/* Login container */}
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full md:w-[40%] flex flex-col justify-center items-center p-10">
          {/* header */}
          <div className="w-full flex justify-center items-center">
            <h1 className="text-white text-3xl font-bold">Login to Less-Ego</h1>
          </div>
          {/* form */}
          <form className="w-full h-auto flex flex-col justify-center items-start px-28">
            <label className="text-white">Email or username</label>
            <input
              type="text"
              placeholder="Email or username"
              className="w-full p-2"
            />
            <label className="text-white">Password</label>
            <input type="password" placeholder="Password" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
