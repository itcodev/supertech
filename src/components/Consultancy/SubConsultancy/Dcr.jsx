
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {navLinks} from '../../../constants/index'
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import b from '../../../assets/Consultansy.png'

import menu from "../../../assets/menu.svg";
import footer2 from '../../../assets/footer2.png'
import dcr1 from '../../../assets/dcr1.jpeg'
import dcr2 from '../../../assets/dcr2.jpeg'
import dcr3 from '../../../assets/dcr3.jpeg'
import dcr4 from '../../../assets/dcr4.jpeg'
import dcr5 from '../../../assets/dcr5.jpeg'
import dcr6 from '../../../assets/dcr6.jpeg'
import dcr7 from '../../../assets/dcr7.jpeg'
import dcr8 from '../../../assets/dcr8.jpeg'


import ImageSlider from "../../ImageSlider";

const Dcr = () => {
  const [toggle, setToggle] = useState(false);

  // Find the "About" menu from the navLinks constant
  const projectMenu = navLinks.find((item) => item.id === "project");

  // Extract the submenu items for the "About" menu
  const projectSubmenuItems = projectMenu && projectMenu.submenu;

  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };
  const images = [dcr1,dcr2,dcr3,dcr4,dcr5,dcr6,dcr7,dcr8]; // Add all image URLs here

  useEffect(() => {
    // Add a listener for the resize event
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setToggle(false); // Close the toggle when screen size is above "md"
      }
    };
    window.addEventListener("resize", handleResize);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-gray-200 h-auto">
        <div className="w-full h-auto">
          <img src={b} alt="image" className="w-full h-[500px] object-cover" />
        </div>

        <div className="absolute flex top-14">
        <div>
            <img src={footer2} alt="image" className="w-[150px] h-[150px]" />
          </div>
          <div className="text-white text-1xl mt-10 ml-6 font-serif">
            <Link to="/" className="underline">
              Home
            </Link>

            <span className="ml-4"> / Propertics / Residential / Project 1</span>
          </div>
        </div>



        {/* Render the submenu items for the "About" menu */}
        <div className="absolute mt-[500px] md:bg-black w-full h-[40px] opacity-80">
          <div
            className=" md:flex hidden items-center text-white gap-4 ml-24 text-xl mt-2"
            style={{ fontFamily: "siemens" }}
          >
            {projectSubmenuItems &&
              projectSubmenuItems.map((item) => (
                <div
                  key={item.id}
                  className=" hover:bg-white hover:text-black "
                >
                  <Link to={item.url}>{item.title}</Link>
                </div>
              ))}
          </div>
        </div>
        <div className="bg-white shadow-xl p-2 md:mx-24 mt-2">

        <div className="flex flex-col h-auto md:mx-12 m-0">
          <div>
          <div className="sm:flex relative md:absolute flex-col mx-2">
          {/* <div className=" bg-white shadow-xl p-4 "> */}

              <div className="sm:flex flex gap-2 bg-slate-400 rounded md:p-0 p-2">
                <img
                  src={menu}
                  alt="menu"
                  className="w-[28px] h-[28px] object-contain md:hidden"
                  onClick={toggleMenu}
                />
                <p className="text-white md:hidden">Menu</p>
              </div>
              {toggle && (
                <div className="bg-white text-black p-2">
                  {projectSubmenuItems &&
                    projectSubmenuItems.map((item, index) => (
                      <div
                        key={item.id}
                        className={`hover:bg-white hover:px-2 hover:text-black ${
                          index < projectSubmenuItems.length - 1
                            ? "border-b border-black border-dotted"
                            : ""
                        }`}
                      >
                        <Link to={item.url} className="block py-2">
                          {item.title}
                        </Link>
                      </div>
                    ))}
                </div>
              )}
         </div>

              <div className="text-3xl md:mt-6 px-2"> <span className="underline">Project Name</span> : <span className=" no-underline">Dawat Chinese Resturant </span></div>
              <p className=" text-justify mt-2 px-2">Location : <span>Dinajpur</span></p>
              <p className=" text-justify mt-2 px-2">Duration : <span>2 Month</span></p>
              <p className=" text-justify mt-2 px-2">Project Area : <span>2150 sft</span></p>


              <div className="relative w-auto px-2 h-auto overflow-hidden mb-20 mt-2">
              <ImageSlider images={images} />
             </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dcr;
