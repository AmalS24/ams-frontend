import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast, Bounce, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";

function RegisterForm() {
  const [phErr, setphErr] = useState(false);
  const [aadrErr, setaadrErr] = useState(false);
  const [emailErr, setemailErr] = useState(false);
  const [loading,setLoading] = useState(false);

  const history = new useHistory();

  function addHyphen() {
    var val = document.getElementById("aadr");
    if (val.value !== "") {
      val = val.value.split("-").join("");
      let finalVal = val.match(/.{1,4}/g).join("-");
      document.getElementById("aadr").value = finalVal;
    }
  }

  const fname = useRef();
  const mname = useRef();
  const lname = useRef();
  const gender = useRef();
  const emailid = useRef();
  const aadhar = useRef();
  const dob = useRef();
  const phone = useRef();
  const quota = useRef();
  const program = useRef();

  function checkAadhar() {
    const str = document.getElementById("aadr").value.split("-").join("");

    if (isNaN(str) || (str.length < 12 && str != "")) {
      setaadrErr(true);
    } else {
      setaadrErr(false);
    }
  }

  function checkPhone() {
    const str = document.getElementById("phone").value;

    if (isNaN(str) || (str.length < 10 && str != "")) {
      setphErr(true);
    } else {
      setphErr(false);
    }
  }

  function checkEmail() {
    const str = document.getElementById("email").value;
    const test =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (str.match(test) && str != "") {
      setemailErr(false);
    } else {
      setemailErr(true);
    }
  }

  function RegistrationForm(event) {
    event.preventDefault();
    setLoading(true);
    const inputfname = fname.current.value;
    const inputmame = mname.current.value;
    const inputlname = lname.current.value;
    const inputgender = gender.current.value;
    const inputemailid = emailid.current.value;
    const inputaadhar = aadhar.current.value;
    const inputdob = dob.current.value;
    const inputphone = phone.current.value;
    const inputquota = quota.current.value;
    const inputprogram = program.current.value;

    var registerInput = null;
    // var date = new Date();
    // const dt = date.toLocaleDateString() + " " + date.toLocaleTimeString();

    registerInput = {
      firstName: inputfname,
      middleName: inputmame,
      lastName: inputlname,
      gender: inputgender,
      email: inputemailid,
      aadhar: inputaadhar,
      dob: inputdob,
      phone: inputphone,
      quota: inputquota,
      course: inputprogram,
      age: 18,
      //registrationTimeStamp: dt,
    };

    axios
      .post("https://ams-backend-api.herokuapp.com/user/register", registerInput)
      .then((Response) => {
        switch (Response.status) {
          case 200:
            history.push("/login");
            toast.success("Registration Success, Being redirected...");
            setLoading(false);
            break;
          case 204:
            setLoading(false);
            Error(toast.error("Required Field Empty"));
            break;
          default: setLoading(false);
        }
      })
      .catch(({ response }) => {
        if (response) {
          switch (response.status) {
            case 409:
              setLoading(false)
              toast.info("Looks like you've Already registered");
              break;
            // case 500:
            //   toast.warn("There are errors in input, Plz check once again");
            //   break;
            default:
              setLoading(false);
              toast.warn("Something went wrong ! Plz refresh & Try Again");
          }
        }
      });
  }

  return (
  <>
      {loading ? (<Loader />) : (
      <div className="xl:w-2/5  sm:my-2 h-auto mx-auto flex justify-center ">
      <ToastContainer
        draggable={false}
        autoClose={8000}
        transition={Zoom}
        pauseOnHover={true}
        limit={1}
        bodyClassName="text-center text-black"
        position="top-center"
        toastClassName="sm:w-97"
      />
      <form
        action=""
        className="w-auto mx-auto p-6 space-y-4  h-auto rounded-sm bg-white"
        onSubmit={RegistrationForm}
      >
        <p className="text-center text-2xl sm:text-4xl sm:mt-3 uppercase font-semibold">
          Registration
        </p>
        <div className="sm:flex sm:space-x-2 justify-between w-full h-auto">
          <div className="w-auto flex flex-col h-full">
            <label htmlFor="" className="ml-4 text-lg">
              Name*
            </label>
            <input
              type="text"
              placeholder="First"
              className="sm:h-10 h-11 w-72 sm:w-40 px-5  italic text-lg focus:outline-none border-2 border-black rounded-full"
              ref={fname}
            />
          </div>
          <div className="w-auto h-full mt-7">
            <input
              type="text"
              placeholder="Middle"
              className="sm:h-10 h-11 w-72 sm:w-36 px-5  italic text-lg focus:outline-none border-2 border-black rounded-full"
              ref={mname}
            />
          </div>
          <div className="w-auto h-full mt-7">
            <input
              type="text"
              placeholder="Last"
              className="sm:h-10 h-11 w-72 sm:w-50 px-5  italic text-lg focus:outline-none border-2 border-black rounded-full"
              ref={lname}
            />
          </div>
        </div>
        <div className="sm:flex  justify-between w-full h-auto">
          <div className="w-auto sm:mb-0 mb-4 flex flex-col h-full">
            <div className="w-72 px-4 items-center sm:w-90 h-auto flex justify-between">
              <label htmlFor="" className=" text-lg">
                Email*
              </label>
              {emailErr && (
                <p className="w-auto font-comic text-md ml-4 font-bold italic text-torch-red-600 ">
                  Invalid!
                </p>
              )}
            </div>
            <input
              id="email"
              onChange={checkEmail}
              type="text"
              placeholder="Email"
              className="sm:h-10 h-11 w-72 sm:w-90 px-5  italic text-lg focus:outline-none border-2 border-black rounded-full"
              ref={emailid}
            />
          </div>
          <div className="w-auto flex flex-col h-full">
            <label htmlFor="" className="ml-4 text-lg">
              Gender*
            </label>

            <select
              name="gender"
              className="sm:h-10 h-11 bg-white w-72 sm:w-40 px-5  italic text-lg focus:outline-none border-2 border-black rounded-full"
              id="gender"
              ref={gender}
            >
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>
        <div className="sm:flex justify-between w-full h-auto">
          <div className="w-auto sm:mb-0 mb-4 flex flex-col h-full">
            <div className="w-72 px-4 items-center sm:w-52 h-auto flex justify-between">
              <label htmlFor="" className=" text-lg">
                Phone
              </label>
              {phErr && (
                <p className="w-auto font-comic text-md ml-4 font-bold italic text-torch-red-600 ">
                  Invalid!
                </p>
              )}
            </div>
            <input
              id="phone"
              type="tel"
              placeholder="+91 xxxxxxxxxx"
              maxLength={10}
              onChange={checkPhone}
              className="sm:h-10 h-11 w-72 sm:w-52 px-5  italic text-lg focus:outline-none border-2 border-black rounded-full"
              ref={phone}
            />
          </div>
          <div className="w-auto sm:mb-0 mb-4 flex flex-col h-full">
            <label htmlFor="" className="ml-4 text-lg">
              Quota*
            </label>

            <select
              name="quota"
              className="sm:h-10 h-11 bg-white w-72 sm:w-40 px-4  italic text-lg focus:outline-none border-2 border-black rounded-full"
              id="quota"
              ref={quota}
            >
              <option value=""></option>
              <option value="NRI">NRI</option>
              <option value="Government">Government</option>
              <option value="Management">Management</option>
            </select>
          </div>
          <div className="w-auto flex flex-col h-full">
            <label htmlFor="" className="ml-4 text-lg">
              Program*
            </label>

            <select
              name="quota"
              className="sm:h-10 h-11 bg-white sm:w-30 px-4 w-72 italic text-lg focus:outline-none border-2 border-black rounded-full"
              id="quota"
              ref={program}
            >
              <option value=""></option>
              <option value="BTech">BTech</option>
              <option value="MTech">MTech</option>
            </select>
          </div>
        </div>
        <div className="sm:flex justify-between w-full h-auto">
          <div className="w-auto sm:mb-0 mb-4 flex flex-col h-full">
            <div className="w-72 px-4 items-center sm:w-64 h-auto flex justify-between">
              <label htmlFor="" className=" text-lg">
                Aadhar No.
              </label>
              {aadrErr && (
                <p className="w-auto font-comic text-md ml-4 font-bold italic text-torch-red-600 ">
                  Invalid!
                </p>
              )}
            </div>
            <input
              id="aadr"
              type="tel"
              placeholder="xxxx - xxxx - xxxx"
              onKeyUp={addHyphen}
              maxLength={14}
              onChange={checkAadhar}
              className="sm:h-10 h-11 w-72 font sm:w-64 px-5  italic text-lg focus:outline-none border-2 border-black rounded-full"
              ref={aadhar}
            />
          </div>
          <div className="w-auto flex flex-col h-full">
            <label htmlFor="" className="ml-4 text-lg">
              Date of Birth*
            </label>
            <input
              type="date"
              placeholder="DOB"
              className="sm:h-10 h-11 bg-white w-72 sm:w-52 px-5  italic text-lg focus:outline-none border-2 border-black rounded-full"
              ref={dob}
            />
          </div>
        </div>
        <div className="flex justify-between w-full h-auto">
          <div className="w-auto my-3 h-full">
            <button className=" flex items-center sm:w-30 w-24 justify-center shadow-2xl sm:px-4 rounded-full sm:h-12 h-10  sm:text-xl text-white bg-red-600  font-montserrat">
              Register
            </button>
          </div>
          <div className="w-auto mt-4 h-full">
            <div className="sm:flex flex-row sm:mt-6">
              <p className="sm:flex hidden text-lg font-light">
                Already Registered ? Try
              </p>
              <Link
                to="/login"
                className="sm:ml-2 sm:text-xl text-red-600 hover:underline hover:text-purple-700"
              >
                Sign-In
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
    )

    }
    </>
  );
}
export default RegisterForm;
