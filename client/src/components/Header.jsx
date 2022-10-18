import React from "react";
import {
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
} from "../constants";
import Carousel from "./Carousel";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="h-screen" id="home">
      <Navbar />
      <Carousel
        images={[carousel1, carousel2, carousel3, carousel4, carousel5]}
      />
      <div className="absolute top-32 left-24 select-none">
        <h2 className="text-7xl font-bold text-[#1F1F1F] font-tnr leading-normal tracking-wider drop-shadow-xl">
          Explore the Beauty <br /> of Journey.
        </h2>
        <p className="font-roboto font-medium text-2xl py-5">
          If we were meant to stay in one place,
          <br /> we’d have roots instead of feet.
        </p>
        <button className="text-white bg-[#FF8227] hover:bg-[#fa6e0a] duration-300 hover:scale-95 px-10 py-3 rounded-2xl mt-10 font-semibold">
          Discover more --&gt;
        </button>
      </div>
    </div>
  );
};

export default Header;
