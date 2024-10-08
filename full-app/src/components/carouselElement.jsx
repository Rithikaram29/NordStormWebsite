import { useEffect, useState } from "react";
import { TopBrand } from "../data/homebodydata";
import StarRating from "./starRating";

const CarouselElement = ({ obj }) => {
  let currentImage = 0;
  const [currentIndex, setCurrentIndex] = useState(currentImage);

  const mouseEnterHandle = (j) => {
    setCurrentIndex(j);
  };

  const mouseLeaveHandle = () => {
    setCurrentIndex(currentImage);
  };

  const radioClick = (e, j) => {
    e.preventDefault();
    currentImage = j;
  };

  return (
    <>
    {/* ------------------------DISPLAY IMAGE ----------------------------*/}
      <div className="relative group bg-yellow-105 mb-3">
        <img src={obj.colors[currentIndex].image} className="w-full h-auto border border-gray-100" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity  flex items-end justify-center">
          <button className="relative z-20 border border-gray-400 w-full h-10 hover:opacity-100  bg-white group-hover:opacity-90 text-blue-105">
            Quick View
          </button>
        </div>
        { obj.popular ? <div className="absolute bottom-0 left-0 z-10 font-bold text-xs bg-yellow-105 bg-opacity-60 p-1 "><p>Popular</p></div> : null}
        
      </div>

      {/* ------------------------RADIO IMAGE ----------------------------*/}
      <div className="flex gap-2 mb-2">
        {obj.colors.length > 1
          ? obj.colors.map((clr, j) => {
            const isActive = currentIndex === j
              return (
                <div
                  key={j}
                  className={`hover:border-gray-500 ${isActive ? 'border-2 border-gray-500' : 'border'} hover:border-2 border-gray-300 hover:cursor-pointer`}
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onMouseEnter={() => mouseEnterHandle(j)}
                  onMouseLeave={() => mouseLeaveHandle()}
                  onClick={(e) => radioClick(e, j)}
                  
                >
                  <div
                    style={{
                      backgroundImage: `url(${clr.image})`,
                      width: "15px",
                      height: "15px",
                      border: "1px solid #cccccc",
                      backgroundSize: "100px 100px",
                      backgroundPosition: "35% 79%",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "7.5px",
                    }}
                  ></div>
                </div>
              );
            })
          : null}
      </div>


      {/* ------------------------DESCRIPTION ----------------------------*/}
      {obj.limitedSale ? <p className="text-red-limited font-bold">Limited-Time Sale</p>: null }
      {obj.new ? <p className="text-blue-purple font-bold">New!</p>: null}
      <p className={obj.brandlink? 'text-blue-105 hover:underline hover:cursor-pointer' : null}>{obj.brand}</p>

      {obj.price.showPrice ? (
        <div className="mt-2 mb-2">
        <p className={`${obj.limitedSale ? 'text-red-limited ' : null}`}>
           <span className='font-bold'>${obj.price.price}</span> {obj.price.offer}
        </p>
        <p className="line-through text-gray-950 mt-2"> ${obj.price.discount}</p>
        </div>
      ) : (
        <p>Add to Bag or Wish List to see price</p>
      )}
      {obj.rating.present ?    <p className="flex gap-4 text-gray-500 mt-2 mb-2"><span><StarRating rating={obj.rating.stars}/></span>{obj.rating.number}</p>: null}
   
      
    </>
  );
};

export default CarouselElement;
