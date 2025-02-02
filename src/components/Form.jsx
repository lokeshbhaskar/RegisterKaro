import React from "react";
import icon from "../assets/icon.svg";

const Form = () => {
  return (
    <div className="mt-6">
      <div className="h-[500px] md:h-[330px] bg-gradient-to-r from-[#FFA229] to-[#1C4670] text-center p-6">
        <h2 className="text-white text-[15px] ">1% OF THE INDUSTRY</h2>
        <h1
          className="text-[30px] md:text-[40px] font-semibold
            text-white"
        >
          Welcome to your new digital reality. Now.
        </h1>
        <div className="flex items-center justify-center  text-center rounded-md overflow-hidden mt-5  ">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-white outline-none px-4 w-[400px]  min-w-0 h-[56px] text-black rounded-bl-md rounded-tl-md"
          />
          <button className="bg-amber-500 font-semibold text-white h-[56px] px-6 rounded-br-md rounded-tr-md">
            Submit
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="flex gap-5 items-center sm:gap-2 sm:w-auto text-center  ">
            <div className="relative w-[30px] h-[30px] bg-white rounded-full ">
              <img
                src={icon}
                alt=""
                className="absolute w-[16px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <h4 className="text-white text-[22px]  ">Instant results</h4>
          </div>
          <div className="flex gap-5 items-center">
            <div className="relative w-[30px] h-[30px] bg-white rounded-full ">
              <img
                src={icon}
                alt=""
                className="absolute w-[16px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <h4 className="text-white text-[22px]">User-friendly interface</h4>
          </div>
          <div className="flex gap-2 items-center">
            <div className="relative w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
              <img
                src={icon}
                alt=""
                className="absolute w-[16px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <h4 className="text-white text-xl sm:text-base text-center">
              Personalized customization
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
