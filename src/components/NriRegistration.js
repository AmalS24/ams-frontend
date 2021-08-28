import { Link } from "react-router-dom";
import React from "react";
import "../index.css";

function NriRegistration() {
  return (
     <div className="flex items-center justify-center w-screen h-screen ">
       <div className="grid grid-cols-3 overflow-hidden card bg-gray-300 ">
        <div className="relative flex items-center justify-center w-full h-full bg-red-600">
          <div
            className="absolute flex mx-auto items-center
         justify-center w-36 h-36 rounded-full text-3xl 
         font-bold text-white border-4 bg-transparent
         shadow-2xl"
          >
            NRI
          </div>
        </div>
        <div className="col-span-2 rounded-br-md rounded-tr-md shadow-xl bg-gray-100 ">
          <div className="w-full ">
            <form action="" className="bg-transparent py-10 ml-10 mt-14 mr-10">
              <div className="py-1">
                <label class=" uppercase  px-6" for="email">
                  Email
                </label>
              </div>
              <div className="flex">
                <input
                  className="input-feed  w-4/5"
                  id="email"
                  type="email"
                  placeholder="Email-ID"
                ></input>
                <button className="ml-4 btn-2  shadow-lg py-3 px-6">
                  Verify
                </button>
              </div>
              <p className="ml-6 py-3 italic text-green-600">
                Verification successfull
              </p>
              <div className="flex uppercase py-1 px-6 mt-5">
                <label className="" for="name">
                  Name
                </label>
                <label class="px-70" for="mobile">
                  Mobile
                </label>
              </div>
              <div className="flex">
                <input
                  className="input-feed italic  w-4/5"
                  id="name"
                  type="text"
                  placeholder="Full Name"
                ></input>
                <input
                  className="input-feed italic ml-3 w-3/5"
                  id="mobile"
                  type="text"
                  placeholder="Mobile-No:(optional)"
                ></input>
              </div>
              <p className="ml-6 py-3 italic focus:bg-transparent text-red-600">
                please provide a valid 10-digit mobile number
              </p>
              <div className="flex items-center justify-center">
                <button className="px-8 shadow-lg py-4 mt-14 btn-2">
                  Register
                </button>
                <Link className="px-8 shadow-2xl py-4 mt-14 ml-20 btn">
                  Sign In
                </Link>
              </div>
              <div className="flex items-center justify-center mt-8">
                Already Registered ? Try Signing In
              </div>
            </form>
          </div>
        </div>
       </div>
     </div>
  );
}

export default NriRegistration;
