import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const Body = () => {
  const dt = new Date();
  const [parentName, setparentName] = useState("");
  const [ImagePreview, setImagePreview] = useState(null);
  const [InvalidImgFormat, setInvalidImgFormat] = useState(false);
  const [InvalidFileFormat,  setInvalidFileFormat] = useState(false);
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

  const enableButton = () => {
    const isChecked = document.getElementById("check").checked;
    const submitBtn = document.getElementById("btn");
   
    submitBtn.disabled = true;
    submitBtn.className = "w-auto mt-8 h-auto cursor-not-allowed p-2 rounded-md bg-torch-red-600 opacity-40 text-white"
    if(isChecked)
    {
      submitBtn.disabled = false
      submitBtn.className = "w-auto mt-8 h-auto hover:bg-green-600 p-2 rounded-md bg-torch-red-600 text-white"
    }
    
  }

  const sameAs =()=>{
    const isChecked = document.getElementById("sameas").checked;
    if(isChecked)
    {
        document.getElementById("phousename").value=submitForm.chousename;
        document.getElementById("pcity").value=submitForm.ccity;
        document.getElementById("pdistrict").value=submitForm.cdistrict;
        document.getElementById("pstate").value=submitForm.cstate;
        document.getElementById("ppin").value=submitForm.cpin;
    }
  }

  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/jpg", "image/jpeg", "image/png"];
    // console.log(selected)
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      setInvalidImgFormat(false);
      let reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setInvalidImgFormat(true);
    }
  };

  const handleTransactionFileFormat = (e) =>{
    const file = e.target.files[0];
    // console.log(file.type == "application/pdf")
    if(file.type == "application/pdf")
    {
      setInvalidFileFormat(false)
      return;
    }
    setInvalidFileFormat(true);
  }
  
  const Form = {
    fname:"",
    mname:"",
    lname:"",
    dob:"",
    photo:{},
    chousename:"",
    ccity:"",
    cdistrict:"",
    cstate:"",
    cpin:"",
    phousename:"",
    pcity:"",
    pdistrict:"",
    pstate:"",
    ppin:"",
    phone1:"",
    phone2:"",
    parentName:"",
    occupation:"",
    sponser:"",
    relationWithSponser:"",
    transactionId:"",
    transactionDoc:{},
    branch:"",
  };

  const [submitForm,setSubmitForm] = useState(Form);

  const handleChange= (e) =>{
    const {value,id}=e.target;
    const newForm = {...submitForm};
    newForm[id] = value;
    setSubmitForm(newForm);
    console.log(newForm);
  };

  const access = localStorage.getItem("access_token")

  const formSubmit =(e)=>{
    e.preventDefault();
    console.log(submitForm)
    const api = "https://ams-backend-api.herokuapp.com/user/application/"
    axios.patch(api+"GBT220007",submitForm,{
      headers: {
        Authorization: 'Bearer ' + access
      }
    })
    .then((Response) => {
      console.log(Response)
    })
    .catch(({ Response }) => {
      if(Response)
      {
        toast.error("Something went wrong ERR_CODE: "+Response.status)
      }
    })
  }

  return (
    <div className="w-full h-auto py-4 px-3 lg:px-30 xl:px-56">
      <form
      // onSubmit={handleSubmit}
        action=""
        onSubmit={formSubmit}
        className="w-auto font-montserrat space-y-4 sm rounded-lg h-auto bg-gray-100 p-4"
      ><h1 className="text-center text-2xl uppercase font-semibold	font-sans">Application Form</h1>
        <div className="w-full h-auto  flex flex-col md:flex-row ">
          <div className="md:w-1/3 h-auto px-3 py-4 flex flex-col space-y-2 ">
            {/*Name and DoB*/}
            <label htmlFor="" className="ml-3 text-md">
              Name*
            </label>
            <input
              type="text"
              id="fname"
              onChange={handleChange}
              className="w-full h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
            />
            <label htmlFor="" className="ml-3 text-md">
              Date of Birth*
            </label>
            <input
              type="date"
              id="dob"
              onChange={handleChange}
              className="w-full h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
            />
          </div>
          <div className="md:w-1/3 h-auto  px-3 py-4 flex flex-col space-y-2">
            <label htmlFor="" className="ml-3 text-md">
              Photo*
            </label>
            <input
              id="photo"
              onChange={handleChange,handleImageChange}
              type="file"
              className="w-full h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
            />
            {InvalidImgFormat && (
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
              {!ImagePreview || InvalidImgFormat ? (
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
              id="chousename"
              onChange={handleChange}
              className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
            />
            <div className="w-full md:flex space-y-1 md:space-y-0 md:space-x-2">
              <input
                placeholder="District"
                type="text"
                id="cdistrict"
                onChange={handleChange}
                className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
              />
              <input
                placeholder="State"
                type="text"
                id="cstate"
                onChange={handleChange}
                className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
              />
            </div>
            <div className="w-full md:flex  space-y-1 md:space-y-0 md:space-x-2">
              <input
                placeholder="City"
                type="text"
                id="ccity"
                onChange={handleChange}
                className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
              />
              <input
                placeholder="Pincode"
                type="tel"
                id="cpin"
                onChange={handleChange}
                className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
              />
            </div>
            <div className="space-x-3 ml-3 flex items-center pr-3">
              <input 
              type="checkbox" 
              id="sameas"
              onChange={sameAs}
              className="w-4 h-4" />
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
              id="phousename"
              onChange={handleChange}
              className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
            />
            <div className="w-full md:flex space-y-1 md:space-y-0 md:space-x-2">
              <input
                placeholder="District"
                type="text"
                id="pdistrict"
                onChange={handleChange}
                className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
              />
              <input
                placeholder="State"
                type="text"
                id="pstate"
                onChange={handleChange}
                className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
              />
            </div>
            <div className="w-full md:flex  space-y-1 md:space-y-0 md:space-x-2">
              <input
                placeholder="City"
                type="text"
                id="pcity"
                onChange={handleChange}
                className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
              />
              <input
                placeholder="Pincode"
                type="tel"
                id="ppin"
                onChange={handleChange}
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
                  id="phone1"
                  onChange={handleChange,checkPhone}
                  maxLength={10}
                  type="text"
                  className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
                />
              </div>
              <div className="md:w-1/2">
              <div className="w-full px-4 items-center  h-auto flex justify-between">
                  <label htmlFor="" className=" text-md">
                    Contact No2*
                  </label>
                  {/* {ContactNo1Err && ( */}
                  <p className="w-auto font-comic text-md  font-bold italic text-torch-red-600 ">
                    {Message}
                  </p>
                  {/* )} */}
                </div>
                <input
                  maxLength={10}
                  id="phone2"
                  onChange={handleChange,checkPhone}
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
              onChange={handleChange,(e) => {
                setparentName(e.target.value);
              }}
              placeholder="Full Name"
              type="text"
              id="parentName"
              // onBlur={handleChange}
              className="w-full mb-3 h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
            />
            <label htmlFor="" className="ml-3  text-md">
              Ocuupation*
            </label>
            <input
              placeholder="Parent's Occupation"
              type="text"
              id="occupation"
              onChange={handleChange}
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
              id="sponser"
              onChange={handleChange}
              className="w-full mb-3 h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
            />
            <label htmlFor="" className="ml-3 text-md">
              Relation with Sponser
            </label>
            <input
              placeholder="Not Mandatory"
              type="text"
              id="relationWithSponser"
              onChange={handleChange}
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
              id="transactionId"
              onChange={handleChange}
              className="w-full mb-3 h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
            />
            <label htmlFor="" className="ml-3 text-md">
              Transaction Document*
            </label>
            <input
              type="file"
              id="transactionDoc"
              onChange={handleChange,handleTransactionFileFormat}
              className="w-full mb-3 h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
            />
            {InvalidFileFormat && (
              <p className="ml-3 text-red-700 font-mono text-center text-md font-bold italic">
                Unsupported Format
              </p>
            )}
          </div>
        </div>
        <div className="w-full h-auto py-4 flex flex-col  md:flex-row ">
          <div className="md:w-1/2 h-auto px-3">
            <label htmlFor="" className="ml-3 text-md">
              Branch Preference*
            </label>
            <select 
              id="branch"
              onChange={handleChange}
              className="border-2 my-3 w-full h-10 border-black bg-white rounded-lg">
              <option value="null">
               
              </option>
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
          <div className="md:w-1/3 mx-auto h-auto px-3 bg-white rounded-md shadow-xl">
            <p className="font-comic py-3 italic font-bold text-md md:text-lg text-center">
             <u>Note:</u> Plz upload your transaction<br/>
             document as a pdf file 
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
            Date: <b>{dt.toLocaleDateString('en-IN')}</b>
          </p>
          <p className="text-center mt-3 font-roboto">
            Contact details: Mr.P.K.Binoy - 9446717178/9846280649
          </p>
          <br />
          <div className="w-auto h-auto space-x-2 flex items-center justify-center">
            <input 
            id="check"
            type="checkbox"  
            onChange={enableButton}
            className="w-8 md:w-4 md:h-4 h-8" />
            <p className=" ">
              I agree that I have reviewed the form, and is proceeding for final
              submit
            </p>
          </div>
          <button 
          id="btn"
          disabled
          className = "w-auto mt-8 h-auto cursor-not-allowed p-2 rounded-md bg-torch-red-600 opacity-40 text-white" >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Body;
