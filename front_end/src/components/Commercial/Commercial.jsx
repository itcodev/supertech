import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../constants";
import Navbar from "../Navbar";
import Footer from "../Footer";
import home5 from "../../assets/Interrior.png";
import footer2 from "../../assets/footer2.png";
import axios from "axios";
const Commercial = () => {
  const [openSubMenuId, setOpenSubMenuId] = useState(null);
  const [titles, setTitles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null); // New state for selected category
  const location = useLocation();
  const projectMenu = navLinks.find((item) => item.id === "project");
  const projectSubmenuItems = projectMenu && projectMenu.submenu;

  useEffect(() => {
    if (location.pathname === "/commercial") {
      setSelectedCategory("Commercial"); // Set the selected category to "Commercial" when the page is first loaded on the "/commercial" route
      setOpenSubMenuId("conmmercial");
    } else {
      setOpenSubMenuId(null);
    }

    // Fetch data from the backend
    axios
      .get("http://localhost:3001/v1/leads/project")
      .then((response) => {
        console.log(response);
        const res = response.data.project;
        console.log(res);
        setTitles(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [location]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-gray-200 h-auto">
        <div className="w-full h-auto">
          <img src={home5} alt="image" className="w-full" />
        </div>

        <div className="absolute flex top-14">
          <div>
            <img src={footer2} alt="image" className="w-[150px] h-[150px]" />
          </div>
          <div className="text-white text-1xl mt-10 ml-6 font-serif ">
            <Link to="/" className="underline">
              Home
            </Link>
            <span className="ml-4"> / Project / Conmmercial</span>
          </div>
        </div>

        <div className="static md:bg-black w-full opacity-90">
          <div
            className="md:flex hidden items-center text-white gap-4 ml-56 text-xl mt-2 "
            style={{ fontFamily: "siemens" }}
          >
            {projectSubmenuItems &&
              projectSubmenuItems.map((item) => (
                <div
                  key={item.id}
                  className={`hover:bg-white hover:text-black cursor-pointer bg-black p-2`}
                  onClick={() => handleCategoryClick(item.title)}
                >
                  <span>{item.title}</span>

                  <div className="mt-3 absolute">
                    {/* Render the list of titles based on the selected category */}
                    {selectedCategory &&
                      ((item.title === "Interior" &&
                        selectedCategory === "Interior") ||
                        (item.title === "Commercial" &&
                          selectedCategory === "Commercial") ||
                        (item.title === "Consultancy" &&
                          selectedCategory === "Consultancy") ||
                        (item.title === "Residential" &&
                          selectedCategory === "Residential")) &&
                      titles
                        .filter((title) => title.category === selectedCategory)
                        .map((title) => (
                          <div
                            key={title.id}
                            className={`text-white lg:bg-black h-auto text-lg`}
                          >
                            <Link
                              to={`/projects/${title._id}`}
                              className={`p-2 flex items-center hover:shadow-lg hover:bg-white hover:text-orange-500 hover:w-full ${
                                openSubMenuId === item.id && "bg-black text-white"
                              }`}
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

        <div className="bg-white shadow-xl p-2 md:mx-44 mt-2 h-[500px]">
          {/* Display titles based on the selected category */}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {titles
                .filter((title) => title.category === selectedCategory)
                .map((title) => (
                  <li key={title.id}>
                    <Link to={`/projects/${title.id}`}>{title.name}</Link>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Commercial;
