import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../constants";
import Navbar from "../Navbar";
import Footer from "../Footer";
import home5 from "../../assets/Resedential.png";
import menu from "../../assets/menu.svg";

const Residential = () => {
  const [openSubMenuId, setOpenSubMenuId] = useState(null);
  const [openAgainMenuId , setOpenAgainMenuId] = useState(null);
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const [toggleAgain, setToggleAgain] = useState(false);

  const projectMenu = navLinks.find((item) => item.id === "project");
  const projectSubmenuItems = projectMenu && projectMenu.submenu;

  useEffect(() => {
    if (location.pathname === "/residential") {
      setOpenSubMenuId("residential");
    } else {
      setOpenSubMenuId(null);
    }
  }, [location]);

  const toggleMenu = (itemId) => {
    if (openSubMenuId === itemId) {
      setOpenSubMenuId(null);
    } else {
      setOpenSubMenuId(itemId);
    }
  };

  const toggleAgainMenu = (itemId) => {
    if (openAgainMenuId === itemId) {
      setOpenAgainMenuId(null);
    } else {
      setOpenAgainMenuId(itemId);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-gray-200 h-auto">
        <div className="w-full h-auto">
          <img
            src={home5}
            alt="image"
            className="w-full lg:h-[550px] md:h-[300px] object-cover"
          />
        </div>

        <div className="absolute flex mt-[73px]">
          <div className="text-white lg:text-1xl text-sm ml-6  text-shadow-lg  font-serif ">
            <Link
              to="/"
              className="underline hover:text-orange-600 shadow-2xl "
            >
              Home
            </Link>
            <span className="ml-4 "> / Residential /</span>
          </div>
        </div>

        <div className="absolute mt-[500px] lg:bg-black w-full opacity-90">
          <div
            className="lg:flex hidden items-center text-white gap-4 ml-56 text-xl mt-2"
            style={{ fontFamily: "siemens" }}
          >
            {projectSubmenuItems &&
              projectSubmenuItems.map((item) => (
                <div
                  key={item.id}
                  className={`cursor-pointer p-2 ${
                    openSubMenuId === item.id
                      ? "bg-white text-orange-500"
                      : "bg-black text-white"
                  }`}
                  onClick={() => toggleMenu(item.id)}
                >
                  <span>{item.title}</span>
                  {openSubMenuId === item.id && (
                    <div className="mt-3 absolute">
                      {item.submenu?.map((cityItem) => (
                        <div
                          key={cityItem.id}
                          className={`text-white lg:bg-black h-auto text-lg ${
                            openSubMenuId === cityItem.id
                              ? "bg-white text-yellow-500"
                              : ""
                          }`}
                        >
                          <Link
                            to={cityItem.url}
                            className="p-2 flex items-center hover:shadow-lg hover:bg-white hover:text-orange-500 hover:w-full"
                          >
                            {cityItem.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        <div className="bg-white shadow-xl lg:mx-44 h-[1000px]">
          <div className="flex flex-col h-auto  m-0">
            <div>
              <div className="sm:flex  relative lg:absolute flex-col px-6 ">
                <div className=" sm:flex flex gap-2 bg-slate-400 rounded md:mx-8  mt-2">
                  <img
                    src={menu}
                    alt="menu"
                    className="md:w-[60px] md:h-[60px] w-[30px] h-[30px] object-contain lg:hidden"
                    onClick={() => setToggle(!toggle)}
                  />
                  <p className="text-white lg:hidden md:text-2xl text-lg md:mt-2">
                    Menu
                  </p>
                </div>
                {toggle && (
            <div className="bg-white h-auto text-black  md:mx-10 mx-2">
            {projectSubmenuItems &&
              projectSubmenuItems.map((item) => (
                <div
                  key={item.id}
                  className={`cursor-pointer p-2 ${
                    openSubMenuId === item.id
                      ? "bg-white"
                      : "bg-white text-black hover:bg-white hover:text-orange-700"
                  }`}
                  onClick={() => toggleAgainMenu(item.id)}
                >
                  <span>{item.title}</span>
                  {openAgainMenuId === item.id && (
                    <div className="mt-3 absolute">
                      {item.submenu?.map((cityItem) => (
                        <div
                          key={cityItem.id}
                          className={`text-white bg-black h-auto text-lg ${
                            setOpenAgainMenuId === cityItem.id
                              ? "bg-white text-yellow-500"
                              : ""
                          }`}
                        >
                          <Link
                            to={cityItem.url}
                            className="p-2 flex items-center hover:shadow-lg hover:bg-white hover:text-orange-500 hover:w-full"
                          >
                            {cityItem.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
                  </div>
                )}
              </div>
              <div className="md:px-6 md:mx-10"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Residential;
