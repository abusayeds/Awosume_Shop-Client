import React, { useState, useEffect } from "react";
import TopNavber from "./TopNavber";

const BannerNavber: React.FC = () => {
  const images: string[] = [
    "https://adventureshop.mt/cdn/shop/files/Sqaure-8-2024_Classic_Air_Orange_Product_High1-large.jpg?v=1713436975&width=2500",
    "https://adventureshop.mt/cdn/shop/files/2021-Vango-Lifestyle-Embrace-1-HI-large.jpg?v=1721306053&width=1750",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(true);
//   const [scrollColor, setScrollColor] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setTimeout(() => {
          setAnimate(true);
        }, 100);
      }, 600);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [images.length]);
//   const hendelScrollColor = () => {
//     if (window.scrollY >= 40) {
//       setScrollColor(true);
//     } else {
//       setScrollColor(false);
//     }
//   };
//   window.addEventListener("scroll", hendelScrollColor);
  return (
    <main
      className="h-[700px] sm:h-screen  md::h-screen  lg:h-screen  text-white 
       xl:h-screen bg-cover bg-center  transition-all duration-1000 ease-in-out flex justify-center items-center "
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      {/* <div className=" hover:bg-black hover:opacity-100 duration-500 w-full fixed z-50 top-0 h-auto    ">
        <div
          className={` hidden md:block transition-colors duration-1000 ${
            scrollColor
              ? " bg-black opacity-100 border-none"
              : " hover:opacity-100 transition ease-in-out delay-150 duration-1000"
          }`}
        >
          <TopNavber />
        </div>
        <div
          className={`md:hidden block ${
            scrollColor ? " bg-black " : " bg-black "
          }`}
        >
          <TopNavber />
        </div>
      </div> */}

      <section
        className={`flex md:items-center flex-col gap-4 transform transition-transform duration-1000 ease-in-out ${
          animate ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <p>Lorem, ipsum dolor.</p>
        <p className=" text-3xl sm:text3xl font-semibold md:text-4xl lg:text-5xl xl:text-7xl">
          Lorem ipsum dolor sit
        </p>
        <button className="w-32 text-black uppercase bg-white px-4 py-2 rounded">
          Shop now
        </button>
      </section>
    </main>
  );
};

export default BannerNavber;
