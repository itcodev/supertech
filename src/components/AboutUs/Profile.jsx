import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import Navbar from "../Navbar";
import Footer from "../Footer";
import home4 from "../../assets/Profile.png";
import footer2 from "../../assets/footer2.png";
import menu from "../../assets/menu.svg";
const Profile = () => {
  const [toggle, setToggle] = useState(false);
  // const [submenuOpen, setSubmenuOpen] = useState(null);

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
      <div className="flex flex-col lg:bg-gray-300 h-auto ">
        <div className="w-auto h-auto">
          <img src={home4} alt="image" className="w-full lg:h-[550px]  md:h-[300px] object-cover" />
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
              <div className="px-6 md:mx-10">
                <div className="text-3xl font-bold lg:mt-6 mt-4">Profile</div>
                <p className=" text-justify mt-6">
                  Supertech Industries Limited, Bangladesh’s leading real estate
                  developer was founded 13 years back in National Capital Region
                  and since then has been scaling new heights by each passing
                  day. The company has set new trends of architectural finesse
                  in the contemporary global scenario touching the horizons of
                  excellence. Established under the dynamic leadership of Mr.
                  Rofiqul Islam, Supertech has led to creation of various
                  landmark projects. The leaders and skilled professionals of
                  the company have worked towards launching out of the league
                  projects and take the real estate sector to the next level.
                  Supertech is the pioneer to launch the concept of mixed-use
                  development in Bangladesh and to come up with high rise
                  constructions in North Purbachal City and Uttara New Sector.
                </p>
                <p className=" text-justify mt-6">
                  Company's foray into real estate and construction industry led
                  to the creation of various landmark real estate projects -
                  Supertech Business Tower, Falcon Supertech, Hotel Sultan,
                  Supertech Duplex Town, Hotel Grand Noor, (ROB) Flyover Street
                  lighting. are few examples.
                </p>
                {/* <p className="mt-10 text-orange-500">PRESENCE</p>
                 */}
                <div className="mt-6 text-orange-500">PRESENCE</div>
                <p className=" text-justify mt-4">
                  Supertech Industries Limited, Bangladesh’s leading real estate
                  developer was founded 13 years back in National Capital Region
                  and since then has been scaling new heights by each passing
                  day. The company has set new trends of architectural finesse
                  in the contemporary global scenario touching the horizons of
                  excellence. Established under the dynamic leadership of Mr.
                  Rofiqul Islam, Supertech has led to creation of various
                  landmark projects. The leaders and skilled professionals of
                  the company have worked towards launching out of the league
                  projects and take the real estate sector to the next level.
                  Supertech is the pioneer to launch the concept of mixed-use
                  development in Bangladesh and to come up with high rise
                  constructions in North Purbachal City and Uttara New Sector.
                </p>
                <p className="mt-6">
                  The company is developing projects in different verticals of
                  real estate like residential, townships, commercial, retail,
                  office spaces and hospitality.
                </p>
                <div className="mt-6 text-orange-500">TECHNOLOGY</div>
                <p className=" text-justify mt-4">
                  Supertech has not only expanded in terms of number of projects
                  but in terms of the kind of engineering techniques, innovative
                  designing and architectural finesse it has brought in to the
                  Indian real estate industry.
                </p>
                <p className="mt-6 text-justify">
                  Supertech Industries Limited has not only expanded in terms of
                  number of projects but in terms of the kind of engineering
                  techniques, innovative designing and architectural finesse it
                  has brought in to the Bangladesh real estate industry.
                  Supertech Industries Limited is the Bangladesh real estate
                  developer to introduce the precast technology, which is a step
                  further in construction. With the use of this technology, a
                  hindrance-free construction can be carried out in any season
                  saving up to 60% of time as compared to the construction time
                  of a brick house. It has also introduced the jump form
                  technology which fastens the construction process of any high
                  rise building. Our all fabrications is steel shuttering.
                </p>
                <div className="mt-6 text-orange-500">
                  TIE-UPS AND ASSOCIATIONS
                </div>
                <p className=" text-justify mt-4">
                  For venturing into hospitality sector, Supertech has tied-up
                  with Carlson Group of Hotels, Starwood Hotels & Resorts
                  Worldwide and JW Marriot and has also launched its own
                  hospitality brand - Hyphen. To fulfill the commitment of
                  delivering the best, the company has tied-up with the world's
                  best names in the fields of architecture, design and
                  technology.  Consultancy - Knight Frank, London  Concept and
                  Architecture - Benoy, London  Geo-technical Engineer - Golder
                  Associates, Australia  Landscape Consultants - Cracknell,
                  Dubai  Structural Consultant and MEP - Buro Happold, UK 
                  Construction Contractors - Arabian Construction Company, Dubai
                   Engineers and Contractors - B.L. Kashyap, India 
                  Consultants: RWDI, Canada  Designers: Yoo Worldwide LLP (UK),
                  Armani Casa (Italy)
                </p>
                <p className="mt-6 text-justify">
                  To fulfill the commitment of delivering the best, the company
                  has tied-up with the world's best names in the fields of
                  architecture, design and technology.
                </p>
                <ul className="list-disc ml-12 mt-4 space-y-2">
                  <li>Consultancy - Knight Frank, London</li>
                  <li>Concept and Architecture - Benoy, London</li>
                  <li>Geo-technical Engineer - Golder Associates, Australia</li>
                  <li>Landscape Consultants - Cracknell, Dubai</li>
                  <li>Structural Consultant and MEP - Buro Happold, UK</li>
                  <li>
                    Construction Contractors - Arabian Construction Company,
                    Dubai
                  </li>
                  <li>Engineers and Contractors - B.L. Kashyap, India</li>
                  <li>Consultants: RWDI, Canada</li>
                  <li>
                    Designers: Yoo Worldwide LLP (UK), Armani Casa (Italy)
                  </li>
                </ul>
                <p className="mt-8 text-justify">
                  Supertech has recently ventured into construction of designer
                  residences at Supernova, Noida for which the company has tied
                  up with world renowned designer, "Armani/Casa". The company
                  has also got into association with Disney India to come up
                  with Disney inspired homes-exteriors and interiors at its 100
                  acre integrated township, Golf Country, located at Yamuna
                  Expressway, Greater Noida.
                </p>
                <div className="mt-6 text-orange-500">MILESTONE</div> Projects
                across 20 plus locations  More than 2,000 satisfied customers 
                Projects worth TAKA 1500 billion in progress  More than 16,000
                units and 25 million sq. ft. of Real Estate under development 
                Over 10 years of delivering world class projects in Residential,
                Retail, Hospitality IT Parks, Education and Corporate Spaces 
                More than 5,000 units delivered having overall area of 7 million
                sq. ft.  2,000 units successfully delivered during FY 2015-22.
                 1,200 units more to be delivered in FY 2022-24.
                <div className="mt-6 mb-4 text-orange-500">PROJECT-DETAIL</div>
                <div className="md:flex">
                  <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <table className="w-full table-auto border-collapse">
                      <thead>
                        <tr>
                          <th className="p-2 border bg-black text-white">
                            Residential
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="p-2 border bg-gray-300 text-black">
                            On-Going
                          </td>
                        </tr>
                        <tr>
                          <td class="p-2 border">
                            Hemaietpur: Super Tech Business Tower
                          </td>
                        </tr>
                        <tr>
                          <td class="p-2 border">Saver: Super Tech Falcon</td>
                        </tr>
                        <tr>
                          <td class="p-2 border">
                            Hemaietpur: Super Tech Industries Factory{" "}
                          </td>
                        </tr>
                        <tr>
                          <td class="p-2 border">
                            Uttara Sector 11,A: Akesh Nila
                          </td>
                        </tr>
                        <tr>
                          <td class="p-2 border">
                            Mirpur 12 Housing: SR Villa
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-full md:w-1/2 md:ml-4">
                    <table className="w-full table-auto border-collapse">
                      <thead>
                        <tr>
                          <th className="p-2 border bg-black text-white">
                            Residential
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="p-2 border bg-gray-300 text-black">
                            Completed
                          </td>
                        </tr>
                        <tr>
                          <td class="p-2 border">Saver: NJ Tower</td>
                        </tr>
                        <tr>
                          <td class="p-2 border">Hemaietpur: Steel Building</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="md:flex">
                  <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <table className="w-full table-auto border-collapse">
                      <thead>
                        <tr>
                          <th className="p-2 border bg-black text-white">
                            Township
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="table-head1">
                          <td class="p-2 border bg-gray-300 text-black">
                            On-Going
                          </td>
                        </tr>
                        <tr>
                          <td class="p-2 border">Basta: Duplex Town</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-full md:w-1/2 md:ml-4">
                    <table className="w-full table-auto border-collapse">
                      <thead>
                        <tr>
                          <th className="p-2 border bg-black text-white">
                            Township
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="table-head1">
                          <td class="p-2 border bg-gray-300 text-black">
                            Completed
                          </td>
                        </tr>
                        <tr>
                          <td class="p-2 border">Saver: Green Village</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="md:flex">
                  <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <table className="w-full table-auto border-collapse">
                      <thead>
                        <tr>
                          <th className="p-2 border bg-black text-white">
                            Commercial & Retail
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="table-head1">
                          <td class="p-2 border bg-gray-300 text-black">
                            On-Going
                          </td>
                        </tr>
                        <tr>
                          <td class="p-2 border">Rudrapur: Metropolis Mall</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-full md:w-1/2 md:ml-4">
                    <table className="w-full table-auto border-collapse">
                      <thead>
                        <tr>
                          <th className="p-2 border bg-black text-white">
                            Commercial & Retail
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="table-head1">
                          <td class="p-2 border bg-gray-300 text-black">
                            Completed
                          </td>
                        </tr>

                        <tr>
                          <td class="p-2 border">Uttara: Shop prix Mall</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="md:flex">
                  <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <table className="w-full table-auto border-collapse">
                      <thead>
                        <tr>
                          <th className="p-2 border bg-black text-white">
                            Hotel
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="table-head1">
                          <td class="p-2 border bg-gray-300 text-black">
                            On-Going
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-full md:w-1/2 md:ml-4">
                    <table className="w-full table-auto border-collapse">
                      <thead>
                        <tr>
                          <th className="p-2 border bg-black text-white">
                            Hotel
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="table-head1">
                          <td class="p-2 border bg-gray-300 text-black">
                            Completed
                          </td>
                        </tr>
                        <tr>
                          <td class="p-2 border">Dinajpur: Hotel Sultan</td>
                        </tr>
                        <tr>
                          <td class="p-2 border">Dinajpur: Hotel Grand Noor</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="md:flex">
                  <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <table className="w-full table-auto border-collapse">
                      <thead>
                        <tr>
                          <th className="p-2 border bg-black text-white">
                            Interior
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="table-head1">
                          <td class="p-2 border bg-gray-300 text-black">
                            On-Going
                          </td>
                        </tr>
                        <tr>
                          <td class="p-2 border">Vulta: Hasan Food House</td>
                        </tr>
                        <tr>
                          <td>Bonani: Residential Flat Interior</td>
                        </tr>
                        <tr>
                          <td>Baridhara DOHS: Flat Interior</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-full md:w-1/2 md:ml-4 mb-32">
                    <table className="w-full table-auto border-collapse">
                      <thead>
                        <tr>
                          <th className="p-2 border bg-black text-white">
                            Interior
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="table-head1">
                          <td class="p-2 border bg-gray-300 text-black">
                            Completed
                          </td>
                        </tr>
                        <tr>
                          <td class="p-2 border">
                            Zingera: Nisad Departmental Store
                          </td>
                        </tr>
                        <tr>
                          <td class="p-2 border">Dinajpur: Need Fashion</td>
                        </tr>
                        <tr>
                          <td class="p-2 border">Dinajpur: Alive Fashion</td>
                        </tr>
                        <tr>
                          <td class="p-2 border">Dinajpur: Amontron Fashion</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Profile;
