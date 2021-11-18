import React from "react";
import "./style.css"


export const Loginhelp = (props) => {
  return (
    <div
      className="modal font-light "
    >
      <div
        className="absolute  z-30 w-8 h-8 rounded-full bg-torch-red-500  
        font-extrabold transform rotate-45 text-white text-xl cursor-pointer -right-2 -top-2"
        onClick={props.onClick}
      >
        +
      </div>
      <div className="text-2xl  flex items-center justify-center">
        <p>
          After Registration we've send an email to your provided Email-ID which
          contains the credentials necessary for logging into your profile. In
          case you have never received our mail please check your spam folder as
          well. Otherwise contact us via Ph : 000-000-000
        </p>
      </div>
    </div>
  );
};
