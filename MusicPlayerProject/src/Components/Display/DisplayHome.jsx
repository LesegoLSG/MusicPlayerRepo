import React, { useRef } from "react";
import { albumsData } from "../../assets/assets";
import AlbumCard from "../Album/AlbumCard";
import { songsData } from "../../assets/assets";
import SongItem from "../Song/SongItem";
import NavBar from "../NavBar/NavBar";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const DisplayHome = () => {
  const rowId = Math.floor(Math.random() * 1000); // Generate a random ID for the row to ensure uniqueness
  const rowIdNum = Math.floor(Math.random() * 1000); // Generate a random ID for the row to ensure uniqueness

  // Function to handle horizontal scrolling
  const slide = (id, offset) => {
    const slider = document.getElementById(id);
    if (slider) {
      slider.scrollLeft += offset;
    }
  };

  return (
    <>
      <NavBar />
      <div className="my-5 font-bold text-2xl">
        <div className="mb-4">
          <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
          <div className="relative flex items-center group">
            <MdChevronLeft
              onClick={() => slide("albumsSlider", -500)}
              className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-50 hidden group-hover:block cursor-pointer"
              size={30}
            />
            <div
              id="albumsSlider"
              className="w-full h-full flex overflow-x-scroll  scroll-smooth scrollbar-hide"
            >
              {albumsData.map((item, index) => (
                <AlbumCard key={index} item={item} />
              ))}
            </div>
            <MdChevronRight
              onClick={() => slide("albumsSlider", 500)}
              className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
              size={30}
            />
          </div>
        </div>
        <div className="mb-4 ">
          <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>

          <div className="relative flex items-center group">
            <MdChevronLeft
              onClick={() => slide("songsSlider", -500)}
              className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-50 hidden group-hover:block cursor-pointer"
              size={30}
            />
            <div
              id="songsSlider"
              className="w-full h-full flex overflow-x-scroll scroll-smooth scrollbar-hide"
            >
              {songsData.map((song, index) => (
                <SongItem key={index} song={song} />
              ))}
            </div>
            <MdChevronRight
              onClick={() => slide("songsSlider", 500)}
              className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
              size={30}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
