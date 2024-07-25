import React, { useRef } from "react";
import SideBar from "../Components/SideBar/SideBar";
import Player from "../Components/Player/Player";
import NavBar from "../Components/NavBar/NavBar";
import Display from "../Components/Display/Display";
import { PlayerContext } from "../Context/PlayerContext";
import { useContext } from "react";

const HomeLandingPage = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <section className="h-screen bg-black">
      <div className="h-[90%] flex">
        <SideBar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </section>
  );
};

export default HomeLandingPage;
