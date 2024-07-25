import React from "react";
import Logo2 from "../../assets/Logo/Logo2.png";

const NavBarTop = () => {
  return (
    <div className="w-full min-h-14 flex justify-center items-center p-2">
      {/* Logo */}
      <div className="max-w-screen-2xl container h-auto flex justify-start items-center bg-neutral-900 px-4 py-2 rounded-md">
        <img src={Logo2} alt="Logo2" className="w-28 md:w-36" />
      </div>
    </div>
  );
};

export default NavBarTop;
