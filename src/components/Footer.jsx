import React from "react";
import footer2 from "../assets/footer2.png";
import { socialMedia } from "../constants";
import facebook from '../assets/1.png'
import whatsapp from '../assets/2.png'
import youtube from '../assets/3.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">

      <div className="flex items-center justify-between  bg-black fixed w-full h-[55px] bottom-0 ">
      <div className="flex absolute  inset-0 lg:mb-24 mb-12 justify-center items-center  ">
        <img src={footer2} alt="image" className="lg:h-[120px] h-[90px]  "/>
      </div>
        <div> </div>
        <div className="flex">
         <Link to='https://www.facebook.com/supertechindustrieslimited'>
            <img
              // key={social.id}
              src={facebook}
              alt="icon"
              className="w-[41px] h-[41px] cursor-pointer "
            />
            </Link>
            <Link to='https://www.wa.me/+8801908835858'>
              <img
              // key={social.id}
              src={whatsapp}
              alt="icon"
              className="w-[41px] h-[41px] cursor-pointer "
            />
            </Link>
            <Link to='https://www.youtube.com/@supertechindustrieslimited'>
              <img
              // key={social.id}
              
              src={youtube}
              alt="icon"
              className="w-[41px] h-[41px] cursor-pointer "
            />
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
