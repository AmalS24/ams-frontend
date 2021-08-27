import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-screen h-58 flex flex-col items-center  justify-center text-gray-100 bg-gray-800">
      <p className="text-2xl text-cene font-light">Copyright © 2021 MITS-AMS</p>
      <p className="text-2xl text-cene font-light">Support | 000-000-000</p>
      <a href="www.mgmits.ac.in" className="text-2xl font-light">www.mgmits.ac.in</a>
    </div>
  );
}

export default Footer;
