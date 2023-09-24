import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import Navbar from "../Navbar";
import home3 from '../../assets/home3.jpeg'
import Footer from "../Footer";
const Philosophy = () => {
  // Find the "About" menu from the navLinks constant
  const aboutMenu = navLinks.find((item) => item.id === "about");

  // Extract the submenu items for the "About" menu
  const aboutSubmenuItems = aboutMenu && aboutMenu.submenu;

  return (
    <>
    <Navbar/>
      <div className="flex flex-col">
        <div className="w-full h-auto">
          <img
            src={home3}
            alt="image"
            className="w-full h-[450px]"
          />
        </div>

        <div className="absolute flex top-14">
          <div>
            <img
              src="https://www.supertechlimited.com/images/logo_home.png"
              alt="image"
              className="z-0"
            />
          </div>
          <div className="text-white text-1xl mt-10 ml-6 font-serif">
            <Link to="/" className="underline">
              Home
            </Link>

            <span className="ml-4"> / About Us / Philosophy</span>
          </div>
        </div>

        {/* Render the submenu items for the "About" menu */}
        <div className="absolute mt-[430px] bg-black w-full h-[40px] opacity-80">

        <div className=" flex items-center text-white gap-4 ml-32  text-xl mt-2" style={{ fontFamily: 'siemens' }}>

          {aboutSubmenuItems &&
            aboutSubmenuItems.map((item) => (
              <div key={item.id} className=" hover:bg-white hover:text-black">
                <Link to={item.url}>{item.title}</Link>
              </div>
            ))}
        </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-gray-200 w-full h-auto mt-4 border-2">
          <div className=" w-[990px] bg-white h-auto shadow-xl">
            <div className=" p-10 mb-16">
            <div className="text-3xl font-bold mb-4">Philosophy</div>

              <p className=" text-justify mt-10">
              Supertech Limited was founded in 1988. The company has developed some of the modern and finest residential and commercial complexes in Delhi, National Capital Region (NCR) and new urban settlements like Meerut, Moradabad, Haridwar and Rudrapur. Since inception, the company has been responsible for the development of many of Delhi's other well known urban housing colonies.
              </p>
              <p className=" text-justify mt-10">
              Company's foray into real estate and construction industry led to the creation of various landmark real estate projects - Crossings Republik, Emerald Court, Avant-Garde, Shopprix Mall are few examples.
              </p>
              <p className=" text-justify mt-10">
              Supertech has crafted architectural masterpieces like Emerald Court at Sector 93, NOIDA, high end residential project with 7 star living facilities and a 7,00000 square feet commercial hub at 34 Pavilion, Sector-34 NOIDA and Uttarakhand's largest mall-The Pentagon Mall in Haridwar.
              </p>
              <p className=" text-justify mt-10">
              Supertech has tied up with international hotel chains to set up 5 star hotels at Rudrapur, Haridwar, Meerut and NOIDA. The company is also tieing-up with a major health care to open a medical facility in different format at its projects.
              </p>
 
        </div>
      </div>
      </div>
      </div>
<Footer/>
    </>
  );
};

export default Philosophy;
