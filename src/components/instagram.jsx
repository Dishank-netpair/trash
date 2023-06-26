import React, { useEffect, useRef, useState } from "react";
import insta from "../images/Insta-Post1.webp";
import poker from "../images/Poker11.webp";
import casinobg from "../images/casinobg.webp";
import casino25 from "../images/casino25.webp";
import img777 from "../images/img777.webp";
import BorderImage from "./borderImage";

const Instagram = () => {
  const slideshowRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slides = slideshowRef.current.querySelectorAll(".slideshow__slide");
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= slides.length ? 0 : nextIndex;
      });
    }, 3000);
    console.log(slides.length);
    console.log(activeIndex);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="flex flex-col items-center gap-10 container">
        <span className="yellowText text-3xl font-bold">Instagram</span>
        <div className="slideshow max-w-xs sm:max-w-sm" ref={slideshowRef}>
          <div
            className={`slideshow__slide ${activeIndex === 0 ? "active" : ""}`}
          >
            <BorderImage src={insta} />
          </div>
          <div
            className={`slideshow__slide ${activeIndex === 1 ? "active" : ""}`}
          >
            <BorderImage src={poker} />
          </div>
          <div
            className={`slideshow__slide ${activeIndex === 2 ? "active" : ""}`}
          >
            <BorderImage src={casinobg} />
          </div>
          <div
            className={`slideshow__slide ${activeIndex === 3 ? "active" : ""}`}
          >
            <BorderImage src={casino25} />
          </div>
          <div
            className={`slideshow__slide ${activeIndex === 4 ? "active" : ""}`}
          >
            <BorderImage src={img777} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Instagram;
