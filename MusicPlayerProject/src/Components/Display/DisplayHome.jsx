import React from "react";
import { albumsData } from "../../assets/assets";
import AlbumCard from "../Album/AlbumCard";
import { songsData } from "../../assets/assets";
import SongItem from "../Song/SongItem";
import NavBar from "../NavBar/NavBar";

const DisplayHome = () => {
  return (
    <>
      <NavBar />
      <div className="my-5 font-bold text-2xl">
        <div className="mb-4">
          <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
          <div className="flex overflow-auto">
            {albumsData.map((item, index) => (
              <AlbumCard key={index} item={item} />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
          <div className="flex overflow-x-auto scrollbar-hide">
            {songsData.map((song, index) => (
              <SongItem key={index} song={song} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
