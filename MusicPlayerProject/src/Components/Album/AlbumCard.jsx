import React from "react";

const AlbumCard = ({ item }) => {
  return (
    <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-red-200">
      <img className="rounded" src={item.image} />
      <p className="font-bold my-2">{item.name}</p>
      <p className="text-slate-200 text-sm">{item.desc}</p>
    </div>
  );
};

export default AlbumCard;
