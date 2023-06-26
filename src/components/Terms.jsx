import React from "react";
import Button from "./button";

const data = [
  {
    id: 1,
    text: "Min Deposit",
    Rs: "Rs. 100",
  },
  {
    id: 2,
    text: "Min Refill",
    Rs: "Rs. 100",
  },
  {
    id: 3,
    text: "Min Withdrawal",
    Rs: "Rs. 100",
  },
  {
    id: 4,
    text: "Max Process Time",
    Rs: "15 Minutes",
  },
  {
    id: 5,
    text: "Timings",
    Rs: "24 Hours",
  },
  {
    id: 6,
    text: "Days",
    Rs: "365 Days",
  },
];

const Terms = () => {
  return (
    <>
      <div className="container">
        <div className="text-white text-center font-semibold my-20 p-5 flex flex-col gap-5 yellowLine rounded-xl">
          <div className="flex justify-center items-center ">
            <h1 className="yellowText text-3xl md:text-4xl">Terms</h1>
          </div>
          <div className="w-full yellowLine" />
          {data.map(({ id, text, Rs }) => {
            return (
              <div
                className="flex md:text-xl gap-20 md:gap-40 lg:gap-80 justify-between"
                key={id}
              >
                <h3>{text}</h3>
                <div>{Rs}</div>
              </div>
            );
          })}
          <div className="w-full yellowLine" />
          <span className="violetText text-2xl md:text-3xl">
            Place you BET in our IDs
          </span>
          <h2 className="text-white text-xl font-semibold">
            With our Step-By-Step guide for Beginners, Get started playing.
            Start learning now.. 25/7 ACTIVE
          </h2>
          <h2 className=" text-[#FFF501] text-xl font-semibold">
            We deal only on WhatsApp
          </h2>
          <div className="flex justify-center items-center">
            <Button whatsapp={true} text={"+91 8469104000"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
