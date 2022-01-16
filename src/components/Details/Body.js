import React from "react";

const Body = () => {
  return (
    <div className="w-full h-auto pt-4 px-3 lg:px-30 xl:px-56">
      <form
        action=""
        className="w-auto font-montserrat sm rounded-md h-auto bg-gray-300 p-4"
      >
        <div className="w-full h-auto  flex flex-col md:flex-row ">
          <div className="md:w-1/3 h-auto px-3 py-4 flex flex-col space-y-1 ">
            {/*Name and DoB*/}
            <label htmlFor="" className="ml-3 text-md">
              Name*
            </label>
            <input
              type="text"
              className="w-full h-10 rounded-full px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black italic"
            />
            <label htmlFor="" className="ml-3 text-md">
              Date of Birth*
            </label>
            <input
              type="date"
              className="w-full h-10 rounded-full px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black italic"
            />
          </div>
          <div className="md:w-1/3 h-auto  px-3 py-4 flex flex-col">
            <label htmlFor="" className="ml-3 text-md">
              Photo*
            </label>
            <input
              type="file"
              className="w-full mt-1 h-10 rounded-full px-4 text-lg bg-white border-2 border-black italic"
            />
            <button className="w-44 mt-8 mx-auto  h-10 rounded-full bg-torch-red-500 text-white text-xl">
              Upload
            </button>
          </div>
          <div className="md:w-1/3 h-auto px-3 p-4 flex flex-col space-y-1">
            <div className="w-full md:h-full h-44 rounded-lg border-2 bg-white border-black"></div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col md:flex-row ">
          {/* address */}
          <div className="md:w-1/2 h-auto px-3 py-4 flex flex-col space-y-2 ">
            {/* housename
              city  district
              state pincode
              contact no1 contact no2 */}

            <label htmlFor="" className="ml-3 text-md">
              Contact Address*
            </label>
            <input
              type="text"
              className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black italic"
            />
            <div className="w-full md:flex space-y-1 md:space-y-0 md:space-x-2">
              <input
                type="text"
                className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black italic"
              />
              <input
                type="text"
                className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black italic"
              />
            </div>
            <div className="w-full md:flex  space-y-1 md:space-y-0 md:space-x-2">
              <input
                type="text"
                className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black italic"
              />
              <input
                type="text"
                className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black italic"
              />
            </div>
            <div className="space-x-3 ml-3 flex items-center pr-3">
              <input type="checkbox" className="w-4 h-4" />
              <p className="">Use this as Permanent Address</p>
            </div>
          </div>
          <div className="md:w-1/2 h-auto px-3 py-4 flex flex-col space-y-2 ">
            {/* Permannet Address */}
            <label htmlFor="" className="ml-3 text-md">
              Permanent Address*
            </label>

            <input
              type="text"
              className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black italic"
            />
            <div className="w-full md:flex space-y-1 md:space-y-0 md:space-x-2">
              <input
                type="text"
                className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black italic"
              />
              <input
                type="text"
                className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black italic"
              />
            </div>
            <div className="w-full md:flex  space-y-1 md:space-y-0 md:space-x-2">
              <input
                type="text"
                className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black italic"
              />
              <input
                type="text"
                className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black italic"
              />
            </div>
            <div className="w-full md:flex space-y-1 md:space-y-0 md:space-x-2">
              <div className="md:w-1/2">
                <label htmlFor="" className="ml-3 text-md">
                  Contact no1*
                </label>
                <input
                  type="text"
                  className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black italic"
                />
              </div>
              <div className="md:w-1/2">
                <label htmlFor="" className="ml-3 text-md">
                  Contact No2*
                </label>
                <input
                  type="text"
                  className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black italic"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Body;
