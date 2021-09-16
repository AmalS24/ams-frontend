import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

export const Header = () => {
  return (
    <div className="w-full max-w-screen h-98 relative">
      <img
        className="absolute h-full w-full object-cover  "
        src="https://wallpapercave.com/wp/wp2661905.jpg"
        alt="cover"
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
       <div className="px-6 py-4 text-lg text-white flex items-center justify-between relative">
        <Link
          to="/"
          className=" flex font-bold px-6 hover:text-red-600   
          transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >    
          <svg
            class="w-6 h-6 animate-pulse"
            fill="none"
            stroke="red"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            ></path>
          </svg>
          AMS
        </Link>
        <div className="flex flex-row justify-between items-center w-64 mt-3">
        <Link
          to="/nri"
          className="flex items-center  justify-center w-30 shadow-2xl rounded-xl h-10 text-white bg-red-600
          transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100"
        >
          Register
        </Link>
        {/* <Link
          to="/mgmt"
          className="px-6 hover:text-red-600 
          transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          MANAGEMENT
        </Link>
        <Link
          to="/merit"
          className="px-6 hover:text-red-600 
          transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          MERIT
        </Link> */}
        <Link
          to="/login"
          className="flex items-center  justify-center w-30 shadow-2xl rounded-xl h-10 text-white border-2 border-red-600 hover:bg-red-600
                transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100"
        >
          Sign-In
        </Link>
        </div>
      </div>
      <div className=" flex flex-col h-96 items-center  justify-center relative ">
        <h1 className="py-5 xs:text-4xl sm:text-6xl text-3xl md:text-7xl text-white tracking-wider">
          WELCOME TO MITS
        </h1>
        <h3 className="text-red-600 text-xl xs:text-2xl sm:text-4xl md:text-4xl  font-mono">
          AMS
        </h3>
      </div>
    </div>
  );
};
