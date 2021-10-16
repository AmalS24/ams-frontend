import React from "react";
import lock from "../Icons/lock.svg";
import rupee from "../Icons/rupee.svg";
import info from "../Icons/info.svg";
import reg from "../Icons/reg.svg";

const Check = () => {
    return (
        <div className="h-98.5 relative  bg-gray-300">
         <div
          data-aos="fade-right"
          className="  w-52 h-52 flex items-center justify-center shadow-xl absolute top-12 right-97.5 bg-white"
        >
          <img src={reg} alt="" className="" />
        </div>
        <div
          data-aos="fade-left"
          className=" w-70 h-48 shadow-xl items-center justify-center flex absolute top-12 right-40 bg-white"
        >
          <img src={lock} alt="" className="" />
        </div>
        <div
          data-aos="fade-up"
          className=" w-52 h-72 flex items-center  justify-center shadow-xl absolute bottom-10 right-40 animate-fadeIn bg-white"
        >
          <img src={rupee} alt="" className="" />
        </div>
        <div
          data-aos="fade-right"
          className=" w-70 h-70 flex items-center justify-center shadow-xl absolute bottom-10 right-96 bg-white "
        >
          <img src={info} alt="" className="" />
        </div>
        </div>
    )
}

export default Check
