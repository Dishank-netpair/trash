import React from "react";
import BorderImage from "./borderImage";
import skyexch from "../images/skyexch.png";
import lotus from "../images/lotus.png";
import mrm777 from "../images/mrm777.png";
import crystal from "../images/crystal.png";
import mrmexch from "../images/mrmexch.webp";

const AvailableSites = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-10">
      <span className="yellowText text-3xl">Available Sites</span>
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center container">
        <BorderImage src={skyexch} />
        <BorderImage src={mrmexch} />
        <BorderImage src={lotus} />
        <BorderImage src={mrm777} />
        <BorderImage src={crystal} />
      </div>
    </div>
  );
};

export default AvailableSites;
