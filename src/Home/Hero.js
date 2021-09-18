import React from "react";

function Hero() {
  return (
    <div className="w-full h-full flex xl:flex-row  flex-col items-center justify-between mt-20  bg-white">
      <div className="xl:ml-10  xl:h-screen bg-transparent rounded-xl relative flex justify-center">
        {/* <div className="absolute h-8 w-8 ml-70 rounded-full bg-red-600  animate-pulse"></div> */}
        <div className="mb-40 rounded-full bg-gray-200 h-64 w-64  flex items-center justify-center shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="red"
            class="bi bi-check2-circle"
            viewBox="0 0 16 16"
            className="w-40 h-40"
          >
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
          </svg>
        </div>
        <div className="absolute h-full xl:flex flex-col justify-center items-center ">
          <p className="text-4xl xl:mt-16 mt-74 p-5 flex  justify-center uppercase">
            Verification
          </p>
          <p className="mx-10 text-center xl:flex text-xl font-light text-gray-600 hidden">
            Provide a valid email-ID followed by a mobile number and verify it
            then click on register
          </p>
        </div>
      </div>

      <div className="xl:ml-10  xl:h-screen bg-transparent rounded-xl relative flex justify-center">
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
              stroke-width="1.2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div className="absolute h-full xl:flex flex-col justify-center items-center ">
          <p className="text-4xl xl:mt-21 mt-74 p-5 flex  justify-center uppercase">
            SIgn-UP
          </p>
          <p className="mx-10 text-center xl:flex text-xl font-light text-gray-600 hidden">
            Login to your account with the username and password send to your
            provided email-ID
          </p>
        </div>
      </div>

      <div className="xl:ml-10  xl:h-screen bg-transparent rounded-xl relative flex justify-center">
        {/* <div className="absolute h-6 w-6 ml-70 rounded-full bg-green-600 animate-ping"></div> */}
        <div className="mb-40 rounded-full bg-gray-200 h-64 w-64  flex items-center justify-center shadow-xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi w-32 h-32 bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
        </div>
        <div className="absolute h-full xl:flex flex-col justify-center items-center ">
          <p className="text-4xl xl:mt-10 mt-72 p-5 flex  justify-center uppercase">
            details
          </p>
          <p className="mx-14 text-center xl:flex text-xl font-light text-gray-600 hidden">
            Let us know you better ,kindly fill out the form provided to you
          </p>
        </div>
      </div>

      <div className="xl:ml-10 xl:mr-10    xl:h-screen bg-transparent rounded-xl relative flex justify-center">
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
              stroke-width="1.2"
              d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div className="absolute h-full xl:flex flex-col justify-center items-center ">
          <p className="text-4xl xl:mt-16 mt-74 p-5 flex  justify-center uppercase">
            payment
          </p>
          <p className="mx-10 text-center xl:flex text-xl font-light text-gray-600 hidden">
            Complete the payment and you are all set(This part is excluded for
            Merit students)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
