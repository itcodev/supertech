import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import Navbar from "../Navbar";
import Footer from "../Footer";
import home7 from "../../assets/FuturePlan.png";
import menu from "../../assets/menu.svg";
import footer2 from '../../assets/footer2.png'
const FuturePlan = () => {
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
          <img src={home7} alt="image" className="w-full lg:h-[550px]  md:h-[300px] object-cover" />
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
              ))}1
          </div>
        </div>
        <div className="bg-white shadow-xl lg:mx-44">
          <div className="flex flex-col h-auto m-0">
            <div>
              <div className="md:flex relative lg:absolute flex-col px-6 ">
              <div className=" sm:flex flex gap-2 bg-slate-400 rounded md:mx-8 mt-2">

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
              {/* <div className="px-6"> */}
              {/* <div className="px-6 md:mx-10"> */}
                <div className="text-3xl font-bold lg:mt-6 mt-4 md:px-6 md:mx-10 mx-8">Future Plan</div>

              <p className=" text-justify mt-6 md:px-6 md:mx-10 mx-8">
                Welcome to the Future of Super Tech: Pioneering Real Estate
                Development in Bangladesh
              </p>
              <p className=" text-justify md:px-6 md:mx-10 mx-8">
                At Super Tech, we believe in more than just constructing
                buildings; we envision shaping the future of Bangladesh through
                innovative real estate solutions. As a prominent Bangladeshi
                real estate company and developer, we are dedicated to crafting
                spaces that not only redefine modern living but also contribute
                to the sustainable development of our nation.
              </p>
              <p className=" text-justify  md:px-6 md:mx-10 mx-8">
                Our Vision: Building Dreams, Enriching Lives Our journey is
                fueled by a vision that transcends traditional boundaries. We
                aim to create iconic commercial and residential properties that
                stand as a testament to architectural excellence, functionality,
                and aesthetic appeal. With an unwavering commitment to quality,
                our developments will epitomize luxury, comfort, and
                practicality, catering to the diverse needs of our clients.
              </p>
              <p className=" text-justify  mb-10 md:px-6 md:mx-10 mx-8">
                Innovative Real Estate Solutions for a Dynamic Future The future
                belongs to those who dare to innovate. Super Tech is driven by
                this ethos, continuously pushing the boundaries of real estate
                development. By harnessing cutting-edge technologies and
                embracing sustainable practices, we intend to set new benchmarks
                in the industry. From smart homes to energy-efficient designs,
                our projects will reflect a harmonious blend of modernity and
                environmental consciousness.
              </p>
              <p className=" text-justify  mb-10 md:px-6 md:mx-10 mx-6">
                A Holistic Approach to Development Our role extends beyond
                constructing physical spaces. We aspire to become trusted
                partners in the journey of urbanization and growth. Super Tech's
                commitment to development consultancy ensures that every project
                aligns with the broader vision of creating well-planned,
                integrated communities. We understand the importance of
                infrastructure, connectivity, and public spaces in fostering a
                thriving environment, and we're dedicated to realizing this
                vision.
              </p>
              <p className=" text-justify  mb-10 md:px-6 md:mx-10 mx-8">
                Contributing to National Progress As proud Bangladeshis, we
                understand the significance of contributing to our nation's
                progress. Super Tech envisions participating actively in the
                urban transformation of our cities, catering to the
                ever-evolving needs of our communities. Our developments are
                more than bricks and mortar; they represent a commitment to
                nation-building by enhancing the urban landscape.
              </p>

              <p className=" text-justify  mb-10 md:px-6 md:mx-10 mx-8">
                Empowering Lives through Social Initiatives True progress is
                measured by the positive impact we make on lives. At Super Tech,
                we are committed to transforming our success into meaningful
                change. Our dedication to social work will manifest through
                initiatives that empower marginalized communities, promote
                education, and improve overall living standards. We believe that
                by creating thriving neighborhoods, we can pave the way for a
                brighter future for all.
              </p>

              <p className=" text-justify  mb-10 md:px-6 md:mx-10 mx-8">
                Your Dreams, Our Purpose Super Tech's future is intertwined with
                the aspirations of our clients. As we expand our portfolio, we
                remain steadfast in our commitment to turning dreams into
                reality. Whether you're seeking a commercial space to launch
                your business, a cozy home to build your life, or a space that
                resonates with your unique style, Super Tech is here to make it
                happen.
              </p>

              <p className=" text-justify  mb-10 md:px-6 md:mx-10 mx-8">
                Join us in Shaping Tomorrow, Today As we gaze ahead, our future
                is brimming with possibilities. Super Tech envisions a
                Bangladesh where architectural brilliance, sustainability, and
                community well-being converge seamlessly. With every project we
                undertake, we intend to build a legacy that inspires, uplifts,
                and transforms.
              </p>

              <p className=" text-justify mb-10 md:px-6 md:mx-10 mx-8">
                In the coming years, we pledge to continue pushing boundaries,
                innovating relentlessly, and contributing significantly to our
                nation's growth. Super Tech invites you to be a part of this
                journey, where together, we create a future that is both
                awe-inspiring and socially impactful.
              </p>

              <p className=" text-justify  mb-16 md:px-6 md:mx-10 mx-8">
                Welcome to the future of real estate. Welcome to Super Tech.
              </p>
            </div>
        </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default FuturePlan;
