import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


const Navbar1 = () => {
  return (
    <div className="bg-sky-900 h-12 flex items-center w-full justify-end gap-20 px-6 ">
      <ul className="flex gap-8 ">
        <li className="flex items-center  gap-2">
          <MdOutlineMail className="text-white text-3xl relative top-[3px] " />
          <p className="text-white text-xl ">www.registerkro.in</p>
        </li>
        <li className="flex items-center  gap-2">
          <FaPhone className="text-white" />
          <p className="text-white">+ 918847746183</p>
        </li>
      </ul>
      <ul className="flex gap-4 ">
        <li>
          <FaInstagram className="text-white text-2xl cursor-pointer" />
        </li>
        <li>
          <FaFacebook className="text-white text-2xl cursor-pointer "/>
        </li>
        <li>
          <FaTwitter className="text-white text-2xl cursor-pointer"/>
        </li>
        <li>
        <FaPinterest className="text-white text-2xl cursor-pointer" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar1;
