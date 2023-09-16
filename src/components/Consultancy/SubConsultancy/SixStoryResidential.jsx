import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../../constants/index";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import b from '../../../assets/Consultansy.png'

import menu from "../../../assets/menu.svg";
import footer2 from "../../../assets/footer2.png";
import rii1 from '../../../assets/buil1.jpg'
import rii2 from '../../../assets/buil2.jpg'
import rii3 from '../../../assets/buil3.jpg'
import rii4 from '../../../assets/buil4.jpg'

import ImageSlider from "../../ImageSlider";
import Sliderr from "../../Slider";
const SixStoryResidential = () => {
  const [toggle, setToggle] = useState(false);

  // Find the "About" menu from the navLinks constant
  const projectMenu = navLinks.find((item) => item.id === "project");

  // Extract the submenu items for the "About" menu
  const projectSubmenuItems = projectMenu && projectMenu.submenu;

  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };
  const images = [rii1,rii2,rii3,rii4];// Add all image URLs here

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
          <img
            src={rii1}
            alt="image"
            className="w-full h-[500px] object-cover"
          />
        </div>

        <div className="absolute flex top-14">
          {/* <div>
            <img src={footer2} alt="image" className="w-[150px] h-[150px]" />
          </div> */}
          <div className="text-white text-1xl mt-10 ml-6 font-serif">
            <Link to="/" className="underline">
              Home
            </Link>

            <span className="ml-4">
              {" "}
              / Propertics / Residential / Project 1
            </span>
          </div>
        </div>

        {/* Render the submenu items for the "About" menu */}
        <div className="absolute mt-[500px] lg:bg-black w-full h-[40px] opacity-80">
          <div
            className=" lg:flex hidden items-center text-white gap-4 ml-48 text-xl mt-2"
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
        <div className="bg-white shadow-xl p-2 lg:mx-44 mt-2">
          <div className="flex flex-col h-auto lg:mx-12 m-0">
            <div>
              <div className="sm:flex relative lg:absolute flex-col mx-2">
                {/* <div className=" bg-white shadow-xl p-4 "> */}

                <div className="sm:flex flex gap-2 bg-slate-400 rounded lg:p-0 p-2">
                  <img
                    src={menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain lg:hidden"
                    onClick={toggleMenu}
                  />
                  <p className="text-white lg:hidden">Menu</p>
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
              <div className="flex justify-between pt-6">
                <div className="text-3xl lg:mt-8 mb-6 lg:mx-0 mx-8 ">
                  <span className="underline text-orange-500 font-bold">
                  Six Story Residential
                  </span>
                </div>

                <div className="bg-green-700 text-white w-[100px] h-[30px] lg:mt-8  rounded-lg flex justify-center items-center  mx-8">
                  Completed
                </div>
              </div>

              <div className="flex flex-col  gap-2 lg:mx-0 mx-8">
                <p className=" text-justify  ml-2">
                  <span className=" font-bold text-blue-900">Location </span>:{" "}
                  <span>Foridpur</span>
                </p>
                <p className=" text-justify  ml-2">
                  <span className=" font-bold text-blue-900">Duration </span>:{" "}
                  <span>6 Month</span>
                </p>
                <p className=" text-justify  ml-2">
                  <span className=" font-bold text-blue-900">
                    Project Area{" "}
                  </span>
                  : <span>3 katha</span>
                </p>
              </div>

              <div className="relative w-auto h-[320px] overflow-hidden mb-20 mt-2  lg:mx-0 mx-8 bg-black">
                <Sliderr images={images} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SixStoryResidential;