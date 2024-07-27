import React, { useContext } from "react";
import { songsData } from "../../assets/assets";
import { FaShuffle } from "react-icons/fa6";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { IoMdPlay, IoMdPause } from "react-icons/io";
import { RiLoopLeftFill } from "react-icons/ri";
import { FaMicrophone } from "react-icons/fa";
import { PlayerContext } from "../../Context/PlayerContext";

const Player = () => {
  // Destructuring the PlayerContext to get necessary values and functions
  const {
    seekBar,
    seekBg,
    playerStatus,
    play,
    pause,
    track,
    time,
    prev,
    next,
    seekSong,
  } = useContext(PlayerContext);

  // Helper function to format time into MM:SS
  const formatTime = (minute, second) => {
    const formattedMinute = String(minute).padStart(2, "0");
    const formattedSecond = String(second).padStart(2, "0");
    return `${formattedMinute}:${formattedSecond}`;
  };

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4 ">
      {/* Display the current track's image and name, visible only on large screens */}
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      {/* Control buttons and seek bar */}
      <div className="flex flex-col justify-center items-center gap-1 m-auto ">
        <div className="flex gap-4">
          <FaShuffle size={20} className="cursor-pointer" />
          <MdSkipPrevious
            size={20}
            className="cursor-pointer"
            onClick={() => prev()}
          />
          {playerStatus ? (
            <IoMdPause size={20} className="cursor-pointer" onClick={pause} />
          ) : (
            <IoMdPlay size={20} className="cursor-pointer" onClick={play} />
          )}

          <MdSkipNext
            size={20}
            className="cursor-pointer"
            onClick={() => next()}
          />
          <RiLoopLeftFill size={20} className="cursor-pointer" />
        </div>
        {/* Seek bar and time display */}

        <div className="flex items-center gap-5">
          <p>{formatTime(time.currentTime.minute, time.currentTime.second)}</p>
          <div
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
            ref={seekBg}
            onClick={seekSong}
          >
            <hr
              className="h-1 border-none w-0 bg-blue-600 rounded-full"
              ref={seekBar}
            />
          </div>
          <p>{formatTime(time.totalTime.minute, time.totalTime.second)}</p>
        </div>
      </div>
      {/* Microphone icon, visible only on large screens */}
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <FaMicrophone />
      </div>
    </div>
  );
};

export default Player;
