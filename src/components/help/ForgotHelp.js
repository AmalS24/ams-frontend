import React from "react";

export const ForgotHelp = (props) => {
  return (
    <div
      data-aos="zoom-in"
      className="w-97 h-97.5 px-8 absolute top-28 z-5 max-auto bg-white"
    >
      <p className="text-center text-3xl mt-10 font-montserrat">
        Forgot Password?
        </p>
     <div className="space-y-6">
        <p htmlFor="" className="text-xl mt-12 ">Email-Id</p>
        <input
                type="email"
                id="username"
                placeholder="Registered-Email"
                className="w-full italic h-12  px-5 text-xl rounded-full focus:outline-none border-2 border-black"
              />
              <button className="mx-auto flex items-center sm:w-30 w-30 justify-center shadow-2xl sm:px-4 rounded-full sm:h-12 h-14  text-2xl  text-red-600 border-2 border-red-600 bg-white hover:text-white hover:bg-red-600 ">
              Submit
            </button>
     </div>
      <p onClick={props.onClick} className="cursor-pointer hover:text-red-600 w-11 text-xl mt-20">
        Back
      </p>
    </div>
  );
};
