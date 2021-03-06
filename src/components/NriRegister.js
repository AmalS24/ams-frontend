import React from "react";
import { Link } from "react-router-dom";

const NriRegister = () => {
  return (
    <div className="w-full min-h-screen h-full bg-trout-500 overflow-x-hidden">
      <div className="  w-full flex items-center justify-between xs:px-10 px-20 py-8 h-14">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            class="bi bi-house-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
            <path
              fill-rule="evenodd"
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
            />
          </svg>
        </Link>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            class="bi bi-question-circle-fill transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
          </svg>
        </button>
      </div>
      <div className="w-full h-99 bg-transparent flex">
        <div className="flex justify-center items-center xl:w-3/5 w-full">
          {/* fname lname email dob aadhar phone gender  */}
          <form
            action=""
            className="flex flex-col  xs:w-80 sm:w-97.85 sm:h-98 h-full rounded-sm bg-white"
          >
            <h1 className="text-2xl text-center mb-2 sm:text-4xl sm:py-3 font-semibold mt-4 uppercase">
              Registration
            </h1>
            {/* <div className="xs:h-9 w-72 mx-3 flex justify-center items-center text-sm tracking-tight italic text-blue-600 bg-indigo-100  text-center rounded-md">It looks like you've already registered try Login</div> */}
            {/* <div className="xs:h-9 w-72 mx-3 flex justify-center items-center text-sm tracking-tight italic text-red-600 bg-red-100  text-center rounded-md">*Required field empty</div> */}
            {/* <div className="xs:h-9 sm:h-12 w-72  sm:w-97.5 sm:mb-3 sm:mx-10 sm:text-lg mx-3 flex justify-center items-center text-sm italic tracking-tight text-green-700 bg-teal-100  text-center rounded-md">
              Registration Successful, check your mail to Login
            </div> */}
            <label
              htmlFor="Name"
              className="text-md sm:font-normal sm:text-lg font-light mt-2 sm:mt-3 ml-6 sm:ml-10"
            >
              Name*
            </label>
            <div className="sm:flex sm:px-6">
              <input
                type="text"
                placeholder="First Name"
                className="mb-4  sm:mb-0 xs:h-11 sm:w-full sm:ml-3 px-4 w-72 mx-3 italic text-md sm:text-lg focus:outline-none border-2 border-black rounded-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className=" xs:h-11 sm:w-full  px-4 w-72 mx-3 italic text-md sm:text-lg focus:outline-none border-2 border-black rounded-full"
              />
            </div>
            <label
              htmlFor="email"
              className="text-md sm:font-normal sm:text-lg font-light mt-2 sm:mt-3 ml-6 sm:ml-10"
            >
              Email*
            </label>
            <input
              type="email"
              placeholder="Email-ID"
              className="xs:h-11 sm:w-97.55 sm:text-lg sm:ml-8  px-4 w-72 ml-3  text-md italic focus:outline-none border-2 border-black rounded-full"
            />
            <div className="sm:flex ">
              <div className="xs:my-2 sm:w-3/5 sm:mt-4">
                <label
                  htmlFor="aadhar"
                  className="text-md  sm:font-normal sm:text-lg font-light mt-2 sm:mt-3 ml-6 sm:ml-11"
                >
                  Aadhar No.
                </label>
                <input
                  type="tel"
                  placeholder="Aadhar Number"
                  className="xs:h-11 sm:text-lg sm:w-64 sm:ml-8 sm:mr-5 sm:mb-3 px-4 w-72 mx-3 text-md italic focus:outline-none border-2 border-black rounded-full"
                />
                <label
                  htmlFor="phone"
                  className="text-md sm:font-normal sm:text-lg font-light mt-2  ml-6 sm:ml-11"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="xs:h-11 sm:text-lg  sm:w-64 sm:mx-8  px-4 w-72 mx-3 text-md italic focus:outline-none border-2 border-black rounded-full"
                />
              </div>
              <div className="sm:w-2/5 sm:mr-2 sm:mt-4">
                <label
                  htmlFor="dob"
                  className="text-md sm:font-normal sm:text-lg font-light mt-2 sm:mt-3 ml-6 sm:ml-4"
                >
                  Date Of Birth*
                </label>
                <input
                  type="date"
                  placeholder="Date"
                  className="xs:h-11 sm:text-lg sm:w-48 sm:mx-0 sm:mb-3 px-4 w-72 mx-3 text-md italic focus:outline-none border-2 border-black rounded-full"
                />
                <label
                  htmlFor="gender"
                  className="text-md sm:font-normal sm:text-lg font-light mt-2 sm:mt-3 ml-6 sm:ml-4"
                >
                  Gender*
                </label>
                <select
                  name="gender"
                  className="xs:h-11 sm:text-lg sm:w-48 sm:mx-0  px-4 w-72 mx-3 text-md italic focus:outline-none border-2 border-black rounded-full"
                  id="gender"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
            <div className="h-6 w-72  sm:mt-4 sm:w-97.75 sm:mr-24 sm:h-12 mt-3 mx-auto flex sm:items-center justify-between   px-2 text-lg tracking-tighter">
              <button className="py-1 sm:ml-6 sm:flex sm:items-center sm:w-30 sm:justify-center shadow-2xl sm:px-4 rounded-full sm:h-12 text-red-600  hover:text-purple-700 sm:border-2 border-red-600 sm:text-2xl sm:hover:text-white sm:hover:bg-red-600 ">
                Register
              </button>
              <div className="sm:flex flex-row sm:items-center">
              <p className="sm:flex hidden text-lg font-light">Already Registered ? Try </p>
              <Link to="/login" className="py-1 sm:ml-2 text-red-600 hover:underline hover:text-purple-700">
                Sign-In
              </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="xl:flex justify-center items-center w-2/5 hidden ">
          <svg
            id="a65bca02-317b-4705-84dd-2a5586816ee4"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            width="680.83858"
            height="584.23207"
            viewBox="0 0 680.83858 584.23207"
            class="w-96 h-96"
          >
            <path
              id="b9ccae5a-ffdd-4f5c-9c1e-05af9f0f3372"
              data-name="Path 438"
              d="M310.70569,694.02818a24.21459,24.21459,0,0,0,23.38269-4.11877c8.18977-6.87441,10.758-18.196,12.8467-28.68191l6.17973-31.01657-12.9377,8.90837c-9.30465,6.40641-18.81826,13.01866-25.26011,22.29785s-9.25223,21.94707-4.07792,31.988"
              transform="translate(-259.58071 -157.88396)"
              fill="#e6e6e6"
            />
            <path
              id="f4ad1d06-bd03-4ced-a5c4-c19a65ab4ee5"
              data-name="Path 439"
              d="M312.7034,733.73874c-1.62839-11.86368-3.30382-23.88078-2.15884-35.87167,1.01467-10.64932,4.26373-21.04881,10.87831-29.57938a49.20592,49.20592,0,0,1,12.62466-11.44039c1.26215-.79648,2.42409,1.20354,1.16733,1.997a46.77949,46.77949,0,0,0-18.50446,22.32562c-4.02857,10.24607-4.67545,21.41582-3.98154,32.3003.41944,6.58218,1.31074,13.1212,2.20588,19.65251a1.19817,1.19817,0,0,1-.808,1.42251,1.16348,1.16348,0,0,1-1.42253-.808Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#f2f2f2"
            />
            <path
              id="baf785f8-b4c6-42cf-85bd-8a16037845f7"
              data-name="Path 442"
              d="M324.42443,714.70229a17.82513,17.82513,0,0,0,15.53141,8.01862c7.8644-.37318,14.41806-5.85973,20.31713-11.07027l17.452-15.4088-11.54987-.55281c-8.30619-.39784-16.82672-.771-24.73813,1.79338s-15.20758,8.72639-16.654,16.91541"
              transform="translate(-259.58071 -157.88396)"
              fill="#e6e6e6"
            />
            <path
              id="a14e4330-7125-4e03-a856-d6453c34f6cc"
              data-name="Path 443"
              d="M308.10042,740.55843c7.83972-13.87142,16.93234-29.28794,33.1808-34.21552a37.02609,37.02609,0,0,1,13.95545-1.441c1.48189.128,1.11179,2.41174-.367,2.28454a34.39833,34.39833,0,0,0-22.27164,5.89215c-6.27994,4.27453-11.16975,10.21755-15.30781,16.51907-2.53511,3.86051-4.80576,7.88445-7.07642,11.903C309.48824,742.78513,307.36641,741.85759,308.10042,740.55843Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#f2f2f2"
            />
            <path
              id="ac20a106-7eb8-4a45-8835-674ef3bf3222"
              data-name="Path 141"
              d="M935.3957,569.31654H503.18092a5.03014,5.03014,0,0,1-5.02359-5.02359V162.90754a5.03017,5.03017,0,0,1,5.02359-5.02358H935.3957a5.03017,5.03017,0,0,1,5.02359,5.02358V564.292a5.02922,5.02922,0,0,1-5.02359,5.02359Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#fff"
            />
            <path
              id="a8878079-c7cd-406f-a434-8b15b914b9b4"
              data-name="Path 141"
              d="M935.3957,569.31654H503.18092a5.03014,5.03014,0,0,1-5.02359-5.02359V162.90754a5.03017,5.03017,0,0,1,5.02359-5.02358H935.3957a5.03017,5.03017,0,0,1,5.02359,5.02358V564.292a5.02922,5.02922,0,0,1-5.02359,5.02359ZM503.18092,159.88944a3.01808,3.01808,0,0,0-3.01152,3.01151V564.292a3.01808,3.01808,0,0,0,3.01152,3.01152H935.3957a3.01717,3.01717,0,0,0,3.01153-3.01152V162.90754a3.01809,3.01809,0,0,0-3.01153-3.01151Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#cacaca"
            />
            <path
              id="af64f961-e9a2-4c53-a333-5060c7f850d2"
              data-name="Path 142"
              d="M707.41023,262.18528a3.41053,3.41053,0,0,0,0,6.82105H894.55305a3.41053,3.41053,0,0,0,0-6.82105Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#e4e4e4"
            />
            <path
              id="baad4cfb-158d-4439-9cc3-22475bf47b22"
              data-name="Path 143"
              d="M707.41023,282.65037a3.41054,3.41054,0,0,0,0,6.82106h95.54019a3.41054,3.41054,0,0,0,0-6.82106Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#e4e4e4"
            />
            <path
              id="f3456279-91e5-49ad-aa43-9838b26fb6ca"
              data-name="Path 142"
              d="M543.84146,392.7046a3.41054,3.41054,0,0,0,0,6.82106h350.8937a3.41054,3.41054,0,0,0,0-6.82106Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#e4e4e4"
            />
            <path
              id="a3288adf-49f8-485f-8ae9-1e4f1a13d849"
              data-name="Path 143"
              d="M543.84146,413.1697a3.41054,3.41054,0,0,0,0,6.82106H803.13254a3.41054,3.41054,0,0,0,0-6.82106Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#e4e4e4"
            />
            <path
              id="e63a5b48-5a7d-40a2-b9b0-6adec326348a"
              data-name="Path 142"
              d="M543.84146,433.17177a3.41054,3.41054,0,0,0,0,6.82106h350.8937a3.41054,3.41054,0,0,0,0-6.82106Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#e4e4e4"
            />
            <path
              id="a1c669b4-dfc3-4cfa-a7be-66b71399844d"
              data-name="Path 143"
              d="M543.84146,453.63687a3.41054,3.41054,0,0,0,0,6.82106H803.13254a3.41054,3.41054,0,0,0,0-6.82106Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#e4e4e4"
            />
            <path
              id="bfec50d1-ffb1-4de6-a9ef-a1085e40e016"
              data-name="Path 142"
              d="M543.84146,474.17177a3.41054,3.41054,0,0,0,0,6.82106h350.8937a3.41054,3.41054,0,0,0,0-6.82106Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#e4e4e4"
            />
            <path
              id="bc9696ec-ec99-41d5-9116-3ad9737a38ac"
              data-name="Path 143"
              d="M543.84146,494.63687a3.41054,3.41054,0,0,0,0,6.82106H803.13254a3.41054,3.41054,0,0,0,0-6.82106Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#e4e4e4"
            />
            <path
              d="M599.41943,324.82812a49,49,0,1,1,48.99952-49A49.05567,49.05567,0,0,1,599.41943,324.82812Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#37d4ac"
            />
            <path
              d="M450.67833,510.10041a12.24754,12.24754,0,0,0-14.953-11.36231l-16.19641-22.82521-16.27138,6.45945,23.32519,31.91237a12.31392,12.31392,0,0,0,24.09559-4.1843Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#a0616a"
            />
            <path
              d="M419.11211,508.40888l-49.00774-63.57777L388.46714,387.12c1.34563-14.50936,10.425-18.56089,10.81135-18.72645l.5893-.25281,15.979,42.6119-11.73235,31.28625,28.79671,48.4319Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#3f3d56"
            />
            <path
              d="M589.30794,312.41993a12.24758,12.24758,0,0,0-10.17219,15.78672l-21.50463,17.91269,7.69816,15.72326,30.01343-25.72272a12.31392,12.31392,0,0,0-6.03477-23.69995Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#a0616a"
            />
            <path
              d="M590.06206,344.02244l-59.59835,53.77665-58.95815-13.84578c-14.57-.21979-19.31136-8.9587-19.50629-9.33113l-.29761-.568,41.2489-19.22578,32.0997,9.27828,46.06046-32.45509Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#3f3d56"
            />
            <polygon
              points="227.248 568.437 243.261 568.436 250.878 506.672 227.245 506.673 227.248 568.437"
              fill="#a0616a"
            />
            <path
              d="M483.39733,721.74476h50.32614a0,0,0,0,1,0,0V741.189a0,0,0,0,1,0,0h-36.207a14.11914,14.11914,0,0,1-14.11914-14.11914v-5.32505A0,0,0,0,1,483.39733,721.74476Z"
              transform="translate(757.57348 1305.02654) rotate(179.99738)"
              fill="#2f2e41"
            />
            <polygon
              points="163.247 568.437 179.26 568.436 186.878 506.672 163.245 506.673 163.247 568.437"
              fill="#a0616a"
            />
            <path
              d="M419.397,721.74476H469.7231a0,0,0,0,1,0,0V741.189a0,0,0,0,1,0,0h-36.207A14.11914,14.11914,0,0,1,419.397,727.06981v-5.32505a0,0,0,0,1,0,0Z"
              transform="translate(629.57273 1305.02946) rotate(179.99738)"
              fill="#2f2e41"
            />
            <polygon
              points="157.552 342.991 158.858 434.42 160.165 554.584 188.899 551.972 203.267 386.094 221.553 551.972 251.218 551.972 254.206 384.788 243.757 348.216 157.552 342.991"
              fill="#2f2e41"
            />
            <path
              d="M473.37417,513.1531c-31.26533.00239-60.04471-14.14839-60.43319-14.34263l-.32273-.16136-2.62373-62.96637c-.76082-2.22509-15.74263-46.13091-18.28-60.08625-2.57083-14.13882,34.68842-26.54742,39.213-27.99853l1.02678-11.37405,41.75366-4.49918,5.292,14.5536,14.97942,5.6168a7.40924,7.40924,0,0,1,4.59212,8.7043l-8.32539,33.85619,20.33325,112.01266-4.37755.18946C495.709,511.39658,484.38425,513.1525,473.37417,513.1531Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#3f3d56"
            />
            <circle
              cx="454.46738"
              cy="294.45965"
              r="30.06284"
              transform="matrix(0.87745, -0.47966, 0.47966, 0.87745, -345.12824, 96.19037)"
              fill="#a0616a"
            />
            <path
              d="M430.1166,323.56132c5.72926,6.10289,16.36927,2.82672,17.1158-5.51069a10.07153,10.07153,0,0,0-.01268-1.94523c-.38544-3.69311-2.519-7.046-2.008-10.94542a5.73974,5.73974,0,0,1,1.05046-2.687c4.56548-6.11359,15.28263,2.73444,19.59138-2.8,2.642-3.39359-.46364-8.73664,1.56381-12.52956,2.67591-5.006,10.60183-2.53654,15.57222-5.27809,5.53017-3.05032,5.1994-11.53517,1.55907-16.6961-4.43955-6.294-12.22348-9.65241-19.91044-10.13643s-15.32094,1.59394-22.4974,4.39069c-8.15392,3.17767-16.23969,7.56925-21.25749,14.739-6.10218,8.71919-6.68942,20.44132-3.6376,30.63677C419.10222,311.0013,425.43805,318.57766,430.1166,323.56132Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#2f2e41"
            />
            <path
              d="M641.58071,741.9626h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#cacaca"
            />
            <path
              d="M596.58984,294.33545a3.488,3.488,0,0,1-2.38134-.93555l-16.15723-15.00732a3.49994,3.49994,0,0,1,4.76367-5.12891l13.68555,12.71192,27.07666-27.07618a3.5,3.5,0,1,1,4.94922,4.9502l-29.46094,29.46094A3.49275,3.49275,0,0,1,596.58984,294.33545Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#fff"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NriRegister;
