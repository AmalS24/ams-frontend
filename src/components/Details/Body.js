import React from "react";
import { useState } from "react";

const Body = () => {
  const [ImagePreview, setImagePreview] = useState(null);
  const [InvalidFormat, setInvalidFormat] = useState(false);

  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/jpg", "image/jpeg" ,"image/png"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      setInvalidFormat(false);
      let reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setInvalidFormat(true);
    }
  };

  return (
    <div className="w-full h-auto pt-4 px-3 lg:px-30 xl:px-56">
      <form
        action=""
        className="w-auto font-montserrat sm rounded-md h-auto bg-gray-300 p-4"
      >
        <div className="w-full h-auto  flex flex-col md:flex-row ">
          <div className="md:w-1/3 h-auto px-3 py-4 flex flex-col space-y-1 ">
            {/*Name and DoB*/}
            <label htmlFor="" className="ml-3 text-md">
              Name*
            </label>
            <input
              type="text"
              className="w-full h-10 rounded-full px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
            />
            <label htmlFor="" className="ml-3 text-md">
              Date of Birth*
            </label>
            <input
              type="date"
              className="w-full h-10 rounded-full px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
            />
          </div>
          <div className="md:w-1/3 h-auto  px-3 py-4 flex flex-col">
            <label htmlFor="" className="ml-3 text-md">
              Photo*
            </label>
            <input
              onChange={handleImageChange}
              type="file"
              className="w-full mt-1 h-10 rounded-full px-4 text-lg bg-white border-2 border-black "
            />
            {InvalidFormat && (
              <p className="ml-3 text-red-700 font-mono text-center text-md font-bold italic">
                Unsupported Format
              </p>
            )}
          </div>
          <div className="md:w-1/3 p-4 h-auto">
            <div className="w-auto h-auto rounded-lg p-2 space-y-3 border-3 bg-white border-black">
              {(!ImagePreview || InvalidFormat) ? (
                <>
                  <p className="text-center h-30 font-comic font-bold">
                    Size:30-80kb<br />
                    Resolution: 600x800<br />
                    <u>Supported formats</u><br /> 
                    jpg,jpeg,png
                  </p>
                </>
              ) : (
                <img className="object-cover bg-black" src={ImagePreview}></img>
              )}
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col md:flex-row ">
          {/* address */}
          <div className="md:w-1/2 h-auto px-3 py-4 flex flex-col space-y-2 ">
            {/* housename
              city  district
              state pincode
              contact no1 contact no2 */}

            <label htmlFor="" className="ml-3 text-md">
              Contact Address*
            </label>
            <input
              type="text"
              className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black "
            />
            <div className="w-full md:flex space-y-1 md:space-y-0 md:space-x-2">
              <input
                type="text"
                className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black "
              />
              <input
                type="text"
                className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black "
              />
            </div>
            <div className="w-full md:flex  space-y-1 md:space-y-0 md:space-x-2">
              <input
                type="text"
                className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black "
              />
              <input
                type="text"
                className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black "
              />
            </div>
            <div className="space-x-3 ml-3 flex items-center pr-3">
              <input type="checkbox" className="w-4 h-4" />
              <p className="">Use this as Permanent Address</p>
            </div>
          </div>
          <div className="md:w-1/2 h-auto px-3 py-4 flex flex-col space-y-2 ">
            {/* Permannet Address */}
            <label htmlFor="" className="ml-3 text-md">
              Permanent Address*
            </label>

            <input
              type="text"
              className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black "
            />
            <div className="w-full md:flex space-y-1 md:space-y-0 md:space-x-2">
              <input
                type="text"
                className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black "
              />
              <input
                type="text"
                className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black "
              />
            </div>
            <div className="w-full md:flex  space-y-1 md:space-y-0 md:space-x-2">
              <input
                type="text"
                className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black "
              />
              <input
                type="text"
                className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black "
              />
            </div>
            <div className="w-full md:flex space-y-1 md:space-y-0 md:space-x-2">
              <div className="md:w-1/2">
                <label htmlFor="" className="ml-3 text-md">
                  Contact no1*
                </label>
                <input
                  type="text"
                  className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black "
                />
              </div>
              <div className="md:w-1/2">
                <label htmlFor="" className="ml-3 text-md">
                  Contact No2*
                </label>
                <input
                  type="text"
                  className="w-full h-10 rounded-full px-4 text-lg bg-white border-2 border-black "
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Body;
