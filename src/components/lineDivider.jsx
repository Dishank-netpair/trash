import React from "react";
import linedivider from "../images/linedivider.png";

const LineDivider = ({ classNames }) => {
  return (
    <img
      className={`w-full ${classNames}`}
      style={{ mixBlendMode: "exclusion" }}
      src={linedivider}
      alt="logo"
    />
  );
};

export default LineDivider;
