import React, { useContext } from "react";
import { PlayerContext } from "../../Context/PlayerContext";

const SongItem = ({ song }) => {
  // Destructuring playUsingId from PlayerContext
  const { playUsingId } = useContext(PlayerContext);

  // Container for each song item with styling and click event to play the song

  return (
    <div
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-hoverColor inline-block overflow-hidden"
      onClick={() => playUsingId(song.id)}
    >
      {/* Song image */}
      <img className="rounded" src={song.image} alt="songImage" />
      {/* Song name */}
      <p className="font-bold my-1">{song.name}</p>
      {/* Song description */}
      <p className="texr-slate-200 text-sm">{song.desc}</p>
    </div>
  );
};

export default SongItem;
