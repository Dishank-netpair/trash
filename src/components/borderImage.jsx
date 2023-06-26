import React from "react";
const BorderImage = ({ src }) => {
  return (
    <img
      height={"352px"}
      width={"352px"}
      className="imageShadow rounded-lg"
      src={src}
      alt="Available sites"
    />
  );
};

export default BorderImage;
