import React from "react";

function Content() {
  return (
    //   what-section
    <div className="w-full  h-full">
      <div className=" flex flex-col items-center justify-center bg-gray-200">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-900 mt-20 ">
          What is AMS ?
        </h1>
        <p className="font-light  lg:mx-72 md:mx-20  mx-10 py-10 mb-10 text-center text-3xl">
          AMS is an online Admission Management facility managed by MITS kochi
          to complete the initial stages of Admission process via online ,Kindly select your preferred quota to proceed.
        </p>
        </div>
        <div className="w-full flex justify-center mb-10 ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-wider  mt-20 ">
            How AMS Works ?
          </h1>
        </div>
    </div>
  );
}

export default Content;
