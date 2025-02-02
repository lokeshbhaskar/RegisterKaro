import React from "react";
import facebook from "../assets/facebook.svg";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import insta from "../assets/insta.svg";
import arrowup from "../assets/arrowup.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-blue-950 py-10 px-6 mt-4 ">
      <div className="flex flex-wrap justify-evenly items-start gap-6 md:flex-nowrap px-5">
        <div className="w-full md:w-[20%]">
          <p className="text-slate-400 text-[16px]  ">
            Design outstanding interfaces with advanced Figma features in a
            matter of minutes.
          </p>
          <div className="flex justify-center md:justify-start gap-5 mt-5">
            <img src={facebook} alt="" className="w-6" />
            <img src={google} alt="" className="w-6" />
            <img src={apple} alt="" className="w-6" />
            <img src={insta} alt="" className="w-6" />
          </div>
        </div>
        <div className="w-full md:w-[20%] text-center ">
          <h2 className="text-amber-500 text-2xl ">START A</h2>
          <div className="mt-5">
            <h4 className="text-slate-400  ">Features</h4>
            <h4 className="text-slate-400  ">Solutions</h4>
            <h4 className="text-slate-400  ">Integrations</h4>
            <h4 className="text-slate-400  ">Enterprise</h4>
            <h4 className="text-slate-400  ">Solution</h4>
          </div>
        </div>
        <div className="w-full md:w-[20%] text-center ">
          <h2 className="text-amber-500 text-2xl">GOVERNM</h2>
          <div className="mt-5">
            <h4 className="text-slate-400  ">Partners</h4>
            <h4 className="text-slate-400  ">Community</h4>
            <h4 className="text-slate-400  ">developers</h4>
            <h4 className="text-slate-400  ">Blog</h4>
            <h4 className="text-slate-400  ">App</h4>
          </div>
        </div>
        <div className="w-full md:w-[20%] text-center ">
          <h2 className="text-amber-500 text-2xl">COMPLIANCE</h2>
          <div className="mt-5">
            <h4 className="text-slate-400  ">Channels</h4>
            <h4 className="text-slate-400  ">Scale</h4>
            <h4 className="text-slate-400  ">Watch</h4>
            <h4 className="text-slate-400  ">Media Kit</h4>
          </div>
        </div>
        <div className="w-full md:w-[20%] text-center">
          <h2 className="text-amber-500 text-2xl">BIS</h2>
          <div className="mt-5">
            <h4 className="text-slate-400  ">AboutUs</h4>
            <h4 className="text-slate-400  ">News</h4>
            <h4 className="text-slate-400  ">Leaderships</h4>
            <h4 className="text-slate-400  ">Media Kit</h4>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center  text-center mt-4">
        <button
          onClick={scrollToTop}
          className="w-[45px] h-[45px] rounded-full bg-amber-500 flex items-center justify-center"
        >
          <img src={arrowup} alt="Scroll to Top" className="w-6" />
        </button>
        <p className="text-slate-400 text-[16px]  mt-2 ">
          © 2024 Registerkaro. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
