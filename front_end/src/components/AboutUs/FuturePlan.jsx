import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import Navbar from "../Navbar";
import Footer from "../Footer";
import home3 from "../../assets/BusinessQuaries.png";
import axios from "axios";
import menu from "../../assets/menu.svg";
import footer2 from "../../assets/footer2.png";
const FuturePlan = () => {
  const [openSubMenuId, setOpenSubMenuId] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [res, setRes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // New state for selected category

  // Find the "About" menu from the navLinks constant
  const aboutMenu = navLinks.find((item) => item.id === "about");

  // Extract the submenu items for the "About" menu
  const aboutSubmenuItems = aboutMenu && aboutMenu.submenu;

  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Set the selected category when a category is clicked
  };

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get("http://localhost:3001/v1/leads/leads-Info")
      .then((response) => {
        const resy = response.data.leads;
        console.log(resy);
        setRes(resy);
        // setTitles(res);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // setLoading(false);
      });
  }, []);

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
            src={`http://localhost:3001/${res[4]?.cover}`} // Replace with the correct URL
            alt={res[4]?.title}
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="absolute flex mt-[73px]">
          {/* <div>
            <img src={footer2} alt="image" className="lg:w-[150px] lg:h-[150px] ml-2 w-[80px] h-[80px]" />
          </div> */}
          <div className="text-white lg:text-1xl text-sm ml-6  text-shadow-lg  font-serif ">
            <Link
              to="/"
              className="underline hover:text-orange-600 shadow-2xl "
            >
              Home
            </Link>

            <span className="ml-4 "> / About / FuturePlan</span>
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
                  className={`hover:bg-white hover:text-black cursor-pointer bg-black`}
                  onClick={() => handleCategoryClick(item.title)}
                >
                  <span>{item.title}</span>
                  <div className="mt-3 absolute">
                    {/* Render the list of titles based on the selected category and item title */}
                    {selectedCategory &&
                      ((item.title === "Quality" &&
                        selectedCategory === "Quality") ||
                        (item.title === "Profile" &&
                          selectedCategory === "Profile") ||

                          (item.title === "Future Plan" &&
                        selectedCategory === "Future Plan") ||
                        (item.title === "History" &&
                          selectedCategory === "History")||
                          (item.title === "Csr" &&
                            selectedCategory === "Csr")

                          ) &&
                      res
                        .filter((title) => title.category === selectedCategory)
                        .map((title) => (
                          <div
                            key={title.id}
                            className={`text-white lg:bg-black h-auto text-lg`}
                          >
                            <Link
                              to={`/about/${title._id}`}
                              className="p-2 flex items-center hover:shadow-lg hover:bg-white hover:text-orange-500 hover:w-full"
                            >
                              {title.title}
                            </Link>
                          </div>
                        ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="bg-white shadow-xl lg:mx-44">
          <div className="flex flex-col h-auto m-0">
            <div>

              {/*code for mobile devices */} 
              <div className="sm:flex relative lg:absolute flex-col px-6  ">
                <div className=" sm:flex flex gap-2 bg-slate-400 rounded md:mx-8  mt-2">
                  <img
                    src={menu}
                    alt="menu"
                    className="md:w-[60px] md:h-[60px] w-[30px] h-[30px] object-contain lg:hidden"
                    onClick={toggleMenu}
                  />
                  <p className="text-white lg:hidden md:text-2xl text-lg md:mt-2">
                    Menu
                  </p>
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
              {/* <div className="px-6 md:mx-10"> */}
              <div className="text-3xl font-bold lg:mt-6 mt-4 px-6 mx-6">
                {res.length > 0 ? res[4].title : "fh"}
              </div>
              <div className=" text-justify mt-6 mx-12 mb-12">{res.length > 0 ? res[4].content : "content"}</div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FuturePlan;
