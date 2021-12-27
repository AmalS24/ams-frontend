import React from "react";
import { Link } from "react-router-dom";

const ParentInfoForm = () => {
  var hide = true;
  function waitingList() {
    var sel = document.getElementById("branch").value;
    var akn = document.getElementById("box");
    var val = -1;
    switch (sel) {
      case "Computer Science":
        hide = false;
        val = 1;
        break;
      case "Electical And Electronics":
        hide = false;
        val = 2;
        break;
      case "Electronics And Communications":
        hide = false;
        val = 3;
        break;
      case "Mechanical":  
        hide = true;
        break;
      case "" : val = 0; 
    }
    if (val > 0) {
      akn.value = "You are in waiting Position : " + val;
    }
    else if(val == 0)
    {
        akn.value = "Select Branch"
    }
    else
    {
        akn.value = "Seat Reserved Successfully";
    }
  }
  return (
    <div className="w-screen h-auto p-4 md:pt-1 sm:px-24 md:px-10 lg:px-44 xl:px-72 2xl:px-96 ">
      <form className="w-auto space-y-6 h-auto rounded-md px-2 py-8 md:p-5  bg-white">
        <p className="text-center text-2xl sm:text-3xl font-semibold uppercase">
          Parental details
        </p>
        <div className="md:flex">
          <div className="w-full h-auto px-3 space-y-2">
            <p className="text-xl ml-4 mt-2">Father's Name*</p>
            <input
              type="text"
              className="h-10 pl-4 text-xl italic w-full border-2 border-black focus:outline-none bg-gray-100 focus:border-red-600 rounded-full"
            />
            <p className="text-xl ml-4 mt-2">Father's Occupation*</p>
            <input
              type="text"
              className="h-10 pl-4 text-xl italic w-full border-2 border-black focus:outline-none bg-gray-100 focus:border-red-600 rounded-full"
            />
            <p className="text-xl ml-4 mt-2">Father's Phone*</p>
            <input
              type="tel"
              className="h-10 pl-4 text-xl italic w-full border-2 border-black focus:outline-none bg-gray-100 focus:border-red-600 rounded-full"
              maxLength="10"
            />
          </div>
          <div className="w-full h-auto px-3 space-y-2">
            <div className="w-full bg-gray-600 rounded-xl h-1 my-4 md:hidden"></div>
            <p className="text-xl ml-4 mt-2">Mother's Name*</p>
            <input
              type="text"
              className="h-10 pl-4 text-xl italic w-full border-2 border-black focus:outline-none bg-gray-100 focus:border-red-600 rounded-full"
            />
            <p className="text-xl ml-4 mt-2">Mother's Occupation*</p>
            <input
              type="text"
              className="h-10 pl-4 text-xl italic w-full border-2 border-black focus:outline-none bg-gray-100 focus:border-red-600 rounded-full"
            />
            <p className="text-xl ml-4 mt-2">Mother's Phone*</p>
            <input
              type="tel"
              className="h-10 pl-4 text-xl italic w-full border-2 border-black focus:outline-none bg-gray-100 focus:border-red-600 rounded-full"
              maxLength="10"
            />
          </div>
        </div>
        <div className="md:flex ">
          <div className="w-full h-auto px-3 space-y-2 ">
            <div className="bg-gray-600 w-full rounded-xl h-1 my-4 md:hidden"></div>
            <p className="text-xl ml-4 mt-2">Name of NRI Sponser</p>
            <input
              type="text"
              className="h-10 pl-4 text-xl italic w-full border-2 border-black focus:outline-none bg-gray-100 focus:border-red-600 rounded-full"
            />
            <p className="text-xl ml-4 mt-2">Relation with Sponser</p>
            <input
              type="text"
              className="h-10 pl-4 text-xl italic w-full border-2 border-black focus:outline-none bg-gray-100 focus:border-red-600 rounded-full"
            />
          </div>
          <div className="w-full h-auto px-3">
            <div className="bg-gray-600 w-full rounded-xl h-1 my-4 md:hidden"></div>
            <p className="text-center text-xl font-semibold underline">
              Branch Preference
            </p>
            {/* <p className="text-xl">Select Branch*</p> */}
            <select
              name="branch"
              className=" h-10 px-1 sm:px-4 mt-4 focus:outline-none focus:border-red-600 bg-white md:px-3 text-lg italic w-full border-2 border-black rounded-full"
              id="branch"
              required="true"
              onChange={waitingList}
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

            <input
              id="box"
              disabled="true"
              type="text"
              defaultValue={"Select Branch"}
              className="w-full focus:outline-none text-red-600 italic border-2 text-xl py-3 bg-red-100 border-red-600 h-auto mt-8 px-4 rounded-xl"
            ></input>
          </div>
        </div>
        <div className="w-full pt-2 px-5 flex justify-between">
          <Link
            to="/"
            className="h-10  rounded-full w-20 text-lg flex items-center justify-center 
                    cursor-pointer bg-red-600 text-white"
          >
            Back
          </Link>
          <Link
            to=""
            className="h-10 focus:rounded-full rounded-full w-32 text-lg flex items-center justify-center 
                    cursor-pointer bg-red-600 text-white"
          >
            Save & Next
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ParentInfoForm;
