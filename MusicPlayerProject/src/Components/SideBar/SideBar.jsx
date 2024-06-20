import React from "react";
import Logo_brand from "../../assets/Logo/Logo_brand.png";
import { FaHome, FaSearch, FaPlus } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";

const SideBar = () => {
  return (
    <section className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex ">
      {/* first section */}
      <div className="bg-neutral-900 h-[25%] rounded flex flex-col justify- gap-y-2">
        {/* Logo / brand */}
        <div className="w-full h-auto flex justify-end items-center px-2 py-1">
          <h1 className="text-white font-bold text-xl italic">Less-Ego</h1>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer py-1">
          <FaHome size={25} />
          <p className="text-xl text-white font-bold">Lesego</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer py-1">
          <FaSearch size={25} />
          <p className="text-xl text-white font-bold">Search</p>
        </div>
      </div>
      {/* Second section */}
      <div className="bg-neutral-900 h-[75%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <RiStackFill size={25} />
            <p className="text-xl text-white font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <FaPlus size={25} />
          </div>
        </div>
        {/* create library section */}
        <div className="bg-neutral-700 p-4 m-2 rounded font-semibold flex flex-col items-start justify-center">
          <h1>Create Your First Library</h1>
          <p className="font-light">It's easy we will help you</p>
          <button className="bg-white rounded-full px-2 py-1 mt-4 text-black">
            Create playlist
          </button>
        </div>
        {/* Browse podcast */}
        <div className="bg-neutral-700 p-4 m-2 rounded font-semibold flex flex-col items-start justify-center">
          <h1>Let's find some podcast to follow</h1>
          <p className="font-light">We'll keep you updated on new episodes</p>
          <button className="bg-white rounded-full px-2 py-1 mt-4 text-black">
            Browse podcasts
          </button>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
