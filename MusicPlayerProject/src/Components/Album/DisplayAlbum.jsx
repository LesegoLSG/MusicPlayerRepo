import React, { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../../assets/assets";
import { FiClock } from "react-icons/fi";
import { PlayerContext } from "../../Context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];

  const { playUsingId } = useContext(PlayerContext);

  return (
    <>
      <NavBar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt="albumImage1" />
        <div className="flex flex-col">
          <p>PlayList</p>
          <h2 className="text-4xl font-bold mb-4 md:text-6xl ">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt="logo"
            />
            <b>Less-Ego</b>. 1.323,154 likes . <b>50 Songs</b>
            about 2hr 30mins
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb--4 pl-2 text-blue-200">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <FiClock size={22} />
      </div>
      <hr />
      {songsData.map((song, index) => (
        <div
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-gray-300 hover:bg-neutral-600 cursor-pointer"
          onClick={() => playUsingId(song.id)}
        >
          <p className="text-white">
            <b className="mr-4 text-white">{index + 1}</b>
            <img className="inline w-10 mr-5" src={song.image} alt="" />
          </p>
          <p className="text-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-start">{song.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
