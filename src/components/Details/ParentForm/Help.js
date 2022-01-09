import React from 'react'

const Help = (props) => {
    return (
        <div data-aos="zoom-in" className="absolute z-10 w-80 sm:w-97.5 top-1/3 left-10 sm:left-20 md:left-1/3  p-4 sm:p-6 rounded-lg text-lg sm:text-2xl font-light h-auto bg-white">
             <div
        className="absolute flex items-center justify-center z-30 w-6 h-6 sm:h-7 sm:w-7 rounded-full bg-torch-red-500  
        font-extrabold transform rotate-45 text-white text-md sm:text-lg cursor-pointer -left-2 -top-2"
        onClick={props.onClick}
      >
        +
      </div>
            <p className="text-center">Fields denoted with <b>*</b> are Mandatory </p>
            <p className="text-center">Review the details before saving</p>
            <p className="text-center">After saving you can still edit the details before final submit</p>
        </div>
    )
}

export default Help
