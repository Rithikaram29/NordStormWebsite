import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  carouselImages,
  BannerUrl,
  carousel2,
  moreToknow,
  thesePlease,
  TopBrand,
  Top100Deals,
  TrendingNow,
  AfterBanner
} from "../data/homebodydata";
import Carousel from "./carousel";
import ComplexCarousel from "./complexcarousel";
import { useNavigate } from "react-router-dom";
import ScoreCarousel from "./scoreCarousel";

const HomeBody = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate()
  let buttonClicked = false;

  const changeCarousal = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    // console.log(carouselImages[0].position)
  };

  useEffect(() => {
    if (!buttonClicked) {
      let interval = setInterval(() => {
        changeCarousal();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, []);

  

  return (
    <>
      {/* rack and signup button--------------------------------------------------------------------------------- */}
      <div className="flex flex-col justify-center items-center h-20 gap-6 mt-10">
        <h1 className="font-ubuntu font-bold text-3xl">
          More to Rack, easier and faster.
        </h1>
        <button className="border border-blue-105 p-2 text-sm w-106"  >
          Sign In or Create an Account
        </button>
      </div>

      {/*1st   banner ---------------------------------------------------------------------------------------- */}
      <div className="w-full h-200 pl-7 pr-7 mt-2 mb-2">
        <div
          className="w-full h-full bg-contain"
          style={{ backgroundImage: `url(${BannerUrl[0].url})` }}
        >
          <p>Top 100 deals</p>
        </div>
      </div>

      {/*1st   carousel wheel--------------------------------------------------------------------------------------- */}
      <div className="w-full h-720 p-7">
        <div
          className="w-full h-full flex flex-col items-center"
          style={{
            backgroundImage: `url('${carouselImages[currentIndex].url}')`,
          }}
        >
          <div
            className="w-full h-full flex justify-between items-center opacity-0 hover:opacity-100 transition-opacity duration-400
          "
          >
            <button className="text-blue-105 text-4xl hover:bg-blue-105 hover:bg-opacity-50 transition-all duration-400 w-24 h-20 ml-5">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="text-blue-105 text-4xl hover:bg-blue-105 hover:bg-opacity-50 transition-all duration-400 w-24 h-20 mr-5">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div className="relative w-full h-36 ">
            <p
              className="absolute"
              style={{
                ...carouselImages[currentIndex].position,
                textDecoration: "underline",
              }}
            >
              {carouselImages[currentIndex].text}
            </p>
          </div>
        </div>
      </div>

      {/*2nd   banner ---------------------------------------------------------------------------------------- */}
      <div className="w-full h-200 pl-7 pr-7 mt-2 mb-2">
        <div
          className="w-full h-full bg-contain"
          style={{ backgroundImage: `url(${BannerUrl[1].url})` }}
        >
          <p></p>
        </div>
      </div>

      {/*2nd   carousel wheel--------------------------------------------------------------------------------------- */}
      <div className=" h-full w-full p-7 flex">
        <Carousel Images={carousel2} />
      </div>

      <div className=" h-full w-full p-7 flex  flex-col">
        <div className="w-full flex justify-between">
          <p className="font-extra-bold text-xl ">Top Brands You'll Love</p>
          <button className="border border-blue-105 font-light p-3">
            View All Top Brand You'll Love
          </button>
        </div>
        <ComplexCarousel array={TopBrand}/>
      </div>
      

      {/*3rd   banner ---------------------------------------------------------------------------------------- */}
      <div className="w-full h-200 pl-7 pr-7 mt-2 mb-2">
        <div
          className="w-full h-full bg-contain"
          style={{ backgroundImage: `url(${BannerUrl[3].url})` }}
        >
          <p></p>
        </div>
      </div>

      {/*full banner ---------------------------------------------------------------------------------------- */}
      <div className="w-full h-720 p-7">
        <div
          className="w-full h-full flex flex-col items-center bg-contain"
          style={{
            backgroundImage: `url('https://n.nordstrommedia.com/it/53474a52-a537-46ba-b02e-96c4b9e57758.jpeg?h=720&w=1608')`,
          }}
        >
          <div
            className="w-full h-full flex justify-between items-center opacity-0 hover:opacity-100 transition-opacity duration-400
          "
          ></div>
        </div>
      </div>

       {/*These Please---------------------------------------------------------------------------------------- */}
       <div className="flex m-8">
        <div className="w-230 p-12 flex flex-col items-start justify-center"> 
          <h2 className="font-bold text-3xl">These, Please</h2>
          <p className="pt-2 pr-2">The pieces you can't stop thinking about—all in one place.</p>
        </div>
        <div className="flex">
       {
        thesePlease.map((ele,i)=>{
          return(
            <div key={i} className="w-240">
              <img src={ele.image}/>
              <p className="text-blue-105 underline">{ele.link}</p>
            </div>
          )
        })
       }
       </div>
       </div>

       {/*4th   banner ---------------------------------------------------------------------------------------- */}
      <div className="w-full h-200 pl-7 pr-7 mt-2 mb-2">
        <div
          className="w-full h-full bg-contain"
          style={{ backgroundImage: `url(${BannerUrl[4].url})` }}
        >
          <p></p>
        </div>
      </div>

      
      {/*3rd   carousel wheel--------------------------------------------------------------------------------------- */}
      
      <div className=" h-full w-full p-7 flex  flex-col">
        <div className="w-full flex justify-between">
         
        </div>
        <ComplexCarousel array={AfterBanner}/>
      </div>

        {/*full banner ---------------------------------------------------------------------------------------- */}
        <div className="w-full h-720 p-7">
        <div
          className="w-full h-full flex flex-col items-center bg-contain"
          style={{
            backgroundImage: `url('https://n.nordstrommedia.com/it/0685e63e-d480-48ba-bc50-2145499e28c8.jpeg?h=720&w=1608')`,
          }}
        >
          <div
            className="w-full h-full flex justify-between items-center opacity-0 hover:opacity-100 transition-opacity duration-400
          "
          ></div>
        </div>
      </div>

        {/* Top100 deals 4th  carousel wheel--------------------------------------------------------------------------------------- */}
        <div className=" h-full w-full p-7 flex  flex-col">
        <div className="w-full flex justify-between">
          <p className="font-extra-bold text-xl ">Top 100 Deals</p>
          <button className="border border-blue-105 font-light p-3">
            View All Top 100 Deals
          </button>
        </div>
        <ComplexCarousel array={Top100Deals}/>
      </div>

      {/*Score carousel! --------------------------------------------------------------------------------------- */}
      

      <div className=" h-full w-full p-7 flex flex-col">
        <div className="w-full flex flex-col justify-between">
          <p className="font-extra-bold text-xl">Score!</p>
          <p className="text-md">See something you love? Click the photo to shop our Instagram. Plus, tag us @nordstromrack to share your finds</p>
          
        </div>
<ScoreCarousel/>
      </div>
      


      {/*5th  carousel! --------------------------------------------------------------------------------------- */}
     
      <div className=" h-full w-full p-7 flex  flex-col">
        <div className="w-full flex justify-between mb-10">
          <p className="font-extra-bold text-xl ">Trending Now</p>
        </div>
        <ComplexCarousel array={TrendingNow}/>
      </div>


      {/*before footer---------------------------------------------------------------------------------------- */}
      <div className="flex flex-col p-7">
        <p className="font-extra-bold text-2xl mb-10">More to Know</p>
        <div className="flex justify-between">
          {moreToknow.map((ele, i) => {
            return (
              <div className="flex flex-col w-230">
                <img src={ele.img} className="max-w-808" />
                <h2 className="font-bold mb-2 mt-2 text-title">{ele.title}</h2>
                <p className=" mt-2 text-title">{ele.description}</p>
                <p className="text-blue-105 underline hover:cursor-pointer">
                  {ele.link}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeBody;
