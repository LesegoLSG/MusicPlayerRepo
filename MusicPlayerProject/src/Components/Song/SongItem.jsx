import React, { useContext } from "react";
import { PlayerContext } from "../../Context/PlayerContext";

const SongItem = ({ song }) => {
  const { playUsingId } = useContext(PlayerContext);

  return (
    <div
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-red-200 inline-block overflow-hidden"
      onClick={() => playUsingId(song.id)}
    >
      <img className="rounded" src={song.image} alt="songImage" />
      <p className="font-bold my-1">{song.name}</p>
      <p className="texr-slate-200 text-sm">{song.desc}</p>
    </div>
  );
};

export default SongItem;
