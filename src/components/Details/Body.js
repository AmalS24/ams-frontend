import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import Loader from "../register/Loader"
import { ToastContainer, toast, Bounce, Zoom } from "react-toastify";

const Body = () => {
  const dt = new Date();
  const [parentName, setparentName] = useState("");
  const [ImagePreview, setImagePreview] = useState(null);
  const [InvalidImgFormat, setInvalidImgFormat] = useState(false);
  const [InvalidFileFormat,  setInvalidFileFormat] = useState(false);
  const [Message, setMessage] = useState("");
  const [loading,setLoading] = useState(false)

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

  const access = localStorage.getItem("access_token")
  const api = "https://ams-backend-api.herokuapp.com/user/application"

  const Form = {
    fname:"",
    mname:"",
    lname:"",
    dob:"",
    photo:{},
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

  useEffect(() => {
    //Runs only on the first render
    axios.post(api,{token:access}).then(function (response) {
      submitForm.fname = response.data.name
      submitForm.dob = response.data.dob
      submitForm.phone2 = response.data.phone

      setTab(false)
      setTab(true)
      console.log(response)  
      })
  },[]);

  const [submitForm,setSubmitForm] = useState(Form);
  const [tab,setTab] = useState(true) 

  const handleChange= (e) =>{
    const {value,id}=e.target;
    const newForm = {...submitForm};
    newForm[id] = value;
    setSubmitForm(newForm);
    console.log(newForm);
  };

  const formSubmit =(e)=>{
    e.preventDefault();
    setLoading(true)
    console.log(submitForm)
    axios.patch(api+"/"+"NBT220000",
    {
      firstName:submitForm.firstName,
      middleName:submitForm.middleName,
      lastName:submitForm.lastName,
      dod:submitForm.dob,
      addressL1p: submitForm.phousename,
      districtp: submitForm.pdistrict,
      cityp: submitForm.pcity,
      statep: submitForm.pstate,
      pincodep: Number(submitForm.ppin),
      aPhone:submitForm.phone1,
      phone:submitForm.phone2,
      guardianName: submitForm.parentName,
      fatherOccupation:submitForm.occupation,
      guardianRelation: submitForm.relationWithSponser,
      NRIname:submitForm.sponser,
      transactionID:submitForm.transactionId,
      bp1:submitForm.branch,
    },
    {
      headers: {
        Authorization: 'Bearer ' + access
      }
    })
    .then((Response) => {
      setLoading(false)
      if(Response.status == 200)
        toast.success("application successful")
      console.log(Response)
    })
    .catch(({ Response }) => {
      setLoading(false)
      setTab(true)
      toast.error("Something went wrong try again later")
      if(Response)
      {
        toast.error("Something went wrong ERR_CODE: "+Response.status)
      }
    })
  }
  const changeTab1=()=>{
    setTab(true)
    document.getElementById("tab1").className="bg-green-300 flex justify-center items-center rounded-t-xl w-full h-full";
    document.getElementById("tab2").className="bg-green-200 flex justify-center items-center rounded-t-xl rounded-bl-xl w-full h-full"
  }
  const changeTab2=()=>{
    setTab(false)
    document.getElementById("tab2").className="bg-green-300 flex justify-center items-center rounded-t-xl w-full h-full";
    document.getElementById("tab1").className="bg-green-200 flex justify-center items-center rounded-t-xl rounded-br-xl w-full h-full"
  }

if(loading)
  return(<Loader/>)

  return (
    <div className="w-full h-auto py-4 px-3 lg:px-30 xl:px-56">
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
        onSubmit={formSubmit}
        className="w-auto font-montserrat space-y-4 sm rounded-lg h-auto bg-gray-100 p-4">
        <h1 className="text-center text-2xl uppercase font-semibold	font-sans">Application Form</h1>
        <div className="flex w-full h-10">
          <div className="bg-green-300 flex justify-center items-center rounded-t-xl w-full h-full">
              <div 
              id="tab1"
              onClick={changeTab1}
              className="bg-green-300  flex justify-center items-center rounded-t-xl w-full h-full">
                  1.Details
              </div>
          </div>
          <div className="bg-green-300 flex justify-center items-center rounded-t-xl w-full h-full">
              <div 
              id="tab2"
              onClick={changeTab2}
              className="bg-green-200 flex justify-center items-center rounded-t-xl rounded-bl-xl w-full h-full">
                  2.Payment
              </div>
          </div>
        </div>
        {
          tab?
          (<div className="w-full h-full">
            <div className="w-full h-auto  flex flex-col md:flex-row ">
          <div className="md:w-auto h-auto px-3 py-4 flex flex-col space-y-2">
            {/*Name and DoB*/}
            <label htmlFor="" className="ml-3 text-md">
              Name*
            </label>
                      <div className="md:flex md:space-x-2 md:space-y-0 space-y-2">
                      <input
                        type="text"
                        id="fname"
                        value={submitForm.fname}
                        placeholder="Firstname"
                        onChange={handleChange}
                        className="w-full h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
                      />
                      <input
                        type="text"
                        id="mname"
                        value={submitForm.mname}
                        placeholder="Middlename"
                        onChange={handleChange}
                        className="w-full h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
                      />
                      <input
                        type="text"
                        id="lname"
                        value={submitForm.lname}
                        placeholder="Lastname"
                        onChange={handleChange}
                        className="w-full h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
                      />
                      </div>
            <div className="md:flex md:space-x-2">
            <div>
                    <label htmlFor="" className="ml-3 text-md">
                      Date of Birth*
                    </label>
                    <input
                      type="date"
                      id="dob"
                      value={submitForm.dob}
                      onChange={handleChange}
                      className="w-full h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
                    />
            </div>
            <div>
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
            </div>
          </div>
          {/* <div className="md:w-1/3 h-auto  px-3 py-4 flex flex-col space-y-2">
            
          </div> */}
          <div className="md:w-1/3 relative p-4 h-auto bg-gray-400">
            {ImagePreview && (
              <div
                onClick={removeImage}
                className="w-8 flex items-center justify-center  h-8 right-8 absolute  text-white rounded-full cursor-pointer bg-torch-red-600"
              >
                x
              </div>
            )}
            <div className="w-auto flex items-center justify-center shadow-3xl rounded-md h-auto p-3 bg-white">
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
          
          <div className="md:w-full h-auto px-3 py-4 flex flex-col space-y-2 ">
            {/* Permannet Address */}
            <label htmlFor="" className="ml-3 text-md">
              Permanent Address*
            </label>

            <input
              placeholder="House Name"
              type="text"
              id="phousename"
              value={submitForm.phousename}
              onChange={handleChange}
              className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
            />
            <div className="w-full md:flex space-y-1 md:space-y-0 md:space-x-2">
              <input
                placeholder="District"
                type="text"
                id="pdistrict"
                value={submitForm.pdistrict}
                onChange={handleChange}
                className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
              />
              <input
                placeholder="State"
                type="text"
                id="pstate"
                value={submitForm.pstate}
                onChange={handleChange}
                className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
              />
            </div>
            <div className="w-full md:flex  space-y-1 md:space-y-0 md:space-x-2">
              <input
                placeholder="City"
                type="text"
                id="pcity"
                value={submitForm.pcity}
                onChange={handleChange}
                className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
              />
              <input
                placeholder="Pincode"
                type="tel"
                id="ppin"
                value={submitForm.ppin}
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
                  value={submitForm.phone1}
                  onChange={checkPhone,handleChange}
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
                  value={submitForm.phone2}
                  onChange={checkPhone,handleChange}
                  type="text"
                  className="w-full h-10 rounded-lg px-4 text-lg bg-white border-2 border-black "
                />
              </div>
            </div>
          </div>
        </div>

        {/* ParentInfoPart */}
        <div className="w-full h-auto  flex flex-col  md:flex-row ">
          <div className="md:w-1/2 w-full h-auto px-2 ">
            <label htmlFor="" className="ml-3  text-md">
              Name of Parent/Gaurdian*
            </label>
            <input
              onChange={(e) => {
                setparentName(e.target.value);
              },handleChange}
              placeholder="Full Name"
              type="text"
              id="parentName"
              value={submitForm.parentName}
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
              value={submitForm.occupation}
              onChange={handleChange}
              className="w-full mb-3 h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
            />
          </div>
          <div className="md:w-1/2 w-full px-2 h-auto ">
            <label htmlFor="" className="ml-3 text-md">
              Name of NRI-Sponser
            </label>
            <input
              placeholder="Not Mandatory"
              type="text"
              id="sponser"
              value={submitForm.sponser}
              onChange={handleChange}
              className="w-full mb-3 h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
            />
            <label htmlFor="" className="ml-3 text-md">
              Relation with applicant
            </label>
            <input
              placeholder="Not Mandatory"
              type="text"
              id="relationWithSponser"
              value={submitForm.relationWithSponser}
              onChange={handleChange}
              className="w-full mb-3  h-10 rounded-lg px-4 text-lg focus:border-red-600 focus:outline-none bg-white border-2 border-black "
            />
          </div>
          
        </div>
        
        <div className="flex justify-end ">
          <button 
          onClick={changeTab2}
          className="w-auto mt-8 h-auto p-2 rounded-md bg-torch-red-600 text-white">
            Save&Next
          </button>
        </div>
          </div>)
          :
          (<div className="w-full h-full">
            <div className="md:w-1/3 w-full px-2 h-auto ">
            <label htmlFor="" className="ml-3  text-md">
              Transaction ID/Reference No.*
            </label>
            <input
              placeholder="xxxxxxxxxxxx"
              type="tel"
              id="transactionId"
              value={submitForm.transactionId}
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

          <div className="w-full h-auto py-4 flex flex-col  md:flex-row ">
          <div className="md:w-1/2 h-auto px-3">
            <label htmlFor="" className="ml-3 text-md">
              Branch Preference*
            </label>
            <select 
              id="branch"
              value={submitForm.branch}
              onChange={handleChange}
              className="border-2 my-3 w-full h-10 border-black bg-white rounded-lg">
              <option value="null">
               
              </option>
              <option value="CSE">
                Computer Science Engineering
              </option>
              <option value="ME">
                Mechanical Engineering
              </option>
              <option value="CE">Civil Engineering</option>
              <option value="ECE">
                Electronics And Communication Engineering
              </option>
              <option value="EEE">
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
            className="md:w-4 md:h-4" />
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
          </div>)
        }
      </form>
    </div>
     )
};

export default Body;
