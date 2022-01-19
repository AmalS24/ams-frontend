import React from "react";
import { useState } from "react";

const Body = () => {
  const dt = new Date();
  const [parentName, setparentName] = useState("");
  const [ImagePreview, setImagePreview] = useState(null);
  const [InvalidFormat, setInvalidFormat] = useState(false);
  const [Message, setMessage] = useState("");

  const removeImage = () => {
    document.getElementById("photo").value = null;
    setImagePreview(null);
  };

  const checkPhone = (e) => {
    const str = e.target.value;
    if (isNaN(str) || (str.length < 10 && str != "")) {
      setMessage("invalid");
    } else {
      setMessage("");
    }
  };

  const handleSubmit = (e) => {
    const isChecked = document.getElementById("check").checked;
    const submitBtn = document.getElementById("btn");
   
    submitBtn.disabled = true;
    submitBtn.className = "w-auto mt-8 h-auto cursor-not-allowed p-2 rounded-md bg-torch-red-600 opacity-40 text-white"
    if(isChecked)
    {
      submitBtn.disabled = false
      submitBtn.className = "w-auto mt-8 h-auto p-2 rounded-md bg-torch-red-600 text-white"
      submitBtn.onClick = () => {window.alert("Are you Sure ?")}
    }
    
  }

  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/jpg", "image/jpeg", "image/png"];
    // console.log(selected)
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
    <div className="w-full h-auto py-4 px-3 lg:px-30 xl:px-56">
      <form
      // onSubmit={handleSubmit}
        action=""
        className="w-auto font-montserrat space-y-4 sm rounded-lg  h-auto bg-gray-100 p-4"
      >
        <div className="w-full h-auto  flex flex-col md:flex-row ">
          <div className="md:w-1/3 h-auto px-3 py-4 flex flex-col space-y-2 ">
            {/*Name and DoB*/}
            <label htmlFor="" className="ml-3 text-md">
              Name*
            </label>
            <input
              type="text"
              className="w-full h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
            />
            <label htmlFor="" className="ml-3 text-md">
              Date of Birth*
            </label>
            <input
              type="date"
              className="w-full h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
            />
          </div>
          <div className="md:w-1/3 h-auto  px-3 py-4 flex flex-col space-y-2">
            <label htmlFor="" className="ml-3 text-md">
              Photo*
            </label>
            <input
              id="photo"
              onChange={handleImageChange}
              type="file"
              className="w-full mt-1 h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
            />
            {InvalidFormat && (
              <p className="ml-3 text-red-700 font-mono text-center text-md font-bold italic">
                Unsupported Format
              </p>
            )}
          </div>
          <div className="md:w-1/3 relative p-4 h-auto">
            {ImagePreview && (
              <div
                onClick={removeImage}
                className="w-8 flex items-center justify-center  h-8 right-8 absolute  text-white rounded-full cursor-pointer bg-torch-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-arrow-repeat"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                  <path
                    fill-rule="evenodd"
                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                  />
                </svg>
              </div>
            )}
            <div className="w-1/2 flex items-center mx-auto justify-center shadow-3xl rounded-md h-auto p-3 bg-white">
              {!ImagePreview || InvalidFormat ? (
                <>
                  <p className="text-center h-full font-comic font-bold">
                    Size:300-800kb
                    <br />
                    Resolution: 600x800
                    <br />
                    <u>Supported formats</u>
                    <br />
                    jpg,jpeg,png
                  </p>
                </>
              ) : (
                <img className="" src={ImagePreview}></img>
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
              placeholder="House Name"
              type="text"
              className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
            />
            <div className="w-full md:flex space-y-1 md:space-y-0 md:space-x-2">
              <input
                placeholder="District"
                type="text"
                className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
              />
              <input
                placeholder="State"
                type="text"
                className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
              />
            </div>
            <div className="w-full md:flex  space-y-1 md:space-y-0 md:space-x-2">
              <input
                placeholder="City"
                type="text"
                className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
              />
              <input
                placeholder="Pincode"
                type="tel"
                className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
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
              placeholder="House Name"
              type="text"
              className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
            />
            <div className="w-full md:flex space-y-1 md:space-y-0 md:space-x-2">
              <input
                placeholder="District"
                type="text"
                className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
              />
              <input
                placeholder="State"
                type="text"
                className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
              />
            </div>
            <div className="w-full md:flex  space-y-1 md:space-y-0 md:space-x-2">
              <input
                placeholder="City"
                type="text"
                className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
              />
              <input
                placeholder="Pincode"
                type="tel"
                className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
              />
            </div>
            <div className="w-full md:flex space-y-1 md:space-y-0 md:space-x-2">
              <div className="md:w-1/2">
                <div className="w-full px-4 items-center  h-auto flex justify-between">
                  <label htmlFor="" className=" text-md">
                    Contact No1*
                  </label>
                  {/* {ContactNo1Err && ( */}
                  <p className="w-auto font-comic text-md  font-bold italic text-torch-red-600 ">
                    {Message}
                  </p>
                  {/* )} */}
                </div>
                <input
                  id="phone"
                  onChange={checkPhone}
                  maxLength={10}
                  type="text"
                  className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
                />
              </div>
              <div className="md:w-1/2">
                <label htmlFor="" className="ml-3 text-md">
                  Contact No2*
                </label>
                <input
                  maxLength={10}
                  onChange={checkPhone}
                  type="text"
                  className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
                />
              </div>
            </div>
          </div>
        </div>

        {/* ParentInfoPart */}
        <div className="w-full h-auto  flex flex-col  md:flex-row ">
          <div className="md:w-1/3 w-full h-auto px-2 ">
            <label htmlFor="" className="ml-3  text-md">
              Name of Parent/Gaurdian*
            </label>
            <input
              onChange={(e) => {
                setparentName(e.target.value);
              }}
              placeholder="Full Name"
              type="text"
              className="w-full mb-3 h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
            />
            <label htmlFor="" className="ml-3  text-md">
              Ocuupation*
            </label>
            <input
              placeholder="Parent's Occupation"
              type="text"
              className="w-full mb-3 h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
            />
          </div>
          <div className="md:w-1/3 w-full px-2 h-auto ">
            <label htmlFor="" className="ml-3 text-md">
              Name of NRI-Sponser
            </label>
            <input
              placeholder="Not Mandatory"
              type="text"
              className="w-full mb-3 h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
            />
            <label htmlFor="" className="ml-3 text-md">
              Relation with Sponser
            </label>
            <input
              placeholder="Not Mandatory"
              type="text"
              className="w-full mb-3  h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
            />
          </div>
          <div className="md:w-1/3 w-full px-2 h-auto ">
            <label htmlFor="" className="ml-3  text-md">
              Transaction ID/Reference No.*
            </label>
            <input
              placeholder="xxxxxxxxxxxx"
              type="tel"
              className="w-full mb-3 h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
            />
            <label htmlFor="" className="ml-3 text-md">
              Transaction Document*
            </label>
            <input
              type="file"
              className="w-full mb-3 h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
            />
          </div>
        </div>
        <div className="w-full h-auto py-4 flex flex-col  md:flex-row ">
          <div className="md:w-1/2 h-auto px-3">
            <label htmlFor="" className="ml-3 text-md">
              Branch Preference*
            </label>
            <select className="border-2 my-3 pl-3 w-full h-10 border-black bg-white rounded-lg">
              <option value="Computer Science Engineering">
                Computer Science Engineering
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Electronics And Communication Engineering">
                Electronics And Communication Engineering
              </option>
              <option value="Electrical And Electronics Engineering">
                Electrical And Electronics Engineering
              </option>
            </select>
          </div>
          <div className="md:w-1/3 mx-auto h-auto px-3 border-4 border-white rounded-md shadow-xl">
            <p className="font-comic italic font-bold text-md text-center">
              size: 30-50kb
              <br />
              resolution: 1000x100
              <br />
              format: png, jpeg, jpg
            </p>
          </div>
        </div>
        <div className="w-full h-auto p-8 bg-gray-300">
          <p className="font-roboto text-center ">
            <u>UNDERTAKING</u>
            <br />
            <br />I am aware about the criteria followed by "Muthoot Institute
            of Technology & Science, for BTech NRI Quota admission, for the year
            {" "+dt.getFullYear()}, such that my ward has to attain 60% Marks for Mathematics
            individually and 60% put together in Physics, chemistry &
            Mathematics, in the 12th standard, for the qualifying examination.
            If my ward failed to do so, there is no claim, from my side for the
            admission."
          </p>
          <br />
          <p>
            Name of Parent/Gaurdian: <b>{parentName}</b>
            <br />
            Date: <b>{dt.toLocaleDateString()}</b>
          </p>
          <p className="text-center mt-3 font-roboto">
            Contact details: Mr.P.K.Binoy - 9446717178/9846280649
          </p>
          <br />
          <div className="w-auto h-auto space-x-2 flex items-center justify-center">
            <input type="checkbox" id="check" onChange={handleSubmit} className="w-8 md:w-4  md:h-4 h-8" />
            <p className=" ">
              I agree that I have reviewed the form, and is proceeding for final
              submit
            </p>
          </div>
          {/* <input id="submitButton" type="submit" value="Submit" className="bg-torch-red-600 mt-8 text-white rounded-lg w-auto opacity-30 h-auto p-2" /> */}
        <button id="btn" disabled className="w-auto mt-8 h-auto p-2 rounded-md bg-torch-red-600 opacity-40 cursor-not-allowed text-white">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Body;
