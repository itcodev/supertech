import React, { useState, useEffect } from "react";
import { useParams ,Link } from "react-router-dom";

import axios from "axios";
// import Navbar from "../../Navbar";
import Navbar from './Navbar'
import Footer from "./Footer";
import Sliderr from "./Slider";
import {navLinks} from '../constants/index'

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  // Find the "About" menu from the navLinks constant
  const projectMenu = navLinks.find((item) => item.id === "project");

  // Extract the submenu items for the "About" menu
  const projectSubmenuItems = projectMenu && projectMenu.submenu;
  useEffect(() => {
    // Fetch project details based on projectId from the API
    axios
      .get(`http://localhost:3001/v1/leads/project/${projectId}`)
      .then((response) => {
        const res = response.data.project;


        console.log(res);
        console.log(res.image);
        setProject(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching project details:", error);
        setLoading(false);
      });
  }, [projectId]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-gray-200 h-auto">
        <div className="w-full h-auto">
        <img
          src={`http://localhost:3001/${project?.cover}`} // Replace with the correct URL
          alt={project?.title}
          className="w-full h-[500px] object-cover"
        />
        </div>

        <div className="absolute flex top-14">
          <div className="text-white text-1xl mt-10 ml-6 font-serif">
            <Link to="/" className="underline">
              Home
            </Link>
            <span className="ml-4">
              {" "}
              / Properties / Residential / {project?.title}
            </span>
          </div>
        </div>

        <div className="absolute mt-[500px] lg:bg-black w-full h-[40px] opacity-80">
          <div
            className="lg:flex hidden items-center text-white gap-4 ml-48 text-xl mt-2"
            style={{ fontFamily: "siemens" }}
          >
            {projectSubmenuItems &&
              projectSubmenuItems.map((item) => (
                <div
                  key={item.id}
                  className=" hover:bg-white hover:text-black "
                >
                  <Link to={item.url}>{item.title}</Link>
                </div>
              ))}
            {/* Define links to other project pages similarly */}
          </div>
        </div>

        <div className="bg-white shadow-xl p-2 lg:mx-44 mt-2">
          <div className="flex flex-col h-auto lg:mx-12 m-0">
            <div>
              <div className="flex justify-between pt-6">
                <div className="text-3xl lg:mt-8 mb-6 lg:mx-0 mx-8 ">
                  <span className="underline text-orange-500 font-bold">
                    {project?.title}
                  </span>
                </div>

                <div className="bg-green-700 text-white w-[100px] h-[32px] lg:mt-8  rounded-lg flex justify-center items-center  mx-8 pb-1r4">
                  <div>{project?.status}</div>
                </div>
              </div>

              <div className="flex flex-col gap-2 lg:mx-0 mx-8">
                <p className="text-justify ml-2">
                  <span className="font-bold text-blue-900">Location</span>:{" "}
                  <span>{project?.location}</span>
                </p>
                <p className="text-justify ml-2">
                  <span className="font-bold text-blue-900">Duration</span>:{" "}
                  <span>{project?.duration}</span>
                </p>
                <p className="text-justify ml-2">
                  <span className="font-bold text-blue-900">Project Area</span>:{" "}
                  <span>{project?.area}</span>
                </p>
              </div>

              <div className="relative w-auto h-[320px] overflow-hidden mb-20 mt-2 lg:mx-0 mx-8 bg-black">
              <Sliderr images={[`http://localhost:3001/${project?.image}`]} />

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;
