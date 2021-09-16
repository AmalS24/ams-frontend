import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";


const NriDetails_1 = () => {
  return (
    <div className="w-full bg-trout-500 h-screen">
      <div className="  w-full flex items-center justify-between xs:px-10 px-20 py-8 h-16">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            class="bi bi-house-fill transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
            <path
              fill-rule="evenodd"
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
            />
          </svg>
        </Link>

        <ProgressBar progressPercentage="1" />

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            class="bi bi-question-circle-fill transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
          </svg>
        </button>
      </div>
      <div className="w-full h-98 bg-transparent flex">
        <div className="flex justify-center items-start xl:w-full w-full">
          <form
            action=""
            className="flex flex-col  xs:w-80 sm:w-97.85 sm:h-98 h-full lg:w-200 xl:w-300 rounded-sm bg-white"
            method=""
          >
            <h1 className="text-2xl text-center mb-2 sm:text-4xl sm:py-3 font-semibold mt-4 uppercase">
              Basic Profile
            </h1>
            <label
              htmlFor="Name"
              className="text-md sm:font-normal sm:text-lg font-light mt-2 sm:mt-3 ml-6 sm:ml-10"
            >
              Name*
            </label>
            <div className="sm:flex sm:px-6">
              <input
                type="text"
                placeholder="First Name"
                className="mb-4  sm:mb-0 xs:h-11 sm:w-full sm:ml-3 px-4 w-72 mx-3 italic text-md sm:text-lg focus:outline-none border-2 border-black rounded-full"
              />
              <input
                type="text"
                placeholder="Middle Name (optional)"
                className=" xs:h-11 sm:w-full  px-4 w-72 mx-3 italic text-md sm:text-lg focus:outline-none border-2 border-black rounded-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className=" xs:h-11 sm:w-full  px-4 w-72 mx-3 italic text-md sm:text-lg focus:outline-none border-2 border-black rounded-full"
              />
            </div>

            <div className="h-6 w-72  sm:mt-4 sm:w-97.75  sm:h-12 mt-3 mx-auto flex sm:items-center justify-between   text-lg tracking-tighter">
              <button className="py-1 opacity-50 cursor-not-allowed sm:ml-6 sm:flex sm:items-center sm:w-30 sm:justify-center shadow-2xl sm:px-4 rounded-full sm:h-12 
              text-red-600  hover:text-purple-700 sm:border-2 border-red-600 sm:text-2xl sm:hover:text-white sm:hover:bg-red-600">
                SUBMIT
              </button>

              <button className="py-1 sm:ml-6 sm:flex sm:items-center sm:w-30 sm:justify-center shadow-2xl sm:px-4 rounded-full sm:h-12 
              text-red-600  hover:text-purple-700 sm:border-2 border-red-600 sm:text-2xl sm:hover:text-white sm:hover:bg-red-600 btn-transition">
                SAVE
              </button>

              <button className="py-1 opacity-50 cursor-not-allowed sm:ml-6 sm:flex sm:items-center sm:w-30 sm:justify-center shadow-2xl sm:px-4 rounded-full sm:h-12 
              text-red-600  hover:text-purple-700 sm:border-2 border-red-600 sm:text-2xl sm:hover:text-white sm:hover:bg-red-600">
                PREV
              </button>

              <button className="py-1 sm:ml-6 sm:flex sm:items-center sm:w-30 sm:justify-center shadow-2xl sm:px-4 rounded-full sm:h-12 
              text-red-600  hover:text-purple-700 sm:border-2 border-red-600 sm:text-2xl sm:hover:text-white sm:hover:bg-red-600 btn-transition">
                <Link to="./nridetails_2">NEXT</Link>
              </button>
              
            </div>
          </form>
        </div>
      </div>
    {/* <div className="bg-gray-300 flex items-center justify-center w-full h-98">

    </div> */}
























    </div>
  );
};

export default NriDetails_1;
