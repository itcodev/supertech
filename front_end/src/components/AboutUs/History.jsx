import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import Navbar from "../Navbar";
import Footer from "../Footer";
import home3 from "../../assets/BusinessQuaries.png";
import axios from "axios";
import menu from "../../assets/menu.svg";
import footer2 from "../../assets/footer2.png";
const History = () => {
  const nav = useNavigate();

  const [toggle, setToggle] = useState(false);
  const [res, setRes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // New state for selected category
  const [toggleAgain, setToggleAgain] = useState(false);
  const [openAgainMenuId, setOpenAgainMenuId] = useState(null);
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

  const toggleAgainMenu = (itemId) => {
    if (openAgainMenuId === itemId) {
      setOpenAgainMenuId(null);
    } else {
      setOpenAgainMenuId(itemId);
    }
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
            src={`http://localhost:3001/${res[1]?.cover}`} // Replace with the correct URL
            alt={res[0]?.title}
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

            <span className="ml-4 "> / About / Hitory</span>
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
                onClick={() => {
                  handleCategoryClick(item.title); // Call the first function
                  nav(item.url)
                }}
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
                          selectedCategory === "History") ||
                        (item.title === "Csr" && selectedCategory === "Csr")) &&
                      res
                        .filter((title) => title.category === selectedCategory)
                        .map((title) => (
                          <div
                            key={title.id}
                            className={`text-white lg:bg-black h-auto text-lg`}
                          >
                            <Link
                              to={`/lead-info/${title._id}`}
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

        <div className="bg-white shadow-xl lg:mx-44 h-[500px]">
          <div className="flex flex-col h-auto m-0">
            <div>
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
                      aboutSubmenuItems.map((item) => (
                        <div
                          key={item.id}
                          className={`bg-white text-black h-auto text-lg ${
                            setOpenAgainMenuId === item.id
                              ? "bg-black text-yellow-500"
                              : ""
                          }`}
                          onClick={() => handleCategoryClick(item.title)}
                        >
                          <span>{item.title}</span>
                          <div className="mt-1 absolute">
                            {/* Render the list of titles based on the selected category and item title */}
                            {selectedCategory &&
                              ((item.title === "Quality" &&
                                selectedCategory === "Quality") ||
                                (item.title === "Profile" &&
                                  selectedCategory === "Profile") ||
                                (item.title === "Future Plan" &&
                                  selectedCategory === "Future Plan") ||
                                (item.title === "History" &&
                                  selectedCategory === "History") ||
                                (item.title === "Csr" &&
                                  selectedCategory === "Csr")) &&
                              res
                                .filter(
                                  (title) => title.category === selectedCategory
                                )
                                .map((title) => (
                                  <div
                                    key={title.id}
                                    className={`text-white bg-black h-auto text-lg`}
                                  >
                                    <Link
                                      to={`/lead-info/${title._id}`}
                                      className="p-2 flex items-center h-auto hover:text-orange-700"
                                    >
                                      {title.title}
                                    </Link>
                                  </div>
                                ))}
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>

              <div className="px-6 md:mx-10">
                <div className="text-3xl font-bold lg:mt-6 mt-4">
                  {res.length > 0 ? res[0].title : "title?"}
                </div>

                <p className=" text-justify mt-6">
                  Company's foray into real estate and construction industry led
                  to the creation of various landmark real estate projects -
                  Supertech Business Tower, Falcon Supertech, Hotel Sultan,
                  Supertech Duplex Town, Hotel Grand Noor, (ROB) Flyover Street
                  lighting. are few examples.
                </p>
              </div>
            </div>
            {/* <div className="px-6 md:mx-10"> */}
          </div>
        </div>
      </div>
      {/* </div> */}

      <Footer />
    </>
  );
};

export default History;
