import React from "react";
import { albumsData } from "../../assets/assets";
import AlbumCard from "../Album/AlbumCard";
import { songsData } from "../../assets/assets";
import SongItem from "../Song/SongItem";

const DisplayHome = () => {
  return (
    <div className="w-full h-auto overflow-y-auto mt-1 px-6 pt-4 rounded bg-neutral-800 text-white overflow-auto lg:w-[85%] lg:ml-0">
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
        <div className="flex overflow-auto">
          {songsData.map((song, index) => (
            <SongItem key={index} song={song} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayHome;
