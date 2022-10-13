import React from "react";
import { airplaneLogo, homeIcon, searchIcon } from "../constants";

const navigationMenu = [
  "home",
  "book",
  "packages",
  "services",
  "gallery",
  "community",
];

const Navbar = () => {
  return (
    <nav className="bg-[rgba(217,217,217,0.5)] px-20 lg:px-32 py-5 fixed w-full backdrop-blur-sm z-50">
      <div className="flex justify-between">
        <div className="logo flex items-center gap-3">
          <img src={airplaneLogo} alt="plane" className="w-[25px] h-[31px]" />
          <div className="font-roboto font-extrabold text-2xl">VOYAGE</div>
        </div>
        <ul className="flex gap-10 items-center font-roboto">
          {navigationMenu.map((item) => (
            <li className="capitalize" key={item}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-14">
          <img src={homeIcon} alt="plane" className="w-6 h-6" />
          <img src={searchIcon} alt="plane" className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
