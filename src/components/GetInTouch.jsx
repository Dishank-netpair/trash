import React from "react";
import joker from "../images/joker.png";
import Button from "./button";
import Form from "./Form";
const GetInTouch = () => {
  return (
    <div className="flex flex-col items-center gap-5 mb-5">
      <img src={joker} alt="joker" />
      <h3 className="violetText text-2xl md:text-3xl lg:text-4xl">
        Get in Touch with
      </h3>
      <h3 className="text-2xl md:text-3xl lg:text-4xl yellowText">
        BROBET 247
      </h3>
    </div>
  );
};

export default GetInTouch;
