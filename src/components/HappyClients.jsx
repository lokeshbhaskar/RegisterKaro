import React from "react";
import logo1 from '../assets/Hc1.svg';
import logo2 from '../assets/Hc2.svg';
import logo3 from '../assets/Hc3.svg';
import logo4 from '../assets/Hc4.svg';
import logo5 from '../assets/Hc5.svg';
import logo6 from '../assets/Hc6.svg';
import logo7 from '../assets/Hc7.svg';
import logo8 from '../assets/Hc8.svg';
import logo9 from '../assets/Hc9.svg';
import logo10 from '../assets/Hc10.svg';
import logo11 from '../assets/Hc11.svg';
import logo12 from '../assets/Hc12.svg';
import logo13 from '../assets/Hc13.svg';
import logo14 from '../assets/Hc14.svg';
import logo15 from '../assets/Hc15.svg';
import logo16 from '../assets/Hc16.svg';
import logo17 from '../assets/Hc17.svg';
import logo18 from '../assets/Hc18.svg';
import logo19 from '../assets/Hc19.svg';
import arrow from '../assets/arrow.svg';

const HappyClients = () => {
  return (
    <div className="mt-6 w-full">
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-center text-3xl font-semibold">Our Happy Clients</h4>
        <p className="ml-5 lg:ml-50 mr-5 lg:mr-50 mt-4 text-center text-[16px] text-neutral-700">
          Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state-of-the-art customer service.
        </p>
      </div>

      <div className="relative w-full h-[450px] bg-white">
        <img src={logo1} alt="Logo 1" className="absolute top-10 left-4 md:left-10 w-10 md:w-16 lg:w-20" />
        <img src={logo2} alt="Logo 2" className="absolute top-12 left-20 md:left-40 w-8 md:w-12 lg:w-16" />
        <img src={logo3} alt="Logo 3" className="absolute top-14 left-32 md:left-60 w-10 md:w-16 lg:w-18" />
        <img src={logo4} alt="Logo 4" className="absolute top-8 right-8 md:right-20 w-12 md:w-18 lg:w-24" />
        <img src={logo5} alt="Logo 5" className="absolute top-16 right-12 md:right-32 w-10 md:w-16 lg:w-22" />
        <img src={logo6} alt="Logo 6" className="absolute top-20 right-20 md:right-40 w-10 md:w-16 lg:w-20" />
        <img src={logo7} alt="Logo 7" className="absolute top-24 left-16 md:left-32 w-12 md:w-18 lg:w-24" />
        <img src={logo8} alt="Logo 8" className="absolute top-28 left-24 md:left-48 w-10 md:w-14 lg:w-18" />
        <img src={logo9} alt="Logo 9" className="absolute top-32 left-32 md:left-60 w-12 md:w-18 lg:w-22" />
        <img src={logo10} alt="Logo 10" className="absolute top-36 left-40 md:left-72 w-10 md:w-16 lg:w-20" />
        <img src={logo11} alt="Logo 11" className="absolute top-40 left-48 md:left-84 w-10 md:w-14 lg:w-18" />
        <img src={logo12} alt="Logo 12" className="absolute top-44 right-10 md:right-20 w-12 md:w-18 lg:w-22" />
        <img src={logo13} alt="Logo 13" className="absolute top-48 right-12 md:right-24 w-10 md:w-16 lg:w-20" />
        <img src={logo14} alt="Logo 14" className="absolute top-52 right-14 md:right-28 w-10 md:w-14 lg:w-18" />
        <img src={logo15} alt="Logo 15" className="absolute top-56 right-16 md:right-32 w-10 md:w-16 lg:w-20" />
        <img src={logo16} alt="Logo 16" className="absolute top-60 left-14 md:left-28 w-10 md:w-16 lg:w-18" />
        <img src={logo17} alt="Logo 17" className="absolute top-64 left-16 md:left-32 w-10 md:w-16 lg:w-18" />
        <img src={logo18} alt="Logo 18" className="absolute top-68 right-18 md:right-36 w-10 md:w-14 lg:w-16" />
        <img src={logo19} alt="Logo 19" className="absolute top-72 right-20 md:right-40 w-10 md:w-12 lg:w-14" />
      </div>

      <div className="bg-white flex justify-center relative bottom-10 lg:bottom-6">
        <button className="flex items-center gap-2">
          <p className="md:text-xl lg:text-3xl text-sky-900 font-semibold">Show more</p>
          <img src={arrow} alt="arrow" className="mt-1 text-sky-900 font-semibold" />
        </button>
      </div>
    </div>
  );
};

export default HappyClients;
