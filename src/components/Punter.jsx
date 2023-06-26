import React from "react";
import broBetRight from "../images/image-1BROBETRight.webp";

const Punter = () => {
  return (
    <section>
      <div className="flex relative">
        <div className="flex items-end absolute justify-end h-72 top-2 right-0">
          <img src={broBetRight} alt="logo" />
        </div>
        <div className="container flex flex-col text-start pt-10">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold pb-5">
            <span className="violetText">The Punter</span>
            <br />
            <span className="yellowText"> Friendly</span>
            <br />
            <span className="violetText">Book</span>
            <br />
          </h1>
          <p className="text-lg md:text-2xl  text-white pb-5">
            We deals with all <br className=" block md:hidden" />
            Branded sites, and present <br className="block lg:hidden" /> the
            Fastest <br className="block lg:hidden" />
            Withdrawal Service.
          </p>
          <p className="text-lg  text-[#FFF501]">We deal only on WhatsApp</p>
        </div>
      </div>
    </section>
  );
};

export default Punter;
