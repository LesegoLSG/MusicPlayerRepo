import React, { useEffect, useRef } from "react";
import DisplayHome from "./DisplayHome";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayAlbum from "../Album/DisplayAlbum";
import { albumsData } from "../../assets/assets";

const Display = () => {
  const displayRef = useRef(); // Reference to the display container div

  const location = useLocation(); // Hook to access the current location object
  const isAlbum = location.pathname.includes("album"); // Check if the current path includes "album"
  const albumId = isAlbum ? location.pathname.slice(-1) : ""; // Extract album ID from the path if it includes "album"
  const bgColor = albumsData[Number(albumId)].bgColor; // Get the background color for the album based on its ID

  useEffect(() => {
    if (isAlbum) {
      // If the path includes "album" and bgColor is defined
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`; // Set background gradient
    } else {
      displayRef.current.style.background = `#121212`; // Set background color for non-album pages
    }
  }, [isAlbum, bgColor]);

  return (
    <div
      className="w-full m-2 px-6 pt-4 rounded bg-neutral-800 text-white overflow-auto lg:w-[75%] lg:ml-0"
      ref={displayRef}
    >
      <Routes>
        {/* Route for the home display */}
        <Route path="/" element={<DisplayHome />} />
        {/* Route for displaying the album based on the album ID */}
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
