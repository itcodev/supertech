import React, { useState, useEffect } from "react";
import { Form, Input, Select, message, Radio } from "antd";

import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import Navbar from "../Navbar";
import Footer from "../Footer";
import home5 from "../../assets/home5.jpeg";
import menu from "../../assets/menu.svg";
import footer2 from "../../assets/footer2.png";
const { Option } = Select;

const Contact = () => {
  const countries = [
    { value: "", label: "--Select--" },
    { value: "Afghanistan", label: "Afghanistan" },
  ];

  const [form] = Form.useForm();
  const [toggle, setToggle] = useState(false);

  // Find the "About" menu from the navLinks constant
  const aboutMenu = navLinks.find((item) => item.id === "contact");

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
          <img
            src={home5}
            alt="image"
            className="w-full lg:h-[550px]  md:h-[300px] object-cover"
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

            <span className="ml-4 "> / Contact / WContact Us</span>
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
              <div className="text-3xl font-bold lg:mt-6 mt-4 px-6 md:mx-6">
                Contact
              </div>

              <Form
                form={form}
                onFinish={""}
                className="flex flex-col p-4 px-6 md:mx-6"
              >
                {/* <div className="float-right text-right mb-4">
                  <span className="text-red-500">*</span>mandatory fields
                </div> */}

                <div className="font-bold mb-6">
                  Nature of Query <span className="text-red-500">*</span>
                </div>

                <div className="grid grid-cols-1 mb-10">
                  <Radio.Group
                    name="natureofquery"
                    defaultValue="General Feedback"
                  >
                    <Radio value="General Feedback">General Feedback</Radio>
                  </Radio.Group>
                </div>

                <div className="flex justify-between space-x-2">
                  <div>
                    <label htmlFor="" className=" font-semibold">
                      Name
                    </label>
                    <div className="w-[350px] ">
                      <Form.Item name="name">
                        <Input placeholder="Enter Name" />
                      </Form.Item>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="" className=" font-semibold">
                      Email
                    </label>
                    <div className="w-[350px] ">
                      <Form.Item name="email">
                        <Input placeholder="Enter email" />
                      </Form.Item>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between space-x-2">
                  <div>
                    <label htmlFor="" className=" font-semibold">
                      MobileNo
                    </label>
                    <div className="w-[350px] ">
                      <Form.Item name="mobileNo">
                        <Input placeholder="Enter Mobile" />
                      </Form.Item>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="" className=" font-semibold">
                      Current City
                    </label>
                    <div className="w-[350px] ">
                      <Form.Item name="city">
                        <Input placeholder="Current City" />
                      </Form.Item>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between space-x-2">
                  <div className="flex items-center">
                    <div className="mr-4 font-semibold">
                      Country <span className="red"></span>
                    </div>
                    <div className="w-[250px]">
                      <Select
                        className="w-full max-w-sm inp2"
                        id="country"
                        name="country"
                        maxLength="40"
                        placeholder="--Select--"
                      >
                        {countries.map((country) => (
                          <Option key={country.value} value={country.value}>
                            {country.label}
                          </Option>
                        ))}
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="" className=" font-semibold">
                      Querry text
                    </label>
                    <div className="w-[250px] ">
                      <Form.Item name="department">
                        <Input placeholder="Enter Department Name" />
                      </Form.Item>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-2 mb-32">
                  <button
                    type="submit"
                    className="w-[100px] bg-blue-500 text-white hover:bg-blue-700 rounded px-4 py-2"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
