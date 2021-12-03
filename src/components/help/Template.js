import React from "react";
import reg from "./reg.svg";

function Template() {
    function rand(min,max)
    {
        return Math.floor(Math.random() * (max-min+1))+min;
    }

  return (
    <div className="w-screen h-screen overflow-scroll  flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-2xl xs:w-4/5 lg:w-3/5  h-auto mx-auto rounded-md ">
        <div className="w-full flex items-center justify-center py-4 h-auto rounded-tr-md bg-gray-300 rounded-tl-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="w-36 h-36"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
        </div>
        <div className="w-full space-y-2 h-auto sm:py-10 xs:py-8 rounded-br-md xs:px-10 sm:px-24 rounded-bl-md">
          <p className="text-center font-montserrat xs:text-2xl sm:text-3xl">
            H! there,
          </p>
          <p className="text-center text-xl font-montserrat">
            You have registered successfully
          </p>
          <p className="text-center text-xl font-light">
            Your Username: <b>{'NBT'+rand(0,9)+rand(0,9)+rand(0,9)+rand(0,9)}</b>
          </p>
          <p className="text-center text-xl font-light">
            Your Password: <b>{''+rand(0,9)+rand(0,9)+rand(0,9)+rand(0,9)+rand(0,9)+rand(0,9)}</b>
          </p>
          <p className="text-center text-xl font-light">
            Click here to sign-in
          </p>
        </div>
      </div>
    </div>
  );
}

export default Template;
