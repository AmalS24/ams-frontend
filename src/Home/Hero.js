import React from "react";


function Hero() {
  return (
    <div className="w-full h-full flex lg:flex-row  flex-col items-center justify-between mt-20  bg-white">

      <div className="lg:ml-10  lg:h-screen bg-transparent rounded-xl relative flex justify-center">
        {/* <div className="absolute h-8 w-8 ml-70 rounded-full bg-red-600  animate-pulse"></div> */}
        <div className="mb-40 rounded-full bg-gray-200 h-64 w-64  flex items-center justify-center shadow-xl">
          <svg
            class="w-40 h-40"
            fill="none"
            stroke="red"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div className="absolute h-full lg:flex flex-col justify-center items-center ">
          <p className="text-4xl lg:mt-16 mt-74 p-5 flex  justify-center uppercase">
            Verification
          </p>
          <p className="mx-10 text-center lg:flex text-xl font-light text-gray-600 hidden">
            Provide a valid email-ID followed by a mobile number and verify it
            then click on register
          </p>
        </div>
      </div>

      <div className="lg:ml-10  lg:h-screen bg-transparent rounded-xl relative flex justify-center">
        {/* <div className="absolute h-6 w-6 ml-70 rounded-full bg-green-600 animate-ping"></div> */}
        <div className="mb-40 rounded-full bg-gray-200 h-64 w-64  flex items-center justify-center shadow-xl">
          <svg
            class="w-40 h-40"
            fill="none"
            stroke="red"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div className="absolute h-full lg:flex flex-col justify-center items-center ">
          <p className="text-4xl lg:mt-21 mt-74 p-5 flex  justify-center uppercase">
            SIgn-UP
          </p>
          <p className="mx-10 text-center lg:flex text-xl font-light text-gray-600 hidden">
            Login to your account with the username and password send to your
            provided email-ID
          </p>
        </div>
      </div>

      <div className="lg:ml-10  lg:h-screen bg-transparent rounded-xl relative flex justify-center">
        {/* <div className="absolute h-6 w-6 ml-70 rounded-full bg-green-600 animate-ping"></div> */}
        <div className="mb-40 rounded-full bg-gray-200 h-64 w-64  flex items-center justify-center shadow-xl">
          <svg
            class="w-40 h-40 "
            fill="none"
            stroke="red"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div className="absolute h-full lg:flex flex-col justify-center items-center ">
          <p className="text-4xl lg:mt-10 mt-72 p-5 flex  justify-center uppercase">
            details
          </p>
          <p className="mx-14 text-center lg:flex text-xl font-light text-gray-600 hidden">
            Let us know you better ,kindly fill out the form provided to you
          </p>
        </div>
      </div>

      <div className="lg:ml-10 lg:mr-10    lg:h-screen bg-transparent rounded-xl relative flex justify-center">
        {/* <div className="absolute h-6 w-6 ml-70 rounded-full bg-green-600 animate-ping"></div> */}
        <div className="mb-40 rounded-full bg-gray-200 h-64 w-64  flex items-center justify-center shadow-xl">
          <svg
            class="w-40 h-40"
            fill="none"
            stroke="red"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div className="absolute h-full lg:flex flex-col justify-center items-center ">
          <p className="text-4xl lg:mt-16 mt-74 p-5 flex  justify-center uppercase">
            payment
          </p>
          <p className="mx-10 text-center lg:flex text-xl font-light text-gray-600 hidden">
            Complete the payment and you are all set(This part is excluded for
            Merit students)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
