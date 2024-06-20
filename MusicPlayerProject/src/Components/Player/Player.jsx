import React from "react";
import { songsData } from "../../assets/assets";
import { FaShuffle } from "react-icons/fa6";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { IoMdPlay } from "react-icons/io";
import { RiLoopLeftFill } from "react-icons/ri";
import { FaMicrophone } from "react-icons/fa";

const Player = () => {
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4 ">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={songsData[0].image} alt="" />
        <div>
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-1 m-auto ">
        <div className="flex gap-4">
          <FaShuffle size={20} className="cursor-pointer" />
          <MdSkipPrevious size={20} className="cursor-pointer" />
          <IoMdPlay size={20} className="cursor-pointer" />
          <MdSkipNext size={20} className="cursor-pointer" />
          <RiLoopLeftFill size={20} className="cursor-pointer" />
        </div>
        <div className="flex items-center gap-5">
          <p>1:06</p>
          <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr className="h-1 border-none w-10 bg-blue-600 rounded-full" />
          </div>
          <p>3:20</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <FaMicrophone />
      </div>
    </div>
  );
};

export default Player;
