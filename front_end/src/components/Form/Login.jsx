import React from "react";
import logo from "../../assets/logo.png";
import axios from "axios";

//Api Url : http://localhost:5000/api/auth

// const data = axios.post('http://localhost:5000/api/auth' , formdata)
const Login = () => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div>
        <img
          src="https://www.supertechlimited.com/images/hbanner-future.jpg"
          alt="image"
          className="w-screen h-screen"
        />
      </div>
      <div className="absolute w-[500px] h-auto flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt="image" className="w-[350px] h-auto" />
        </div>

        <div className=" w-full mx-2 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-blue-700 ">
            Admin Login
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                User Name
              </label>
              <input
                placeholder="User name"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                placeholder="password"
                type="password"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <a href="#" className="text-xs text-blue-600 hover:underline">
              Forget Password?
            </a>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <a href="#" className="font-medium text-blue-600 hover:underline" >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
