

import React, { useState } from "react";
import ImageSlider from "./ImageSlider"; 
// import home from "../assets/BusinessQuaries.png";
// import home1 from "../assets/Commercial.png";
// import home2 from "../assets/CSR.png";
// import home3 from "../assets/Consultansy.png";
import {Link} from 'react-router-dom'
// import hh1 from '../assets/Artboard 1.png'
import hh1 from '../assets/Artboard 1 copy.png'
import hh2 from '../assets/Artboard 1 copy 10.png'
import hh3 from '../assets/Artboard 1 copy 9.png'
import hh4 from '../assets/Artboard 1 copy 8.png'
import hh5 from '../assets/Artboard 1 copy 7.png'
import hh6 from '../assets/Artboard 1 copy 6.png'
import hh7 from '../assets/Artboard 1 copy 5.png'
import hh8 from '../assets/Artboard 1 copy 4.png'
import hh9 from '../assets/Artboard 1 copy 3.png'
import hh from '../assets/Artboard 1 copy 2.png'



// import home4 from "../assets/CurrentOpening.png";
// import home5 from "../assets/FuturePlan.png";
// import home6 from "../assets/History 1.png";
// import home7 from "../assets/History 2.png";
// import home8 from "../assets/Profile.png";
import footer2 from "../assets/footer2.png";

import menu from "../assets/menu.svg";
import "./Style.css";
const Hero = () => {
  const images = [ hh, hh1, hh2, hh3,hh4,hh5,hh6,hh7,hh8,hh9]; // Add all image URLs here
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="relative w-screen mt-4 lg:h-[100vh] md:h-[60vh] overflow-hidden object-cover">
        <ImageSlider images={images} />
      </div>

      <div className="absolute top-0 left-0 w-screen h-screen object-cover">
        <div className="bg-red-600 w-screen flex items-center flex-col p-2 font-sans sm:bottom-0 lg:mt-10 md:mt-80 mt-48 ">
          <div
            className="font-bold text-xl text-white text-center"
            style={{ fontFamily: "siemens" }}
          >
            Welcome To Super Tech Industries Limited
          </div>
        </div>

        <div className="  lg:ml-[60%] md:ml-[22%] lg:mt-24 md:mt-8 ml-[30%] mb-32">
          <div className="flex flex-between flex-col md:flex-row lg:flex-row ">
            <Link to='/residential'>
            <div className="bg-gray-500 opacity-95  w-[150px] h-[150px] hover:cursor-pointer text-white flex justify-center items-center hover:bg-orange-700 mt-2">
              Residential
            </div>
            </Link>
            <div className="lg:w-[150px] lg:h-[150px] md:w-[150px] md:h-[150px] w-0 h-0 mt-8"> </div>
            <Link to='/commercial'> 
            <div className="bg-gray-500 opacity-95  w-[150px] h-[150px] hover:cursor-pointer text-white flex justify-center items-center hover:bg-orange-700 mt-2">
             Commercial 
            </div>
            </Link>
          </div>
          <div className="flex flex-between flex-col md:flex-row lg:flex-row">
            <div className="lg:w-[150px] lg:h-[150px] md:w-[150px] md:h-[150px] w-0 h-0 mt-8"> </div>
            <div className="w-[150px] h-[150px] bg-black text-white flex justify-center items-center">
              <div className="flex flex-col justify-center items-center font-bold">
                <p>Dream It Super!</p>
                <p>Build It Super!</p>
              </div>
            </div>
            <div className="lg:w-[150px] lg:h-[150px] md:w-[150px] md:h-[150px] w-0 h-0  "> </div>
          </div>
        </div>

        <div className=" md:hidden sm:flex hidden justify-between p-4 items-center bg-black opacity-95 rounded-lg mt-20">
          <div className="absolute mb-32">
            <img src={footer2} alt="" className="h-[80px]" />
          </div>
          <div className="flex text-white gap-3">
            <img src={menu} alt="" />
            <p>Home</p>
          </div>
          <Link to='/residential'>
          <div className="flex text-white gap-3">
            <img src={menu} alt="" />
            <p>Residential</p>
          </div>
          </Link>
          <Link to='/commercial'>
          <div className="flex text-white gap-3">
            <img src={menu} alt="" />
            <p>Commercial</p>
          </div>
          </Link>
        </div>
      </div>
{/* 
<div className=" lg:hidden md:hidden  ">
<div>
  <img src={hh2} alt="" className="w-screen h-[200px]"/>
</div>
<div className="bg-red-600 w-full flex items-center flex-col p-2 font-sans  ">
          <div
            className="font-bold text-xl text-white text-center"
            style={{ fontFamily: "siemens" }}
          >
            Welcome To Super Tech Industries Limited
          </div>
        </div>
</div> */}

      {/* <div className="sm:hidden md:hidden justify-between  p-4 items-center bg-black opacity-80 rounded-lg mt-[-400px]">
 

        <div
          className="sm:hidden md:hidden flex text-white gap-3"
          onClick={toggleMenu}
        >
          <img src={menu} alt="menu" />
          <p>Menu</p>
        </div>
      </div>
      
      <div className="absolute  mt-[-200px]">
            <img src={footer2} alt="" className="h-[80px] md:h-0 sm:h-0" />
      </div>

      {isMenuOpen && (
        <div className="flex flex-col justify-between  p-4 bg-black opacity-80 rounded mt-1">
          <div className="flex text-white gap-3">
            <img src={menu} alt="" />
            <p className="hover:text-orange-500">Home</p>
          </div>
          <div className="flex text-white gap-3">
            <img src={menu} alt="" />
            <p className="hover:text-orange-500">Residential</p>
          </div>
          <div className="flex text-white gap-3">
            <img src={menu} alt="" />
            <p className="hover:text-orange-500">Commercial</p>
          </div>
        </div>
      )} */}

    </>
  );
};

export default Hero;
