import React from "react";
import TitleBar from "./TitleBar";
import PersonalInfoPage from "./PersonalInfoPage";

function PaymentInfoPage() {
  return (
    <div className="w-screen h-screen  bg-trout-600 ">
      <TitleBar />
      <form
        action=""
        className="w-200 flex flex-col items-center py-3 space-y-2 justify-start mx-auto  left-10 h-99 rounded-sm bg-white"
      >
        
      <div className="w-full h-32 pl-4  space-x-16 bg-gray-400">
        <p className="text-xl">Do you want Bus Facility ?</p>
        <div className="flex space-x-16 w-auto h-8">
        <input type="radio" className='w-5 h-5' id="html" name="fav_language" value="HTML" />
        <p>yes</p>
        <input type="radio" id="html" name="fav_language" value="HTML"/>
        <p>no</p>
        </div>
        
      </div>
      <div className="w-full h-72 bg-gray-400"></div>
      <div className="w-full h-52 bg-gray-400"></div>
      </form>
      {/* <form
        action=""
        className="w-200 flex items-center justify-center mx-auto mt-4 left-10 h-99 rounded-sm bg-white"
      >
        <div>
        <h1 className="text-2xl mx-6 ">UPLOAD TRANSACTION DETAILS</h1>
        <input
          type="file"
          className="bg-gray-300 justify center"
        />
        </div>
        <div>
        <h1 className="text-2xl mx-6 mt-10">UPLOAD PHOTO</h1>
        <input
          type="file"
          className="bg-gray-300 justify center"
        />
        </div>
      </form> */}
    </div>
  );
}

export default PaymentInfoPage;
