import React, { useState } from "react";
import logo1 from "../assets/logo1.svg";
// import logo2 from "../assets/logo2.jpg";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import OurServices from '../components/OurServices'


const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="h-14   bg-white flex items-center  justify-between px-4 lg:px-10 w-full ">
      <div className="flex-shrink-0">
        <img src={logo1} alt="logo" className="h-12  w-auto filter-none " />
      </div>
      <div className="hidden lg:flex list-none items-center gap-6 ">
        <li className="font-semibold">Home</li>
        {/* <li className="flex items-center">
          <p className="font-semibold ">Our Services</p>
          <RiArrowDropDownLine className="text-3xl mt-1" />
        </li> */}
        <li>
            <OurServices/>
        </li>

        <li className="font-semibold">Blog</li>
        <li className="font-semibold">Contact Us</li>
        <li className="font-semibold">About Us</li>
        <span>
          <IoMdSearch className="text-[20px]" />
        </span>
        <button className="bg-amber-500 px-4 py-2 text-white font-semibold border rounded-[6px]">
          Talk An Expert
        </button>
      </div>
      <div
        className="lg:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <AiOutlineClose className="text-2xl" />
        ) : (
          <AiOutlineMenu className="text-2xl" />
        )}
      </div>
      {isOpen && (
        <div className="absolute top-28 left-0 w-full bg-white border-t lg:hidden">
          <ul className="list-none flex flex-col items-center gap-5 py-5">
            <li className="font-semibold">Home</li>
            <li className="font-semibold">Our Services </li>
            <li className="font-semibold">Blog</li>
            <li className="font-semibold">Contact Us</li>
            <li className="font-semibold">About Us</li>
            <span>
              <IoMdSearch className="text-[20px]" />
            </span>
            <button className="bg-amber-500 px-4 py-2 text-white font-semibold border rounded-[6px]">
              Talk An Expert
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
