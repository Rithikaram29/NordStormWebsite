import { useState } from "react";
import CarouselElement from "./carouselElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { ScoreItems } from "../data/homebodydata";


const ScoreCarousel = () => {
  const [position, setPosition] = useState(0);
  const slideAmount = 800; // Amount to slide
  const contentWidth = 3500; // Width of div2

  const moveLeft = () => {
    if (position < 0) {
      // Ensure it doesn't go beyond left
      setPosition((prevPosition) => Math.min(prevPosition + slideAmount, 0));
    }
  };

  const moveRight = () => {
    if (position > -(contentWidth - 64)) {
      // Ensure it doesn't go beyond right
      setPosition((prevPosition) =>
        Math.max(prevPosition - slideAmount, -(contentWidth - 64))
      );
    }
  };

  return (
    <div>
    <div className="relative w-full h-score overflow-hidden  flex justify-between mt-16">
      <button
       className="mb-10 w-10 h-score z-10 bg-transparent hover:text-gray-500 hover:bg-slate-100 hover:bg-opacity-50"
        onClick={moveLeft}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-2xl"/>
      </button>
      <div
        className="absolute transition-transform duration-500 flex flex-row-reverse  ease-in-out w-fit gap-2 pl-9 pr-12 "
        style={{ transform: `translateX(${position}px)` }}
      >
        {ScoreItems.map((ele, i) => {
          return (<div key={i}className=" w-555 h-full ">
            <div className="relative z-0 hover:cursor-pointer">
                <img src={ele.image} className="w-full h-full object-cover"/>
                <div className="absolute h-score top-0 inset-0 z-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="bg-opacity-65 bg-slate-950 font-bold text-white text-center h-full flex items-center justify-center">Shop Now</p></div>
            </div>
          </div>)
        })}
      </div>
      <button
        className="mb-10 w-10 h-score z-10 bg-transparent hover:text-gray-500 hover:bg-slate-100 hover:bg-opacity-50"
        onClick={moveRight}
      >
       <FontAwesomeIcon icon={faChevronRight} className="text-2xl"/>
      </button>
    </div>
    </div>
  );
};

export default ScoreCarousel;