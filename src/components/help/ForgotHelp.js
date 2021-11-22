import React from "react";

import "./style.css"


export const ForgotHelp = (props) => {
  return (
    <div
      className="fixed right-40 top-30 z-40 w-98 h-98 bg-white "
    >
      
      <div
        className="absolute  z-30 w-8 h-8 rounded-full bg-torch-red-500  
        font-extrabold transform rotate-45 text-white text-xl cursor-pointer -right-2 -top-2"
        onClick={props.onClick}
      >
        +
      </div>
      <div className="text-2xl  flex items-center justify-center mt-10">
      <label
          htmlFor="email"
          className="text-md sm:font-normal sm:text-lg font-light mt-2 sm:mt-3 ml-6 sm:ml-10"
        >
          Email
        </label>
        <input
          type="email"
          placeholder="Email-ID"
          required
          className="xs:h-11 sm:w-97.55 sm:text-lg sm:ml-8  px-4 w-72 ml-2  text-md italic focus:outline-none border-2 border-black rounded-full"
        />
        </div>
        <div className="px-4 w-72 text-2xl mx-5 fixed right-30 ">
        <button
             className=" justify-center w-32 shadow-2xl rounded-full h-15 border-2 border-red-600 text-red-600 text-2xl hover:text-white hover:bg-red-600"
              >
            Submit
        </button>
        </div>
      </div> 
    
  );
};