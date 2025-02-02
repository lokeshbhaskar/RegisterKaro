import React from "react";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import youtube from "../assets/youtube.svg";
import youtubelogo from '../assets/youtubelogo.svg'



const VideoInstructions = () => {
  return (
    <div className="flex flex-wrap bg-sky-900 ">
      <div className="p-10 w-1/2 flex flex-col">
        <h4 className="left-4 text-4xl text-white  ">Our Video Instructions</h4>
        <p className="mt-6 text-xl text-slate-400 relative left-4 ">
          Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
          vulputate pellentesque a diam tincidunt apis dui.
        </p>
        <div className="mt-4">
          <div className="flex">
            <img src={icon1} alt="" />
            <h4 className="ml-4 text-3xl text-white">Explore ideas together</h4>
          </div>
          <p className="text-xl text-slate-400 ml-18 relative bottom-4">
            Engage audience segments and finally create actionable insights.
            Amplify vertical integration.
          </p>
        </div>
        <div className="mt-3">
          <div className="flex ">
            <img src={icon2} alt="" />
            <h4 className="ml-3 text-3xl text-white">
              Bring those ideas to life
            </h4>
          </div>
          <p className="text-xl text-slate-400 ml-18 relative bottom-4  ">
            Engage audience segments and finally create actionable insights.
            Amplify vertical integration.
          </p>
        </div>
      </div>
      <div className="p-8 w-full md:w-1/2 relative ">
        <img src={youtube} alt=""  className="w-[640px] h-[420px]" />
        <img src={youtubelogo} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 md:w-40"/>
      </div>
    </div>
  );
};

export default VideoInstructions;
