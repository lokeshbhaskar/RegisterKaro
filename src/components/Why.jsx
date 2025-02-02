import React from "react";
import protection from "../assets/protection.svg";
import check from "../assets/check.svg";
import smile from "../assets/smiley.svg";
import profile from '../assets/profile.svg'


const Why = () => {
  return (
    <div  className="mt-[-100px] md:mt-0">
      <div className="flex flex-wrap p-5">
        <div className="w-full md:w-1/2  p-10 flex flex-col">
          <h4 className="text-amber-500">WHY REGISTERKRO.IN</h4>
          <h4 className="text-3xl font-bold mt-4">Why Choose Register Karo</h4>
          <p className="mt-4">
            It is with consistent services and results that build trust with the
            people and that in turn help us to serve the business better.
          </p>
        </div>
        <div className="w-full sm:w-1/2  p-2 flex  flex-wrap gap-2 items-center justify-center ">
          <div
            id="card1"
            className="p-5 w-60 h-45 border-2 rounded-lg border-pink-100 flex flex-col items-center text-center bg-red-50"
          >
            <img src={protection} alt="" />
            <h4 className="text-xl font-semibold mt-2 ">Confidetial & Safe</h4>
            <p className="mt-2">All your private information is safe with us</p>
          </div>
          <div
            id="card2"
            className="p-5 w-60 h-45 border-2 rounded-lg border-pink-100 flex flex-col items-center text-center bg-red-50"
          >
            <img src={check} alt="" />
            <h4 className="text-xl font-semibold mt-2 ">No Hidden Fee</h4>
            <p className="mt-2">
              Everything is put before you with no hidden charges or conditions
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full  md:w-1/2 flex justify-center md:justify-end">
          <div
            id="card3"
            className="p-5 w-60 h-45 border-2 rounded-lg border-pink-100 flex flex-col items-center text-center bg-red-50"
          >
            <img src={smile} alt="" />
            <h4 className="text-xl font-semibold mt-2 ">No Hidden Fee</h4>
            <p className="mt-2">
              Everything is put before you with no hidden charges or conditions
            </p>
          </div>
        </div>
        <div className="w-full flex flex-wrap sm:w-1/2 mt-4 md:mt-0 mb-5 gap-2 items-center justify-center">
          <div
            id="card4"
            className="p-4 w-60 h-45 border-2 rounded-lg border-pink-100 flex flex-col items-center text-center bg-red-50"
          >
            <img src={profile} alt="" />
            <h4 className="text-xl font-semibold mt-1 ">Expert CA/CS Assistance</h4>
            <p className="mt-2">
            Prompt support from our in-house
            expert professionals
            </p>
          </div>
          <div
            id="card5"
            className="p-5 w-60 h-45 border-2 rounded-lg border-pink-100 flex flex-col items-center text-center  bg-red-50"
          >
            <img src={protection} alt="" />
            <h4 className="text-xl font-semibold mt-2 ">Confidential & Safe</h4>
            <p className="mt-2">
            All your private information is safe
            with us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
