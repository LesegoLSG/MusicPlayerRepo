import React, { useRef } from "react";
import SideBar from "../Components/SideBar/SideBar";
import Player from "../Components/Player/Player";
import NavBar from "../Components/NavBar/NavBar";
import Display from "../Components/Display/Display";
import { PlayerContext } from "../Context/PlayerContext";
import { useContext } from "react";

const HomeLandingPage = () => {
  // Use PlayerContext to access audioRef and track
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <section className="h-screen bg-black">
      {/* Main container for the page layout */}
      <div className="h-[90%] flex">
        {/* Sidebar and display area */}
        <SideBar />
        <Display />
      </div>
      {/* Player component to control playback */}
      <Player />
      {/* Audio element for playback, linked to the audioRef and track file */}
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </section>
  );
};

export default HomeLandingPage;
