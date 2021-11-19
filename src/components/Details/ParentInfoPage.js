import React from "react";
import { Link } from "react-router-dom";

function ParentInfoPage() {
  return (
    <div className="w-screen h-full bg-transparent ">
      <form
        action=""
        className="w-200 flex flex-col items-center py-3 space-y-2 justify-start mx-auto  left-10 h-99 rounded-sm bg-white"
      >
        <h1 className="text-2xl underline uppercase mb-3 font-semibold">
          Parental Details
        </h1>
        <div className="w-11/12 grid grid-cols-3 mx-auto h-64">
          <div className="h-full py-1 flex space-y-2 flex-col bg-transparent">
            <label htmlFor="" className="text-xl ml-8">
              Father's Name*
            </label>
            <input
              type="text"
              className="w-72 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
            />
            <label htmlFor="" className="text-xl ml-8">
              Occupation*
            </label>
            <input
              type="text"
              className="w-72 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
            />
            <label htmlFor="" className="text-xl ml-8">
              Phone*
            </label>
            <input
              type="text"
              className="w-72 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
            />
          </div>
          <div className="h-full py-1 flex space-y-2 flex-col bg-transparent">
            <label htmlFor="" className="text-xl ml-8">
              Mother's Name*
            </label>
            <input
              type="text"
              className="w-72 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
            />
            <label htmlFor="" className="text-xl ml-8">
              Occupation*
            </label>
            <input
              type="text"
              className="w-72 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
            />
            <label htmlFor="" className="text-xl ml-8">
              Phone*
            </label>
            <input
              type="text"
              className="w-72 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
            />
          </div>
          <div className="h-full py-1 flex space-y-2 flex-col bg-transparent">
            <label htmlFor="" className="text-xl ml-8">
              Name of NRI Sponser
            </label>
            <input
              type="text"
              className="w-72 h-10 ml-4 pl-4 text-lg italic rounded-full border-2 border-black "
              placeholder='Not-Mandatory'
            />
            <label htmlFor="" className="text-xl ml-8">
              Relation with Sponser
            </label>
            <input
              type="text"
              className="w-72 h-10 ml-4 pl-4 text-lg italic required rounded-full border-2 border-black "
              placeholder="Not-Mandatory"
            />
            <label htmlFor="" className="text-xl ml-8">
              Annual Income*
            </label>
            <input
              type="text"
              className="w-72 h-10 ml-4 pl-4 text-lg required italic rounded-full border-2 border-black "
              placeholder='------------In-Rupees-----------'
            />
          </div>
        </div>
        <div className="w-11/12 flex flex-col mx-auto h-80">
          <div className="w-full grid grid-cols-3 h-4/5 ">
            <div className="col-span-2 grid grid-cols-2">
              <div className=" flex space-y-8 flex-col h-full">
                <h2 className="text-xl ml-8 underline font-bold">
                  Branch Preference
                </h2>
                <div className="flex space-x-2">
                  <label htmlFor="" className="text-xl ">
                    1.
                  </label>
                  <select
                    name="branch"
                    className=" px-4 w-72 h-10 text-md italic focus:outline-none border-2 border-black rounded-full"
                    id="branch"
                    required
                  >
                    <option value="CSE">Computer Science</option>
                    <option value="EEE">Electrical And Electronics</option>
                    <option value="ECE">Electronics And Communications</option>
                    <option value="MECH">Mechanical</option>
                    <option value="CIVIL">Civil</option>
                  </select>
                </div>
                <div className="flex space-x-2">
                  <label htmlFor="" className="text-xl ">
                    3.
                  </label>
                  <select
                    name="branch"
                    className=" px-4 w-72 h-10 text-md italic focus:outline-none border-2 border-black rounded-full"
                    id="branch"
                    required
                  >
                    <option value="CSE">Computer Science</option>
                    <option value="EEE">Electrical And Electronics</option>
                    <option value="ECE">Electronics And Communications</option>
                    <option value="MECH">Mechanical</option>
                    <option value="CIVIL">Civil</option>
                  </select>
                </div>
                <div className="flex ml-44 space-x-2">
                  <label htmlFor="" className="text-xl ">
                    5.
                  </label>
                  <select
                    name="branch"
                    className=" px-4 w-72 h-10 text-md italic focus:outline-none border-2 border-black rounded-full"
                    id="branch"
                    required
                  >
                    <option value="CSE">Computer Science</option>
                    <option value="EEE">Electrical And Electronics</option>
                    <option value="ECE">Electronics And Communications</option>
                    <option value="MECH">Mechanical</option>
                    <option value="CIVIL">Civil</option>
                  </select>
                </div>
              </div>
              <div className="flex space-y-8 flex-col h-full">
                <div className="flex pt-14 space-x-2">
                  <label htmlFor="" className="text-xl ">
                    2.
                  </label>
                  <select
                    name="branch"
                    className=" px-4 w-72 h-10 text-md italic focus:outline-none border-2 border-black rounded-full"
                    id="branch"
                    required
                  >
                    <option value="CSE">Computer Science</option>
                    <option value="EEE">Electrical And Electronics</option>
                    <option value="ECE">Electronics And Communications</option>
                    <option value="MECH">Mechanical</option>
                    <option value="CIVIL">Civil</option>
                  </select>
                </div>
                <div className="flex space-x-2">
                  <label htmlFor="" className="text-xl ">
                    4.
                  </label>
                  <select
                    name="branch"
                    className=" px-4 w-72 h-10 text-md italic focus:outline-none border-2 border-black rounded-full"
                    id="branch"
                    required
                  >
                    <option value="CSE">Computer Science</option>
                    <option value="EEE">Electrical And Electronics</option>
                    <option value="ECE">Electronics And Communications</option>
                    <option value="MECH">Mechanical</option>
                    <option value="CIVIL">Civil</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="h-full flex  space-y-8  flex-col">
              <h1 className="text-xl font-bold ml-6 underline ">
                Current Status
              </h1>
              <div className="w-80 mx-auto bg-red-50 h-40 flex items-center justify-center  rounded-xl border-2 border-black">
                <p className="text-xl text-center animate-pulse text-torch-red-500 italic">
                  We've received your request await for confirmation
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-between h-1/5">
            <Link className="h-11 w-30 flex items-center justify-center rounded-full border-2 text-torch-red-500 text-xl border-torch-red-500 hover:text-white hover:bg-torch-red-500">
              Back
            </Link>
            <div className="w-94 flex px-5 items-center justify-between h-full">
              <Link className="h-11 w-30 ml-14 flex items-center justify-center rounded-full border-2 text-torch-red-500 text-xl border-torch-red-500 hover:text-white hover:bg-torch-red-500">
                Save
              </Link>
              <Link className="h-11 w-30 flex items-center justify-center rounded-full border-2 text-torch-red-500 text-xl border-torch-red-500 hover:text-white hover:bg-torch-red-500">
                Next
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ParentInfoPage;
