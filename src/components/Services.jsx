import React from "react";
import vector from "../assets/vector.svg.svg";
import vector1 from "../assets/vector-1.svg.svg";
import vector2 from "../assets/vector-2.svg.svg";
import vector3 from "../assets/vector-3.svg.svg";
import vector4 from "../assets/vector-4.svg.svg";
import vector5 from "../assets/vector-5.svg.svg";
import symbol from "../assets/Symbol.svg";
import before from '../assets/before.svg'


const Services = () => {
  return (
    <div>
      <h4 className="text-amber-500 text-center mt-2">WELCOME TO REGISTERKRO.IN</h4>
      <h1 className="text-3xl mt-2 md:text-4xl text-center font-semibold md:mt-4">
        Explore Our Services
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-8  ">
        <div
          id="card1"
          className="w-80 p-4 flex flex-col items-center text-center">
          <div>
            <img src={vector} alt="vector" />
          </div>
          <h4 className="text-2xl font-semibold mt-6">Company Formation</h4>
          <p className="mt-4" >Build web-based solutions that enhance customer experience</p>
          <button className="flex items-center gap-1 mt-4 cursor-pointer font-semibold">
            Learn more
            <img src={symbol} alt="" />
          </button>
        </div>

        {/* Vertical Line */}
        <div className="hidden md:block w-px bg-gray-300 h-auto">
          <img  src={before} alt=""  className="max-w-[10px]  relative left-[-2.5px]  top-[50px]  "/>
        </div>

        <div
          id="card2"
          className="w-80 p-4 flex flex-col items-center   text-center"
        >
          <div>
            <img src={vector1} alt="vector1" />
          </div>
          <h4 className="text-2xl font-semibold mt-6">
            Company Secretarial Services
          </h4>
          <p className="mt-4">
            Make data-driven decisions and utilize technology to reach business
            goals
          </p>
          <button className="flex items-center gap-1 mt-4 cursor-pointer font-semibold ">
            Learn more
            <img src={symbol} alt="" />
          </button>
        </div>
         {/* Vertical Line */}
        <div className="hidden md:block w-px bg-gray-300 h-auto">
          <img  src={before} alt=""  className="max-w-[10px]  relative left-[-2.5px] top-[200px]"/>
        </div>
        <div
          id="card3"
          className="w-80 p-4 flex flex-col items-center  text-center"
        >
          <div>
            <img src={vector2} alt="vector2" />
          </div>
          <h4 className="text-2xl font-semibold mt-6">
            Vertual Office Address
          </h4>
          <p className="mt-4">
            Foster customer relationships by effectively serving your market
          </p>
          <button className="flex items-center gap-1 mt-4 cursor-pointer font-semibold ">
            Learn more
            <img src={symbol} alt="" />
          </button>
        </div>
          
        <div
          id="card4"
          className="w-80 p-4 flex flex-col items-center  text-center"
        >
          <div>
            <img src={vector3} alt="vector3" />
          </div>
          <h4 className="text-2xl font-semibold mt-6">
            Annual Compliance Services
          </h4>
          <p className="mt-4" >
             Turn your ideas into modern products with our design experts
          </p>
          <button className="flex items-center gap-1 mt-4 cursor-pointer font-semibold ">
            Learn more
            <img src={symbol} alt="" />
          </button>
        </div>
      {/* vertical line */}
        <div className="hidden md:block w-px bg-gray-300 h-auto">
          <img  src={before} alt=""  className="max-w-[10px]  relative left-[-2.5px] top-[50px]"/>
        </div>
        <div
          id="card5"
          className="w-80 p-4 flex flex-col items-center text-center"
        >
          <div>
            <img src={vector4} alt="vector4" />
          </div>
          <h4 className="text-2xl font-semibold mt-6 ">
            Payroll Services
          </h4>
          <p className="mt-4">
             Expand your business across the globe with minimal effort
          </p>
          <button className="flex items-center gap-1 mt-4 cursor-pointer font-semibold ">
            Learn more
            <img src={symbol} alt="" />
          </button>
        </div>
         {/* Vertical Line */}
         <div className="hidden md:block w-px bg-gray-300 h-auto">
          <img  src={before} alt=""  className="max-w-[10px]  relative left-[-2.5px] top-[200px]"/>
        </div>
        <div
          id="card6"
          className="w-80 p-4 flex flex-col items-center  text-center"
        >
          <div>
            <img src={vector5} alt="vector2" />
          </div>
          <h4 className="text-2xl font-semibold mt-6">
            Bookkeeping Services
          </h4>
          <p className="mt-4">
            Steering users behaviours with creative design, data insights & technology
          </p>
          <button className="flex items-center gap-1 mt-4 cursor-pointer font-semibold">
            Learn more
            <img src={symbol} alt="" />
          </button>
        </div>
        
      </div>
      <div className="flex justify-center mt-8 ">
      <button className="px-6 text-white font-semibold py-4 bg-sky-900 rounded-md cursor-pointer ">
          See All Services
      </button>
      </div>
    </div>
  );
};

export default Services;
