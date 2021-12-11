import React from "react";
import { Link } from "react-router-dom";

function RegisterForm() {
  function addHyphen() {
    var val = document.getElementById("aadr");
    if (val.value !== "") {
      val = val.value.split("-").join("");
      let finalVal = val.match(/.{1,4}/g).join("-");
      document.getElementById("aadr").value = finalVal;
    }
  }

  return (
    <div className="xl:w-2/5  sm:my-0 h-auto mx-auto flex justify-center ">
      <form
        action=""
        className="w-auto mx-auto p-6 space-y-4  h-auto rounded-md bg-white"
      >
        <p className="text-center text-2xl sm:text-4xl sm:mt-3 uppercase font-semibold">
          Registration
        </p>
        {/* <div className="w-auto h-16 mx-3 bg-indigo-200 rounded-md"></div> */}
        <div className="sm:flex sm:space-x-2 justify-between w-full h-auto">
          <div className="w-auto flex flex-col h-full">
            <label htmlFor="" className="ml-4 text-lg">
              Name*
            </label>
            <input
              type="text"
              placeholder="First"
              required
              className="sm:h-10 h-11 w-72 sm:w-40 px-5  italic text-lg focus:outline-none border-2 border-black rounded-full"
            />
          </div>
          <div className="w-auto h-full mt-7">
            <input
              type="text"
              placeholder="Middle"
              className="sm:h-10 h-11 w-72 sm:w-36 px-5  italic text-lg focus:outline-none border-2 border-black rounded-full"
            />
          </div>
          <div className="w-auto h-full mt-7">
            <input
              type="text"
              placeholder="Last"
              required
              className="sm:h-10 h-11 w-72 sm:w-50 px-5  italic text-lg focus:outline-none border-2 border-black rounded-full"
            />
          </div>
        </div>
        <div className="sm:flex  justify-between w-full h-auto">
          <div className="w-auto sm:mb-0 mb-4 flex flex-col h-full">
            <label htmlFor="" className="ml-4 text-lg">
              Email*
            </label>
            <input
              type="text"
              placeholder="Email"
              required
              className="sm:h-10 h-11 w-72 sm:w-90 px-5  italic text-lg focus:outline-none border-2 border-black rounded-full"
            />
          </div>
          <div className="w-auto flex flex-col h-full">
            <label htmlFor="" className="ml-4 text-lg">
              Gender*
            </label>

            <select
              name="gender"
              className="sm:h-10 h-11 bg-white w-72 sm:w-40 px-5  italic text-lg focus:outline-none border-2 border-black rounded-full"
              id="gender"
              required="true"
            >
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>
        <div className="sm:flex justify-between w-full h-auto">
          <div className="w-auto sm:mb-0 mb-4 flex flex-col h-full">
            <label htmlFor="" className="ml-4 text-lg">
              Phone
            </label>
            <input
              type="tel"
              placeholder="Phone"
              maxLength={10}
              className="sm:h-10 h-11 w-72 sm:w-52 px-5  italic text-lg focus:outline-none border-2 border-black rounded-full"
            />
          </div>
          <div className="w-auto sm:mb-0 mb-4 flex flex-col h-full">
            <label htmlFor="" className="ml-4 text-lg">
              Quota*
            </label>

            <select
              name="quota"
              className="sm:h-10 h-11 bg-white w-72 sm:w-40 px-4  italic text-lg focus:outline-none border-2 border-black rounded-full"
              id="quota"
              required
            >
              <option value=""></option>
              <option value="NRI">NRI</option>
              <option value="Merit">Government</option>
              <option value="Managment">Management</option>
            </select>
          </div>
          <div className="w-auto flex flex-col h-full">
            <label htmlFor="" className="ml-4 text-lg">
              Program*
            </label>

            <select
              name="quota"
              className="sm:h-10 h-11 bg-white sm:w-30 px-4 w-72 italic text-lg focus:outline-none border-2 border-black rounded-full"
              id="quota"
              required
            >
              <option value=""></option>
              <option value="B-Tech">B-Tech</option>
              <option value="M-Tech">M-Tech</option>
            </select>
          </div>
        </div>
        <div className="sm:flex justify-between w-full h-auto">
          <div className="w-auto sm:mb-0 mb-4 flex flex-col h-full">
            <label htmlFor="" className="ml-4 text-lg">
              Aadhar No.
            </label>
            <input
              id="aadr"
              type="tel"
              placeholder="xxxx-xxxx-xxxx"
              onKeyUp={addHyphen}
              maxLength={14}
              required
              className="sm:h-10 h-11 w-72 sm:w-64 px-5  italic text-lg focus:outline-none border-2 border-black rounded-full"
            />
          </div>
          <div className="w-auto flex flex-col h-full">
            <label htmlFor="" className="ml-4 text-lg">
              Date of Birth*
            </label>
            <input
              type="date"
              placeholder="DOB"
              required
              className="sm:h-10 h-11 bg-white w-72 sm:w-52 px-5  italic text-lg focus:outline-none border-2 border-black rounded-full"
            />
          </div>
        </div>
        <div className="flex justify-between w-full h-auto">
          <div className="w-auto my-3 h-full">
          <button className=" flex items-center sm:w-30 w-24 justify-center shadow-2xl sm:px-4 rounded-full sm:h-12 h-10  sm:text-xl text-white bg-red-600 font-montserrat">
           Register       
            </button>
          </div>
          <div className="w-auto mt-4 h-full">
          <div className="sm:flex flex-row sm:mt-6">
           <p className="sm:flex hidden text-lg font-light">
             Already Registered ? Try
           </p>
           <Link
             to="/login"
             className="sm:ml-2 sm:text-xl text-red-600 hover:underline hover:text-purple-700"
           >
             Sign-In
          </Link>
       </div> 
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
