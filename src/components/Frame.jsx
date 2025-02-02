import React from "react";
import ellipse1 from "../assets/ellipse.svg";
import ellipse2 from "../assets/ellipse (1).svg";
import ellipse3 from "../assets/ellipse (2).svg";
import ellipse4 from "../assets/ellipse (3).svg";
import vectorA from "../assets/vectorA.svg";
import vectorB from "../assets/vectorB.svg";
import vectorC from "../assets/vectorC.svg";
import vectorD from "../assets/vectorD.svg";

const Frame = () => {
  return (
    <div className="bg-amber-500 flex flex-wrap justify-center  gap-2 items-center h-[300px] md:h-40 w-full text-center ">
      <div className="flex items-center  md:items-center gap-0 w-60">
        <div className="h-12 w-12 bg-red-500 rounded-full relative ">
          <img
            src={vectorA}
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <h4 className="text-[18px] font-semibold text-black">
          Fill up Application Form
        </h4>
      </div>
      <div className="flex items-center  md:items-center gap-1 w-60">
        <div className="h-12 w-12 bg-green-600 rounded-full relative ">
          <img
            src={vectorB}
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <h4 className="text-[18px] font-semibold text-black">
          Make Online Payment
        </h4>
      </div>
      <div className="flex items-center  md:items-center gap-1 w-60">
        <div className="h-12 w-18 bg-orange-400 rounded-full relative ">
          <img
            src={vectorC}
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <h4 className="text-[18px] font-semibold text-black">
          Executive Will Process Application
        </h4>
      </div>
      <div className="flex items-center  md:items-center gap-1 w-60">
        <div className="h-12 w-12 bg-neutral-500 rounded-full relative ">
          <img
            src={vectorD}
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <h4 className="text-[18px] font-semibold text-black">Get Confirm Mail</h4>
      </div>
    </div>
  );
};

export default Frame;
