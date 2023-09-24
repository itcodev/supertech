import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import axios from "axios";
import Sliderr from "../../Slider";

const BeingHouse = () => {
  const { projectID } = useParams();
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/v1/leads/project/${projectID}`)
      .then((response) => {
        const res = response.data.project;
        setProject(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching project data:", error);
        setLoading(false);
      });
  }, [projectID]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-gray-200 h-auto">
        <div className="w-full h-auto">
          <img
            src={project.image}
            alt={project.title}
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
              / Properties / Residential / {project.title}
            </span>
          </div>
        </div>

        <div className="absolute mt-[500px] lg:bg-black w-full h-[40px] opacity-80">
          <div
            className="lg:flex hidden items-center text-white gap-4 ml-48 text-xl mt-2"
            style={{ fontFamily: "siemens" }}
          >
            <Link to="/projects/being-house" className="hover:bg-white hover:text-black">
              Project 1
            </Link>
            {/* Define links to other project pages similarly */}
          </div>
        </div>

        <div className="bg-white shadow-xl p-2 lg:mx-44 mt-2">
          <div className="flex flex-col h-auto lg:mx-12 m-0">
            <div>
              <div className="flex justify-between pt-6">
                <div className="text-3xl lg:mt-8 mb-6 lg:mx-0 mx-8 ">
                  <span className="underline text-orange-500 font-bold">
                    {project.title}
                  </span>
                </div>

                <div className="bg-green-700 text-white w-[100px] h-[30px] lg:mt-8  rounded-lg flex justify-center items-center  mx-8">
                  {project.status}
                </div>
              </div>

              <div className="flex flex-col gap-2 lg:mx-0 mx-8">
                <p className="text-justify ml-2">
                  <span className="font-bold text-blue-900">Location</span>:{" "}
                  <span>{project.location}</span>
                </p>
                <p className="text-justify ml-2">
                  <span className="font-bold text-blue-900">Duration</span>:{" "}
                  <span>{project.duration}</span>
                </p>
                <p className="text-justify ml-2">
                  <span className="font-bold text-blue-900">Project Area</span>:{" "}
                  <span>{project.area} SFT</span>
                </p>
              </div>

              <div className="relative w-auto h-[320px] overflow-hidden mb-20 mt-2 lg:mx-0 mx-8 bg-black">
                <Sliderr images={[project.image]} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BeingHouse;
