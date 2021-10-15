import React from "react";

const Hero = () => {
  return (
    <div className="flex w-screen bg-gray-300 overflow-hidden h-4/5">
      <div className=" w-3/5 h-full relative text-center py-36 bg-gray-300">
        <div
          data-aos="fade-right"
          className="  w-52 h-52 flex items-center justify-center shadow-xl absolute top-12 right-97.5 bg-white"
        >
          1
        </div>
        <div
          data-aos="fade-left"
          className=" w-70 h-48 shadow-xl items-center justify-center flex absolute top-12 right-40 bg-white"
        >
          2
        </div>
        <div
          data-aos="fade-up"
          className=" w-52 h-72 flex items-center justify-center shadow-xl absolute bottom-10 right-40 animate-fadeIn bg-white"
        >
          3
        </div>
        <div
          data-aos="fade-right"
          className=" w-70 h-70 flex items-center justify-center shadow-xl absolute bottom-10 right-96 bg-white "
        >
          4
        </div>
      </div>

      <div
        data-aos="zoom-in"
        className="w-3/5 tracking-tighter text-center space-y-8 px-36 py-24  h-full bg-gray-200"
      >
        <div className="flex space-x-6 h-24 items-center  flex-row border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#e60023"
            class="w-20 animate-spin-slow h-20 bi bi-gear-wide-connected"
            viewBox="0 0 16 16"
          >
            <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
          </svg>
          <p className="text-5xl tracking-wider ">How it Works..? </p>
        </div>
        <p className="text-5xl">1.Registration</p>
        <p className="text-5xl">2.Login</p>
        <p className="text-5xl">3.Details</p>
        <p className="text-5xl">4.Payment</p>
      </div>
    </div>
  );
};

export default Hero;
