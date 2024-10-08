import { useState } from 'react';

const Carousel = ({Images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesPerPage = 3;
    const totalImages = Images.length;

    const nextSlide = () => {
        if (currentIndex + imagesPerPage < totalImages) {
            setCurrentIndex(currentIndex + imagesPerPage);
        }
    };

    const prevSlide = () => {
        if (currentIndex - imagesPerPage >= 0) {
            setCurrentIndex(currentIndex - imagesPerPage);
        }
    };

    return (
        <div className="relative overflow-hidden w-full h-full"> 
            <button
                className={`absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={()=>prevSlide()}
                disabled={currentIndex === 0}
            >
                &lt;
            </button>
            <div className="flex transition-transform duration-500 ease-in-out" >
                {Images.slice(currentIndex, currentIndex + imagesPerPage).map((image, index) => (
                    <div key={index} className="flex flex-col items-start w-full m-7 ">
                        <img src={image.url} alt={image.title} className=" h-404 object-fit" />
                        <h3 className="text-md font-semibold mt-2">{image.title}</h3>
                        <p className="text-gray-600">{image.description}</p>
                    </div>
                ))}
            </div>
            <button
                className={`absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded ${currentIndex + imagesPerPage >= totalImages ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={()=>nextSlide()}
                disabled={currentIndex + imagesPerPage >= totalImages}
            >
                &gt;
            </button>
        </div>
    );
};

export default Carousel;