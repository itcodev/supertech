import React, { useState } from "react";
import { navLinks } from "../constants";
import MenuItems from "./MenuItems";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };

  const toggleSubmenu = (menuId) => {
    setSubmenuOpen(submenuOpen === menuId ? null : menuId);
  };

  return (
    <>
      <nav className="fixed bg-black top-0 left-0 w-screen h-auto flex justify-between items-center z-50">
        <div
          className="text-white text-[12px] ml-2"
          style={{ fontFamily: "siemens" }}
        >
          FOR ENQUIRY, CALL <span className="text">+8809614881312</span>
        </div>

        <ul className="lg:flex hidden justify-end  items-center mb-1 space-x-6 text-white mr-6">
          {navLinks.map((nav) => (
            <MenuItems
              key={nav.id}
              title={nav.title}
              url={nav.url}
              submenu={nav.submenu}
            />
          ))}
        </ul>

        <div className="lg:hidden flex flex-1 justify-end items-center relative mr-4">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={toggleMenu}
          />
          {toggle && (
            <div className="mx-2 bg-black-gradient absolute top-0 bottom-0 left-[-275px] w-3/4 lg:w-[140px] rounded-r-xl transition-all duration-700 ease-in-out">
              <div className="bg-orange-500 transform opacity-95 transition-transform duration-300 ease-in-out absolute top-0 left-0  w-[275px] p-10 h-screen">
                <button
                  className="absolute top-0 right-0 w-6 h-6 mt-2 mr-2 text-white cursor-pointer"
                  onClick={toggleMenu}
                >
                  <img src={close} alt="close" className="w-full h-full" />
                </button>

                <ul className="list-none flex flex-col ml-16">
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-normal cursor-pointer text-[16px] ${
                        index === navLinks.length - 1 ? "mb-0" : "mb-4"
                      } text-white`}
                    >
                      <div className="flex ">
                        <a
                          onClick={() => toggleSubmenu(nav.id)}
                          className="border-b border-dotted border-white py-2 w-full"
                        >
                          {nav.title}
                        </a>
                        {nav.submenu && (
                          <button
                            className="w-6 h-6 mr-2 text-white cursor-pointer"
                            onClick={() => toggleSubmenu(nav.id)}
                          >
                            {submenuOpen === nav.id ? "_" : "+"}
                          </button> 
                        )}
                      </div>
                      {submenuOpen === nav.id && (
                        <ul className="ml-4 list-disc list-inside">
                          {nav.submenu.map((subNavItem) => (
                            <li key={subNavItem.id} className="text-white mb-2">
                              <a
                                href={subNavItem.url}
                                className="text-white hover:text-gray-300"
                              >
                                {subNavItem.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;