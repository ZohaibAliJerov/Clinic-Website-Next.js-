'use client';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import {sliderImg} from '../../../public/JsonData/SliderData';

const SliderRow = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sliderImg.length);
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sliderImg.length);
  };

  const goToPrevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + sliderImg.length) % sliderImg.length
    );
  };

  const sizes = {
    largeSizeText: 'text-[40px] font-normal',
    smallSizeText: 'text-[24px] font-normal',
  };
  const colors = {
    white: 'text-white',
    black: 'text-black',
    green: 'text-[#5E5E3C]',
  };

  return (
    <div className=" flex justify-end">
      <div className="flex flex-col md:flex-row w-[100%] ">
        <div className="flex flex-col justify-center md:w-1/2 pl-[24px] my-10 sm:mr-10 sm:my-10 md:mr-10">
          <h1 className={`${sizes[props.textSize]} $colors[props.textColor]`}>
            {props.title}
          </h1>
          <h1 className="text-[40px] font-normal">{props.subTitle}</h1>
          <div className="mt-10 ">
            <p className="text-[20px] font-normal text-[#A08A7F] cursor-pointer">
              {props.link1}
            </p>
            <p className="text-[20px] font-normal text-[#A08A7F] cursor-pointer">
              {props.link2}
            </p>
            <p className="text-[20px] font-normal text-[#A08A7F] cursor-pointer">
              {props.link3}
            </p>
          </div>
        </div>
        <div className="flex md:w-1/2 w-auto h-[500px] sm:h-[500px] md:h-[400px] lg:h-[600px]">
          <div className="relative w-full h-full" data-carousel="slide">
            <div>
              {sliderImg.map((slide, index) => (
                <div
                  key={index}
                  className={` absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  data-carousel-item
                >
                  <Image
                    src={slide.src}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
              onClick={goToPrevSlide}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
              onClick={goToNextSlide}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderRow;
