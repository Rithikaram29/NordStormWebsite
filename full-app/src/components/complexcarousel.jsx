import { useState } from "react";
import CarouselElement from "./carouselElement";
import { TopBrand } from "../data/homebodydata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const ComplexCarousel = ({ array }) => {
  const [position, setPosition] = useState(0);
  const slideAmount = 800; // Amount to slide
  const contentWidth = 3300; // Width of div2

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
    <div className="relative w-full h-carousel overflow-hidden  flex justify-between ">
      <button
        className="mt-10 w-5 h-carousel z-10 bg-transparent hover:text-blue-105"
        onClick={moveLeft}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div
        className="absolute transition-transform duration-500 flex ease-in-out w-fit gap-8 pl-9 pr-12 "
        style={{ transform: `translateX(${position}px)` }}
      >
        {array.map((ele, i) => {
          return (<div key={i} className="w-52 h-80">
            <CarouselElement obj={ele} />
          </div>)
        })}
      </div>
      <button
        className="mt-10 w-5 h-carousel z-10 bg-transparent hover:text-blue-105"
        onClick={moveRight}
      >
       <FontAwesomeIcon icon={faChevronRight} className="text-2xl"/>
      </button>
    </div>
    </div>
  );
};

export default ComplexCarousel;
