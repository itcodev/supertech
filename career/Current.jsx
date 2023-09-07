import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import Navbar from "../Navbar";
import Footer from "../Footer";
import home5 from "../../assets/CurrentOpening.png";
import menu from "../../assets/menu.svg";
import footer2 from '../../assets/footer2.png'
const Current = () => {
  const [toggle, setToggle] = useState(false);

  // Find the "About" menu from the navLinks constant
  const aboutMenu = navLinks.find((item) => item.id === "career");

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
      <div className="w-auto h-auto">
          <img src={home5} alt="image" className="w-full lg:h-[550px]  md:h-[300px] object-cover" />
        </div>

        <div className="absolute flex mt-[73px]">
          {/* <div>
            <img src={footer2} alt="image" className="lg:w-[150px] lg:h-[150px] ml-2 w-[80px] h-[80px]" />
          </div> */}
          <div className="text-white lg:text-1xl text-sm ml-6  text-shadow-lg  font-serif ">
            <Link to="/" className="underline hover:text-orange-600 shadow-2xl ">
              Home
            </Link>

            <span className="ml-4 "> / Career / Current</span>
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
        <div className="bg-white shadow-xl lg:mx-44">
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
              {/* <div className="px-6 md:mx-10"> */}
                <div className="text-3xl font-bold lg:mt-6 mt-6 px-6 mx-8">Current</div>


                
              <p className="mt-8 text-justify px-6 mx-8">
                You are welcome to send us your resume by email in soft form.
                Please remember to include information about your education,
                nature and years of work experience, previous and current
                employers, present & expected emoluments and position/role
                sought.
                <div className="overflow-x-auto">
              <table className="w-full border-2 border-blue-100 mt-6 ">
                  <tbody>
                    <tr className=" border-2 border-blue-100">
                      <th>S. No.</th>
                      <th>Job Code</th>
                      <th>Functional Area</th>
                      <th>Job Position</th>
                      <th>Location</th>
                      <th>Last Date</th>
                      <th>Submitted On</th>
                      <th>Minimum Experience</th>
                      <th>Maximum Experience</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>FIN092021</td>
                      <td>Accounts &amp; Finance</td>
                      <td>Chief Financial Officer</td>
                      <td>Noida</td>
                      <td>2021-10-15</td>
                      <td>2021-09-24</td>
                      <td>15</td>
                      <td>25</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <p className="mb-2 mt-6">
                  <strong>Job Description</strong>
                </p>
                <p>
                  1. Strategize and coordinate the development of the Business
                  Plans of (long term and short term)
                </p>
                <p>
                  2. Drive effective relationship management with investors and
                  lenders to ensure cost effective and preferential services.
                </p>
                <p>
                  3. Working on Fund Raising proposals both Debt &amp; Equity
                  side, FDI, NBFC and other Financial Institutions.
                </p>
                <p>4. Experience in dealing with PSU banks.</p>
                <p>5. Lead and facilitate all IPO related activities.</p>
                <p>
                  6. Coordinate with all functional heads for the speedy
                  resolution of all financial issues.
                  <br />
                  &nbsp;
                </p>
                <p>
                  <strong>Required Candidate profile:</strong>
                </p>
                <ul className="list-disc ml-12 mt-4 space-y-2 mb-6 mx-8">
                  <li>Must be Qualified C.A </li>
                  <li>
                    {" "}
                    Dynamic personality and ability to engage with people;
                  </li>
                  <li> Excellent oral and written communication skills</li>
                  <li> Willingness to travel</li>
                </ul>
                <p className="mb-32 mx-6">
                  <strong>CTC</strong>: up to 50 L PA.
                </p>
                {/* <div className="bg-white shadow-lg">
Apply Online
                            </div> */}
              </p>
            </div>
        </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Current;
