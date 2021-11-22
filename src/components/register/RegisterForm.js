import React from "react";
import { Link } from "react-router-dom";

function RegisterForm() {
  function addHyphen() {
    var val = document.getElementById("aadr");
    if (val.value != "") {
      val = val.value.split("-").join("");
      let finalVal = val.match(/.{1,4}/g).join("-");
      document.getElementById("aadr").value = finalVal;
    }
  }

  return (
    <div className="flex justify-center items-center xl:w-3/5 w-full">
      <form
        action=""
        className="flex flex-col  xs:w-74 sm:w-97.85 sm:h-98 h-full rounded-sm bg-white"
      >
        <h1 className="text-2xl text-center mb-2 sm:mb-1 sm:mt-2 sm:text-4xl sm:py-3 font-semibold mt-6 uppercase">
          Registration
        </h1>
        <div className="xs:h-9 sm:h-12 w-71  sm:w-97.5 sm:mb-1 sm:mx-10 sm:text-lg mx-2 flex justify-center items-center text-sm italic tracking-tight text-blue-700 bg-blue-100  text-center rounded-md">
          It looks like you've already registered try SignIn
        </div>
        {/* <div className="xs:h-9 sm:h-12 w-71  sm:w-97.5 sm:mb-1 sm:mx-10 sm:text-lg mx-2 flex justify-center items-center text-sm italic tracking-tight text-red-600 bg-red-100  text-center rounded-md">*Required field empty</div> */}
        {/* <div className="xs:h-2 sm:h-4 w-71  sm:w-97.5 sm:mb-1 sm:mx-10 sm:text-lg mx-2 flex justify-center items-center text-sm italic tracking-tight bg-transparent  text-center rounded-md"></div> */}
        {/* <div className="xs:h-9 sm:h-12 w-71  sm:w-97.5 sm:mb-1 sm:mx-10 sm:text-lg mx-2 flex justify-center items-center text-sm italic tracking-tight text-green-600 bg-teal-100  text-center rounded-md">Registration Successful, check your mail to Login</div> */}

        <div className="bg-transparent sm:flex sm:justify-between w-full">
          <label
            htmlFor="Name"
            className="text-md sm:font-normal sm:text-lg font-light mt-2 sm:mt-3 ml-6 sm:ml-10"
          >
            Name*
          </label>
          <label
            htmlFor="Name"
            className="text-md sm:font-normal xs:hidden sm:flex  text-lg font-light mt-3 mr-28"
          >
            Gender*
          </label>
        </div>
        <div className="sm:flex sm:px-6">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="mb-1  sm:mb-0 xs:h-11 sm:w-74 sm:ml-3 px-4 w-72 mx-2 italic text-md sm:text-lg focus:outline-none border-2 border-black rounded-full"
          />
          <label
            htmlFor="quota"
            className="text-md sm:font-normal sm:text-lg font-light sm:hidden sm:mt-3 ml-6 sm:ml-10"
          >
            Gender*
          </label>
          <select
            name="gender"
            className=" xs:h-11 sm:w-36 px-4 w-72 mx-2 italic text-md sm:text-lg focus:outline-none border-2 border-black rounded-full"
            id="gender"
            required="true"
          >
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <label
          htmlFor="email"
          className="text-md sm:font-normal sm:text-lg font-light mt-2 sm:mt-3 ml-6 sm:ml-10"
        >
          Email*
        </label>
        <input
          type="email"
          placeholder="Email-ID"
          required
          className="xs:h-11 sm:w-97.55 sm:text-lg sm:ml-8  px-4 w-72 ml-2  text-md italic focus:outline-none border-2 border-black rounded-full"
        />
        <div className="sm:flex ">
          <div className="xs:my-2 sm:w-3/5 sm:mt-4">
            <label
              htmlFor="aadhar"
              className="text-md  sm:font-normal sm:text-lg font-light mt-2 sm:mt-3 ml-6 sm:ml-11"
            >
              Aadhar No.
            </label>
            <input
              id="aadr"
              onKeyUp={addHyphen}
              maxLength="14"
              placeholder="xxxx-xxxx-xxxx"
              className="xs:h-11 sm:text-lg sm:w-64 sm:ml-8 sm:mr-5 sm:mb-3 px-4 w-72 mx-2 text-md italic focus:outline-none border-2 border-black rounded-full"
            />
            <label
              htmlFor="phone"
              className="text-md sm:font-normal sm:text-lg font-light mt-2  ml-6 sm:ml-11"
            >
              Phone
            </label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="xs:h-11 sm:text-lg  sm:w-64 sm:mx-8  px-4 w-72 mx-2 text-md italic focus:outline-none border-2 border-black rounded-full"
            />
          </div>
          <div className="sm:w-2/5 sm:mr-2 sm:mt-4">
            <label
              htmlFor="dob"
              className="text-md sm:font-normal sm:text-lg font-light mt-2 sm:mt-3 ml-6 sm:ml-4"
            >
              Date Of Birth*
            </label>
            <input
              type="date"
              required
              className="xs:h-11 sm:text-lg sm:w-48 sm:mx-0 sm:mb-3 px-4 w-72 mx-2 text-md italic focus:outline-none border-2 border-black rounded-full"
            />
            <label
              htmlFor="gender"
              className="text-md sm:font-normal sm:text-lg font-light mt-2 sm:mt-3 ml-6 sm:ml-4"
            >
              Quota*
            </label>
            <select
              name="quota"
              className="xs:h-11 sm:text-lg sm:w-48 sm:mx-0  px-4 w-72 mx-2 text-md italic focus:outline-none border-2 border-black rounded-full"
              id="quota"
              required
            >
              <option value=""></option>
              <option value="NRI">NRI</option>
              <option value="Merit">Merit</option>
              <option value="Managment">Management</option>
            </select>
          </div>
        </div>
        <div className="h-8 w-72 sm:w-97.75 sm:mr-24 sm:h-12 mt-4 mx-auto flex items-center justify-between   px-2 text-lg tracking-tighter">
          <button className=" sm:ml-6 sm:flex sm:items-center sm:w-30 sm:justify-center shadow-2xl sm:px-4 rounded-full sm:h-12 text-red-600  hover:text-purple-700 sm:border-2 border-red-600 sm:text-2xl sm:hover:text-white sm:hover:bg-red-600 ">
            Register
          </button>
          <div className="sm:flex flex-row sm:mt-6">
            <p className="sm:flex hidden text-xl font-light">
              Already Registered ? Try
            </p>
            <Link
              to="/login"
              className=" sm:ml-2 sm:text-xl text-red-600 hover:underline hover:text-purple-700"
            >
              Sign-In
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
