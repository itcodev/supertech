// import React, { useState, useEffect } from "react";

// import { Link } from "react-router-dom";
// import { navLinks } from "../../constants";
// import Navbar from "../Navbar";
// import Footer from "../Footer";
// import home2 from "../../assets/home2.jpeg";
// import menu from "../../assets/menu.svg";

// const Policies = () => {
//   const [toggle, setToggle] = useState(false);

//   // Find the "About" menu from the navLinks constant
//   const aboutMenu = navLinks.find((item) => item.id === "about");

//   // Extract the submenu items for the "About" menu
//   const aboutSubmenuItems = aboutMenu && aboutMenu.submenu;

//   const toggleMenu = () => {
//     setToggle((prev) => !prev);
//   };

//   useEffect(() => {
//     // Add a listener for the resize event
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setToggle(false); // Close the toggle when screen size is above "md"
//       }
//     };
//     window.addEventListener("resize", handleResize);

//     // Clean up the listener when the component unmounts
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   return (
//     <>
//       <Navbar />
//       <div className="flex flex-col">
//         <div className="w-full h-auto">
//           <img src={home2} alt="image" className="w-full h-[450px]" />
//         </div>

//         <div className="absolute flex top-14">
//           <div>
//             <img
//               src="https://www.supertechlimited.com/images/logo_home.png"
//               alt="image"
//               className="z-0"
//             />
//           </div>
//           <div className="text-white text-1xl mt-10 ml-6 font-serif">
//             <Link to="/" className="underline">
//               Home
//             </Link>

//             <span className="ml-4"> / About Us / Policies</span>
//           </div>
//         </div>




//         {/* Render the submenu items for the "About" menu */}
//         <div className="absolute mt-[430px] md:bg-black w-full h-[40px] opacity-80">
//           <div
//             className=" md:flex hidden items-center text-white gap-4 ml-56 text-xl mt-2"
//             style={{ fontFamily: "siemens" }}
//           >
//             {aboutSubmenuItems &&
//               aboutSubmenuItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className=" hover:bg-white hover:text-black "
//                 >
//                   <Link to={item.url}>{item.title}</Link>
//                 </div>
//               ))}
//           </div>
//         </div>

//         <div className="flex flex-col h-auto md:mx-12 m-0">
//           <div>
//           <div className="sm:flex relative md:absolute flex-col ">
//               <div className="sm:flex flex gap-2 bg-slate-400 sm:rounded md:p-0 sm:p-2">
//                 <img
//                   src={menu}
//                   alt="menu"
//                   className="w-[28px] h-[28px] object-contain md:hidden"
//                   onClick={toggleMenu}
//                 />
//                 <p className="text-white md:hidden">Menu</p>
//               </div>
//               {toggle && (
//                 <div className="bg-white text-black p-2">
//                   {aboutSubmenuItems &&
//                     aboutSubmenuItems.map((item, index) => (
//                       <div
//                         key={item.id}
//                         className={`hover:bg-white hover:text-black ${
//                           index < aboutSubmenuItems.length - 1
//                             ? "border-b border-black border-dotted"
//                             : ""
//                         }`}
//                       >
//                         <Link to={item.url} className="block py-2">
//                           {item.title}
//                         </Link>
//                       </div>
//                     ))}
//                 </div>
//               )}
//             </div>

//             <div className=" bg-white shadow-xl p-4 ">
//               <div className="text-3xl font-bold md:mt-12 ">Polices</div>

//               <div class="p-4">
//                 <div class="text-xl font-bold mb-2 text-orange-400">
//                   CSR Policy
//                 </div>
//                 <p class="mb-2">
//                   Size: 2.66MB&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
//                   <a
//                     href="../pdf/csr-policy.pdf"
//                     target="_blank"
//                     class="text-red-500 hover:underline"
//                   >
//                     Download PDF
//                   </a>
//                 </p>
//                 <hr class="my-4" />
//               </div>

//               <div class="p-4">
//                 <div class="text-xl font-bold mb-2 text-orange-400">
//                   Vigil Mechanism / Whistle Blower Policy
//                 </div>
//                 <p class="mb-2">
//                   Size: 3.8MB&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
//                   <a
//                     href="../pdf/vigil-mechanism-whistle-blower-policy.pdf"
//                     target="_blank"
//                     class="text-red-500 hover:underline"
//                   >
//                     Download PDF
//                   </a>
//                 </p>
//                 <hr class="my-4" />
//               </div>

//               <div class="p-4">
//                 <div class="text-xl font-bold mb-2 text-orange-400">
//                   Policy on Prevention of Sexual Harassment at Workplace
//                 </div>
//                 <p class="mb-2">
//                   Size: 2.73MB&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
//                   <a
//                     href="../pdf/policy-prevention-sexual-harassment.pdf"
//                     target="_blank"
//                     class="text-red-500 hover:underline"
//                   >
//                     Download PDF
//                   </a>
//                 </p>
//                 <hr class="my-4" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Policies;









// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { navLinks } from "../../constants";
// import Navbar from "../Navbar";
// import Footer from "../Footer";
// import home3 from "../../assets/home3.jpeg";
// import menu from "../../assets/menu.svg";
// import footer2 from '../../assets/footer2.png'
// import ImageSlider from "../ImageSlider";
// import home1 from "../../assets/home1.jpeg";
// import home2 from "../../assets/home2.jpeg";
// // import home3 from "../assets/home3.jpeg";
// import home4 from "../../assets/home4.jpeg";
// import home5 from "../../assets/home5.jpeg";
// import home6 from "../../assets/home6.jpeg";
// import home7 from "../../assets/home7.jpeg";
// import home8 from '../../assets/home8.jpeg';
// const Residential = () => {
//   const [toggle, setToggle] = useState(false);

//   // Find the "About" menu from the navLinks constant
//   const aboutMenu = navLinks.find((item) => item.id === "about");

//   // Extract the submenu items for the "About" menu
//   const aboutSubmenuItems = aboutMenu && aboutMenu.submenu;

//   const toggleMenu = () => {
//     setToggle((prev) => !prev);
//   };
//   const images = [home4, home5, home6, home7, home8]; // Add all image URLs here

//   useEffect(() => {
//     // Add a listener for the resize event
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setToggle(false); // Close the toggle when screen size is above "md"
//       }
//     };
//     window.addEventListener("resize", handleResize);

//     // Clean up the listener when the component unmounts
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   return (
//     <>
//       <Navbar />
//       <div className="flex flex-col bg-gray-200 h-auto">
//         <div className="w-full h-auto">
//           <img src={b} alt="image" className="w-full h-[500px] object-cover" />
//         </div>

//         <div className="absolute flex top-14">
//         <div>
//             <img src={footer2} alt="image" className="w-[150px] h-[150px]" />
//           </div>
//           <div className="text-white text-1xl mt-10 ml-6 font-serif">
//             <Link to="/" className="underline">
//               Home
//             </Link>

//             <span className="ml-4"> / Propertics / Residential / Project 1</span>
//           </div>
//         </div>



//         {/* Render the submenu items for the "About" menu */}
//         <div className="absolute mt-[500px] md:bg-black w-full h-[40px] opacity-80">
//           <div
//             className=" md:flex hidden items-center text-white gap-4 ml-24 text-xl mt-2"
//             style={{ fontFamily: "siemens" }}
//           >
//             {aboutSubmenuItems &&
//               aboutSubmenuItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className=" hover:bg-white hover:text-black "
//                 >
//                   <Link to={item.url}>{item.title}</Link>
//                 </div>
//               ))}
//           </div>
//         </div>
//         <div className="bg-white shadow-xl p-2 md:mx-24 mt-2">

//         <div className="flex flex-col h-auto md:mx-12 m-0">
//           <div>
//           <div className="sm:flex relative md:absolute flex-col mx-2">
//           {/* <div className=" bg-white shadow-xl p-4 "> */}

//               <div className="sm:flex flex gap-2 bg-slate-400 rounded md:p-0 p-2">
//                 <img
//                   src={menu}
//                   alt="menu"
//                   className="w-[28px] h-[28px] object-contain md:hidden"
//                   onClick={toggleMenu}
//                 />
//                 <p className="text-white md:hidden">Menu</p>
//               </div>
//               {toggle && (
//                 <div className="bg-white text-black p-2">
//                   {aboutSubmenuItems &&
//                     aboutSubmenuItems.map((item, index) => (
//                       <div
//                         key={item.id}
//                         className={`hover:bg-white hover:px-2 hover:text-black ${
//                           index < aboutSubmenuItems.length - 1
//                             ? "border-b border-black border-dotted"
//                             : ""
//                         }`}
//                       >
//                         <Link to={item.url} className="block py-2">
//                           {item.title}
//                         </Link>
//                       </div>
//                     ))}
//                 </div>
//               )}
//          </div>

//               <div className="text-3xl md:mt-6 px-2 underline">Project Name</div>
//               <p className=" text-justify mt-2 px-2">Location</p>
//               <p className=" text-justify mt-2 px-2">Duration</p>

//               <div className="relative w-auto px-2 h-[300px] overflow-hidden">
//         <ImageSlider images={images} />
//              </div>

//               <p className=" text-justify mt-6 px-2">
//               Supertech Industries Limited was founded in 2010. The company has developed some of the modern and finest residential and commercial complexes in Dhaka, National Capital Region (NCR) and new urban settlements like Saver, Mirpur, Uttara and Rampura. Since inception, the company has been responsible for the development of many of Dhaka's other well known Bosundhara housing.
//               </p>
//               <p className=" text-justify mt-6 mb-10 px-2">

//               Company's foray into real estate and construction industry led to the creation of various landmark real estate projects - Supertech Business Tower, Falcon Supertech, Hotel Sultan, Supertech Duplex Town, Hotel Grand Noor, (ROB) Flyover Street lighting. are few examples.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Residential;







// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { navLinks } from "../../constants";
// import Navbar from "../Navbar";
// import Footer from "../Footer";
// import home5 from "../../assets/Interrior.png";
// import footer2 from "../../assets/footer2.png";
// import axios from "axios";

// const Interior = () => {
//   const [openSubMenuId, setOpenSubMenuId] = useState(null);
//   const [titles, setTitles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState(null); // New state for selected category
//   const location = useLocation();
//   const projectMenu = navLinks.find((item) => item.id === "project");
//   const projectSubmenuItems = projectMenu && projectMenu.submenu;

//   useEffect(() => {
//     if (location.pathname === "/interior") {
//       setOpenSubMenuId("interior");
//     } else {
//       setOpenSubMenuId(null);
//     }

//     // Fetch data from the backend
//     axios
//       .get("http://localhost:3001/v1/leads/project")
//       .then((response) => {
//         const res = response.data.project;
//         setTitles(res);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, [location]);

//   const toggleMenu = (titleId) => {
//     if (openSubMenuId === titleId) {
//       setOpenSubMenuId(null);
//     } else {
//       setOpenSubMenuId(titleId);
//     }
//   };

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category); // Set the selected category when a category is clicked
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="flex flex-col bg-gray-200 h-auto">
//         <div className="w-full h-auto">
//           <img src={home5} alt="image" className="w-full" />
//         </div>

//         <div className="absolute flex top-14">
//           <div>
//             <img src={footer2} alt="image" className="w-[150px] h-[150px]" />
//           </div>
//           <div className="text-white text-1xl mt-10 ml-6 font-serif ">
//             <Link to="/" className="underline">
//               Home
//             </Link>
//             <span className="ml-4"> / Project / Interior</span>
//           </div>
//         </div>

//         <div className="static md:bg-black w-full opacity-90">
//           <div
//             className="md:flex hidden items-center text-white gap-4 ml-56 text-xl mt-2 "
//             style={{ fontFamily: "siemens" }}
//           >
//             {projectSubmenuItems &&
//               projectSubmenuItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className={`hover:bg-white hover:text-black cursor-pointer bg-black p-2`}
//                   onClick={() => handleCategoryClick(item.title)} 
//                 >
//                   <span>{item.title}</span>
//                   {openSubMenuId === item.id && (
//                     <div className="mt-3 absolute">
//                       {/* Render the list of titles based on the selected category */}
//                       {titles
//                         .filter((title) => title.category === selectedCategory)
//                         .map((title) => (
//                           <div
//                             key={title.id}
//                             className="text-white bg-black h-auto text-lg"
//                           >
//                             <Link
//                               to={`${title.id}`}
//                               className="p-2 flex items-center hover:shadow-lg hover:bg-white hover:text-orange-500 hover:w-full"
//                             >
//                               {title.title}
//                             </Link>
//                           </div>
//                         ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//           </div>
//         </div>
        
//         <div className="bg-white shadow-xl p-2 md:mx-44 mt-2 h-[500px]">
//           {/* Display titles based on the selected category */}
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             <ul>
//               {titles
//                 .filter((title) => title.category === selectedCategory)
//                 .map((title) => (
//                   <li key={title.id}>
//                     <Link to={`/projects/${title.id}`}>{title.name}</Link>
//                   </li>
//                 ))}
//             </ul>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Interior;
