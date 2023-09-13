import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import Navbar from "../Navbar";
import Footer from "../Footer";
import home6 from "../../assets/Qualitypolicy.png";
import menu from "../../assets/menu.svg";
import footer2 from "../../assets/footer2.png";
const Quality = () => {
  const [toggle, setToggle] = useState(false);

  // Find the "About" menu from the navLinks constant
  const aboutMenu = navLinks.find((item) => item.id === "about");

  // Extract the submenu items for the "About" menu
  const aboutSubmenuItems = aboutMenu && aboutMenu.submenu;

  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };

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
          <img src={home6} alt="image" className="w-full lg:h-[550px]  md:h-[300px] object-cover"/>
        </div>

        <div className="absolute flex mt-[73px]">
          {/* <div>
            <img src={footer2} alt="image" className="lg:w-[150px] lg:h-[150px] ml-2 w-[80px] h-[80px]" />
          </div> */}
          <div className="text-white lg:text-1xl text-sm ml-6  text-shadow-lg  font-serif ">
            <Link to="/" className="underline hover:text-orange-600 shadow-2xl ">
              Home
            </Link>

            <span className="ml-4 "> / About Us / Profile</span>
          </div>
        </div>

        {/* Render the submenu items for the "About" menu */}
        <div className="static lg:bg-black w-full h-[40px] opacity-80">
          <div
            className=" lg:flex hidden items-center text-white gap-4 ml-56 text-xl mt-2"
            style={{ fontFamily: "siemens" }}
          >
            {aboutSubmenuItems &&
              aboutSubmenuItems.map((item) => (
                <div
                  key={item.id}
                  className=" hover:bg-white hover:text-black "
                >
                  <Link to={item.url}>{item.title}</Link>
                </div>
              ))}
          </div>
        </div>
        <div className="bg-white shadow-xl  lg:mx-44 ">
          <div className="flex flex-col h-auto  m-0">
            <div>
              <div className="sm:flex  relative lg:absolute flex-col px-6 ">
              <div className=" sm:flex flex gap-2 bg-slate-400 rounded md:mx-8  mt-2">

              <img
                    src={menu}
                    alt="menu" 
                    className="md:w-[60px] md:h-[60px] w-[30px] h-[30px] object-contain lg:hidden"
                    onClick={toggleMenu}
                  />
                  <p className="text-white lg:hidden md:text-2xl text-lg md:mt-2">Menu</p>
                </div>
                {toggle && (
                  <div className="bg-white text-black p-2 md:mx-10 mx-2">
                    {aboutSubmenuItems &&
                      aboutSubmenuItems.map((item, index) => (
                        <div
                          key={item.id}
                          className={`hover:bg-white hover:text-black ${
                            index < aboutSubmenuItems.length - 1
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
              <div className="md:px-6 mx-10">
                <div className="text-3xl font-bold lg:mt-6 mt-4">Quality</div>
              <p className=" text-justify mt-10">
                Supertech Industries Limited has been Certificate Of
                Incorporation (under Act XVIII of 1994). Supertech is constantly
                working towards creating new benchmarks of architectural
                excellence in the contemporary global environment. In this new
                environment, the demand for multi-faceted real estate
                development has become crucial for keeping pace with the
                progress. Capitalizing on these demand dynamics, we at (SIL)
                have always taken new initiatives and emerged as one of the
                prominent entities.
              </p>
              <p className=" text-justify mt-10">
                Supertech introduces quality into every aspect ranging from
                Process, Human Resource, Technology and Services to create an
                all-encompassing quality culture. Developing collective
                willingness towards the discipline of doing things right, by
                using perfect planning and state-of-the-art technology and
                delivering highest quality standard to its clients. Our strong
                Quality Consciousness and quest for continuous up gradation for
                ultra modern life-style and luxurious living standard.Our
                clients' interests are paramount priority for us. We want all
                our clients' investment to be safe & profitable.
              </p>
              <p className=" text-justify mt-10 mb-20">
                Supertech always try to research, innovate and improve on
                service quality. The company also provides the most accurate
                information and added value in order to fulfill our clients'
                demands.
              </p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Quality;
