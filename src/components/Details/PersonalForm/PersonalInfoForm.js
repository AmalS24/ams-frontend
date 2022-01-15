import React from "react";
import { Link } from "react-router-dom";

const PersonalInfoForm = () => {
  return (
    <div className="w-screen h-auto p-4 md:pt-1 sm:px-24 md:px-10 lg:px-44 xl:px-72 2xl:px-96 ">
      <form className="w-auto space-y-6 h-auto rounded-md px-2 py-8 md:p-5  bg-white">
      <h1 className="text-center text-2xl py-3 uppercase">Personal Info</h1>
        <div className="w-full h-full flex flex-col mt-14">
          <div className="w-full h-150 flex flex-col space-y-2">
            <div className="w-full h-70 bg-gray-100 grid grid-cols-3">
              <div className="h-full ">
                <div className="h-full py-1 flex space-y-2 flex-col bg-transparent">
                  <label htmlFor="" className="text-xl ml-8">
                    Name*
                  </label>
                  <input
                    type="text"
                    className="w-60 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
                    placeholder="first name"
                    id="fname"
                  />
                  <label htmlFor="" className="text-xl ml-8">
                    Date of Birth*
                  </label>
                  <input
                    type="date"
                    className="w-60 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
                    id="dob"
                  />
                  <label htmlFor="" className="text-xl ml-8">
                    Blood Group*
                  </label>
                  <input
                    type="text"
                    className="w-60 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
                    placeholder="eg: O+,A+,AB..."
                    id="bloodgroup"
                  />
                </div>
              </div>
              <div className="h-full">
                <div className="h-full py-1 flex space-y-2 flex-col bg-transparent">
                  {/* <label htmlFor="" className="text-xl ml-8">
                    Name*
                  </label> */}
                  <input
                    type="text"
                    className="w-60 h-10 ml-4 pl-4 mt-9 text-lg italic required rounded-full border-2 border-black "
                    placeholder="middle name (optional)"
                    id="mname"
                  />
                  <label htmlFor="" className="text-xl ml-8">
                    Gender*
                  </label>
                  <select
                    className=" px-4 ml-4 w-60 h-10 text-md italic focus:outline-none border-2 border-black rounded-full"
                    id="gender"
                    required
                  >
                    <option value="CSE">Male</option>
                    <option value="EEE">Female</option>
                    <option value="ECE">Other</option>
                  </select>
                  <label htmlFor="" className="text-xl ml-8">
                    Aadhaar No*
                  </label>
                  <input
                    type="text"
                    className="w-60 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
                    placeholder="xxxx-xxxx-xxxx"
                    id="aadhaar"
                  />
                </div>
              </div>
              <div className="h-full">
                <div className="h-full py-1 flex space-y-2 flex-col bg-transparent">
                  {/* <label htmlFor="" className="text-xl ml-8">
                    Name*
                  </label> */}
                  <input
                    type="text"
                    className="w-60 h-10 ml-4 pl-4 mt-9 text-lg italic required rounded-full border-2 border-black "
                    placeholder="last name"
                    id="lname"
                  />
                  <label htmlFor="" className="text-xl ml-8">
                    Mother Toung*
                  </label>
                  <input
                    type="text"
                    className="w-60 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
                    id="motherToung"
                  />
                  {/* <label htmlFor="" className="text-xl ml-8">
                    Phone*
                  </label>
                  <input
                    type="text"
                    className="w-72 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
                  /> */}
                </div>
              </div>
            </div>
            <div className="w-full h-72 bg-gray-100">
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-3">
                  <label htmlFor="" className="text-2xl ml-8">
                    Parmanent Address*
                  </label>
                </div>
                <div className="">
                  <input
                    type="text"
                    className="w-60 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
                    placeholder="country"
                    id="pCountry"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    className="w-60 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
                    placeholder="state"
                    id="pState"
                  />
                </div>
                <div class="">
                  <input
                    type="text"
                    className="w-60 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
                    placeholder="city"
                    id="pCity"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="text"
                    className="w-60 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
                    placeholder="pin"
                    id="pPin"
                  />
                </div>
                <div className="col-span-2 mt-5">
                  <input
                    type="text"
                    className="w-97.6 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
                    placeholder="road name"
                    id="pRoadname"
                  />
                </div>
                <div className="col-span-3 mt-5">
                  <input
                    type="text"
                    className="w-100 h-10 ml-4 mr-4 pl-4 text-lg italic required rounded-full border-2 border-black "
                    placeholder="house name"
                    id="pHousename"
                  />
                </div>
                <div className="col-span-3">
                  <input type="checkbox" className="ml-5" id="checkBox" />
                  Use this as contact address
                </div>
              </div>
            </div>
            <div className="w-full h-70 bg-gray-100">
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-3">
                  <label htmlFor="" className="text-2xl ml-8">
                    Contact Address*
                  </label>
                </div>
                <div className="">
                  <input
                    type="text"
                    className="w-60 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
                    placeholder="country"
                    id="cCountry"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    className="w-60 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
                    placeholder="state"
                    id="cState"
                  />
                </div>
                <div class="">
                  <input
                    type="text"
                    className="w-60 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
                    placeholder="city"
                    id="cCity"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="text"
                    className="w-60 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
                    placeholder="pin"
                    id="cPin"
                  />
                </div>
                <div className="col-span-2 mt-5">
                  <input
                    type="text"
                    className="w-97.6 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
                    placeholder="road name"
                    id="cRoadname"
                  />
                </div>
                <div className="col-span-3 mt-5">
                  <input
                    type="text"
                    className="w-100 h-10 ml-4 mr-4 pl-4 text-lg italic required rounded-full border-2 border-black "
                    placeholder="house name"
                    id="cHousename"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-between h-20">
            <Link className="h-10 w-30 flex items-center justify-center rounded-full border-2 text-torch-red-500 text-xl border-torch-red-500 hover:text-white hover:bg-torch-red-500">
              Back
            </Link>
            <div className="w-94 flex px-5 items-center justify-between h-full">
              <Link
                to="/"
                className="h-10 w-30 ml-14 flex items-center justify-center rounded-full border-2 text-torch-red-500 text-xl border-torch-red-500 hover:text-white hover:bg-torch-red-500"
              >
                Save
              </Link>
              <Link className="h-10 w-30 flex items-center justify-center rounded-full border-2 text-torch-red-500 text-xl border-torch-red-500 hover:text-white hover:bg-torch-red-500">
                Next
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
