import React from "react";


function Backdrop(props) {
  return (
    <div
      data-aos="fade-in"
      className="fixed top-0 z-10 left-0 w-full h-full bg-trout-900 "
      onClick={props.onClick}
    ></div>
  );
}

export default Backdrop;
