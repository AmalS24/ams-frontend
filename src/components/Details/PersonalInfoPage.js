import React from "react";
import { Link } from "react-router-dom";

function PersonalInfoPage() {  
  return (
    <div className="w-screen h-full bg-transparent ">
      <form
        action=""
        className="w-200 flex items-center justify-center mx-auto mt-4 left-10 h-99 rounded-sm bg-white"
      >
        <input type="text" className="w-98 h-12 text-xl bg-gray-300 rounded-full" />
      </form>
    </div>
  );
}

    
export default PersonalInfoPage;
