import React from "react";

export const ForgotHelp = (props) => {
  return (
    <div
      data-aos="zoom-in"
      className="w-97 h-97.5 px-8 absolute top-40 z-5 max-auto bg-white"
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
              <button className="mx-auto flex items-center sm:w-30 w-24 justify-center shadow-2xl sm:px-4 rounded-full sm:h-12 h-10  sm:text-xl font-bold text-red-600 border-2 border-red-600 bg-white font-montserrat">
              Submit
            </button>
     </div>
      <p onClick={props.onClick} className="text-xl mt-20">
        Back
      </p>
    </div>
  );
};
