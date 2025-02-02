import React from "react";
import symbol from "../assets/aboutsym.svg";
import group from "../assets/groupphotos.svg";
import curve from "../assets/curve.svg";

const About = () => {
  return (
    <div className="flex flex-wrap mt-6 ">
      <div className="w-full md:w-1/2 px-16 py-4">
        <h1 className="text-xl text-amber-500">WELCOME TO REGISTERKARO.IN</h1>
        <h1 className="text-black text-3xl font-bold mt-2 ">
          About <span className="text-amber-500">Register Karo</span>{" "}
        </h1>
        <p className="mt-2">
          We have been using Intelegencia as our DevOps vendor for our field
          service applications over the last couple of years and I’m extremely
          pleased with their performance, ability to execute, and willingness to
          adapt in our ever changing environment. Perry is an outstanding leader
          who is fanatical about customer satisfaction. He has built a solid
          team which has consistently delivered on projects thereby exceeding
          everyone’s expectations.
        </p>
        <p className="mt-3">
          I would strongly recommend their services to any organization that is
          looking for solid, reliable, and predictable outcomes.
        </p>
        <button className="flex bg-sky-900 text-white items-center gap-1 mt-6 cursor-pointer font-semibold px-6 py-3 rounded-md ">
          Learn more
          <img src={symbol} alt="" className="relative top-[2px] " />
        </button>
      </div>
      <div className="w-full md:w-1/2 p-2 flex items-start">
        <div className="w-[75%] mt-4 ">
          <img src={group} alt=""  className="w-full h-auto" />
        </div>
        <div className="w-[20%] relative bottom-[15px] left-4  ">
          <img src={curve} alt="" width={40} height={150} className="w-[40%] md:w-[40px] h-auto"/>
        </div>
      </div>
    </div>
  );
};

export default About;
