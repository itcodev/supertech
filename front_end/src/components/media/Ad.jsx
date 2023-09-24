import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import Navbar from "../Navbar";
import Footer from "../Footer";
import home3 from "../../assets/BusinessQuaries.png";
import menu from "../../assets/menu.svg";
import footer2 from "../../assets/footer2.png";
const Add = () => {
  const [toggle, setToggle] = useState(false);


  // Find the "About" menu from the navLinks constant
  const mediaMenu = navLinks.find((item) => item.id === "media");

  // Extract the submenu items for the "About" menu
  const mediaSubmenuItems = mediaMenu && mediaMenu.submenu;

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
          <img src={home3} alt="image" className="w-full h-[500px] object-cover" />
        </div>

        <div className="absolute flex top-14">
          <div>
            <img src={footer2} alt="image" className="w-[150px] h-[150px]" />
          </div>
          <div className="text-white text-1xl mt-10 ml-6 font-serif">
            <Link to="/" className="underline">
              Home
            </Link>

            <span className="ml-4"> / Media / Add</span>
          </div>
        </div>

        {/* Render the submenu items for the "About" menu */}
        <div className="absolute mt-[500px] md:bg-black w-full h-[40px] opacity-80">
          <div
            className=" md:flex hidden items-center text-white gap-4 ml-56 text-xl mt-2"
            style={{ fontFamily: "siemens" }}
          >
            {mediaSubmenuItems &&
              mediaSubmenuItems.map((item) => (
                <div
                  key={item.id}
                  className=" hover:bg-white hover:text-black "
                >
                  <Link to={item.url}>{item.title}</Link>
                </div>
              ))}
          </div>
        </div>
        <div className="bg-white shadow-xl p-2 mx-48 mt-2">
          <div className="flex flex-col h-auto md:mx-12 m-0">
            <div>
              <div className="sm:flex relative md:absolute flex-col mx-2">
                {/* <div className=" bg-white shadow-xl p-4 "> */}

                <div className="sm:flex flex gap-2 bg-slate-400 rounded md:p-0 p-2 ">
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
                    {mediaSubmenuItems &&
                      mediaSubmenuItems.map((item, index) => (
                        <div
                          key={item.id}
                          className={`hover:bg-white hover:px-2 hover:text-black ${
                            index < mediaSubmenuItems.length - 1
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

              <div className="text-3xl font-bold md:mt-12 mt-6 px-6 ">
                Add
              </div>

              <div className="mt-4 px-6 mb-20">
                <ul className="flex flex-wrap gap-2 sm:gap-4 md:gamx-2">
                  <li className="bg-gray-300 text-white p-2 hover:bg-orange-500">
                    <a href="">All</a>
                  </li>
                  <li className="bg-gray-300 text-white p-2 hover:bg-orange-500">
                    <a href="">January</a>
                  </li>
                  <li className="bg-gray-300 text-white p-2 hover:bg-orange-500">
                    <a href="">February</a>
                  </li>
                  <li className="bg-gray-300 text-white p-2 hover:bg-orange-500">
                    <a href="">March</a>
                  </li>
                  <li className="bg-gray-300 text-white p-2 hover:bg-orange-500">
                    <a href="">April</a>
                  </li>
                  <li className="bg-gray-300 text-white p-2 hover:bg-orange-500">
                    <a href="">May</a>
                  </li>
                  <li className="bg-gray-300 text-white p-2 hover:bg-orange-500">
                    <a href="">June</a>
                  </li>
                  <li className="bg-gray-300 text-white p-2 hover:bg-orange-500">
                    <a href="">July</a>
                  </li>
                  <li className="bg-gray-300 text-white p-2 hover:bg-orange-500">
                    <a href="">August</a>
                  </li>
                  <li className="bg-gray-300 text-white p-2 hover:bg-orange-500">
                    <a href="">September</a>
                  </li>
                  <li className="bg-gray-300 text-white p-2 hover:bg-orange-500">
                    <a href="">October</a>
                  </li>
                  <li className="bg-gray-300 text-white p-2 hover:bg-orange-500">
                    <a href="">November</a>
                  </li>
                  <li className="bg-gray-300 text-white p-2 hover:bg-orange-500">
                    <a href="">December</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Add;
