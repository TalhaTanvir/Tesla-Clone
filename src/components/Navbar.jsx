import React from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="relative flex items-center justify-between mx-10 font-semibold h-18">
      <div>
        <span>
          <a href="#home">Tesla</a>
        </span>
      </div>

      <div>
        <ul className="flex items-center gap-6">
          <li>Vehicle</li>
          <li>Energy</li>
          <li>Charging</li>
          <li>Discover</li>
          <li>Shop</li>
        </ul>
      </div>

      <div className="flex items-center gap-2 text-xl">
        <div>
          <CiCircleQuestion />
        </div>
        <div>
          <AiOutlineGlobal />
        </div>
        <div>
          <FaRegUserCircle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
