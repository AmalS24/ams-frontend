import React from "react";
import TitleBar from "./TitleBar";
import { Link } from "react-router-dom";

function Sample() {
  function branchAlert() {
    var branch = document.getElementById("branch").value;
    if(branch === '')
    {
      window.alert("NO branch selected!");
    }
    else
    {
      window.alert("Current selected branch: [" + branch + "] ,Proceed ?");
    }
    
  }
  return (
    <div className="w-screen overflow-x-hidden h-screen bg-shark-500">
      <TitleBar />
      <div className="w-screen h-auto xs:px-3 pt-4 pb-14 sm:px-14 bg-shark-500">
        <div className="xs:w-full sm:px-6 space-y-6 xs:h-full xs:rounded-md xs:flex flex-col items-center pb-8 bg-white">
          <p className="text-center xs:text-2xl xs:mt-4 font-semibold uppercase">
            Parental details
          </p>
          <div className="xs:w-full  xs:h-auto px-3 space-y-2">
            <p className="xs:text-xl xs:ml-4 xs:mt-2">Father's Name*</p>
            <input
              type="text"
              className="xs:h-11 pl-4 text-xl italic xs:w-full border-2 border-black focus:outline-none bg-gray-100 focus:border-red-600 rounded-full"
            />
            <p className="xs:text-xl xs:ml-4 xs:mt-2">Father's Occupation*</p>
            <input
              type="text"
              className="xs:h-11 pl-4 text-xl italic xs:w-full border-2 border-black focus:outline-none bg-gray-100 focus:border-red-600 rounded-full"
            />
            <p className="xs:text-xl xs:ml-4 xs:mt-2">Father's Phone*</p>
            <input
              type="tel"
              className="xs:h-11 pl-4 text-xl italic xs:w-full border-2 border-black focus:outline-none bg-gray-100 focus:border-red-600 rounded-full"
              maxLength='10'
            />
          </div>
          <div className="xs:w-full  xs:h-auto px-3 space-y-2">
            <div className="bg-gray-600 w-full rounded-xl h-1 my-4 xl:hidden"></div>
            <p className="xs:text-xl xs:ml-4 xs:mt-2">Mother's Name*</p>
            <input
              type="text"
              className="xs:h-11 pl-4 text-xl italic xs:w-full border-2 border-black focus:outline-none bg-gray-100 focus:border-red-600 rounded-full"
            />
            <p className="xs:text-xl xs:ml-4 xs:mt-2">Mother's Occupation*</p>
            <input
              type="text"
              className="xs:h-11 pl-4 text-xl italic xs:w-full border-2 border-black focus:outline-none bg-gray-100 focus:border-red-600 rounded-full"
            />
            <p className="xs:text-xl xs:ml-4 xs:mt-2">Mother's Phone*</p>
            <input
              type="tel"
              className="xs:h-11 pl-4 text-xl italic xs:w-full border-2 border-black focus:outline-none bg-gray-100 focus:border-red-600 rounded-full"
              maxLength='10' 
            />
          </div>
          <div className="xs:w-full  xs:h-auto px-3 space-y-2 ">
            <div className="bg-gray-600 w-full rounded-xl h-1 my-4 xl:hidden"></div>
            <p className="xs:text-xl xs:ml-4 xs:mt-2">Name of NRI Sponser</p>
            <input
              type="text"
              className="xs:h-11 pl-4 text-xl italic xs:w-full border-2 border-black focus:outline-none bg-gray-100 focus:border-red-600 rounded-full"
            />
            <p className="xs:text-xl xs:ml-4 xs:mt-2">Relation with Sponser</p>
            <input
              type="text"
              className="xs:h-11 pl-4 text-xl italic xs:w-full border-2 border-black focus:outline-none bg-gray-100 focus:border-red-600 rounded-full"
              />

              
          </div>
          <div className="xs:w-full xs:flex flex-col xs:items-center xs:justify-center xs:h-auto px-3 space-y-5">
            <div className="bg-gray-600 w-full rounded-xl h-1 my-4 xl:hidden"></div>
            <p className="text-center xs:text-2xl font-semibold underline">
              Branch Preference
            </p>
            <p className="xs:text-xl xs:ml-4 xs:mt-6">Select Branch*</p>
            <select
              name="branch"
              className=" xs:h-11 pl-3 text-lg italic xs:w-full border-2 border-black rounded-full"
              id="branch"
              required="true"
            >
              <option value=""></option>
              <option value="Computer Science">Computer Science</option>
              <option value="Electical And Electronics">
                Electical And Electronics
              </option>
              <option value="Electronics And Communications">
                Electronics And Communications
              </option>
              <option value="Mechanical">Mechanical</option>
              <option value="Civil">Civil</option>
            </select>
            <div
              className="h-10  rounded-full w-36 text-lg flex items-center justify-center 
            cursor-pointer bg-red-600 text-white"
              onClick={branchAlert}
            >
              Check Status
            </div>
            <div
              className="xs:mx-3 xs:w-full flex flex-col font-semibold
             pt-2 items-center xs:h-44 border-2 text-center xs:text-xl
              border-black rounded-xl bg-red-200 text-red-600"
            >
              <p>Branch: cse</p>
              <p>Total Seats Available: 69</p>
              <p>Currently registered : 69</p>
              <p>Your Status : waiting</p>
              <p>Waiting position : 4</p>
            </div>
            <div className="xs:w-full xs:pt-6 xs:flex xs:justify-between">
              <Link to='/' className="h-10  rounded-full w-20 text-lg flex items-center justify-center 
            cursor-pointer border-2 bg-red-600 text-white">Back</Link>
               <Link to='' className="h-10 focus:rounded-full rounded-full w-32 text-lg flex items-center justify-center 
            cursor-pointer border-2 bg-red-600 text-white">Save & Next</Link>
               {/* <p className="h-10  rounded-full w-20 text-lg flex items-center justify-center 
            cursor-pointer border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">Next</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sample;
