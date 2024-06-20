import React from "react";
import SideBar from "../Components/SideBar/SideBar";
import Player from "../Components/Player/Player";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";

const HomeLandingPage = () => {
  return (
    <section className="h-screen bg-black ">
      <div className="h-[90%] flex flex-1">
        <SideBar />
        <div className="flex-1">
          <NavBar />
          <Outlet />
        </div>
      </div>
      <Player />
    </section>
  );
};

export default HomeLandingPage;
