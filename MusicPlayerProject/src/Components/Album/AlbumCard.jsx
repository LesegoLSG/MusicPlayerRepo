import React from "react";
import { useNavigate } from "react-router-dom";

//Card for albums
const AlbumCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${item.id}`)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-hoverColor inline-block"
    >
      <img className="rounded" src={item.image} alt="albumImage" />
      <p className="font-bold my-2">{item.name}</p>
      <p className="text-slate-200 text-sm">{item.desc}</p>
    </div>
  );
};

export default AlbumCard;
