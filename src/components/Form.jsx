import React from "react";
import Button from "./button";

const Form = () => {
  return (
    <>
      <div className=" border-2 dot border-dotted border-[#FECF0A] rounded-2xl container mb-10">
        <div className="text-white text-center font-semibold flex flex-col items-center border-2 border-[#F9A6FF] rounded-2xl p-3 my-5">
          <div className="text-white text-center font-semibold px-4 py-7 flex flex-col items-center gap-5 formLine rounded-xl w-full">
            <form className="w-full">
              <div className="border-2 border-solid border-yellow-400 rounded-md mb-3">
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="h-12 bg-[#220a40] w-full p-5"
                />
              </div>
              <div className="border-2 border-solid border-yellow-400 rounded-md mb-3">
                <input
                  type="text"
                  placeholder="Enter your E-mail ID"
                  className="h-12 bg-[#220a40] w-full p-5"
                />
              </div>
              <div className="border-2 border-solid border-yellow-400 rounded-md">
                <input
                  type="text"
                  placeholder="Write Your Message..."
                  className="h-40 bg-[#220a40] w-full p-5"
                />
              </div>
            </form>
            <Button whatsapp={false} text={"Submit"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
