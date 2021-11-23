import React from 'react'
import '../help/style.css'

function DetailsHelp(props) {
    return (
        <div className="modal ">
            <div
        className="absolute  z-30 w-8 h-8 rounded-full bg-torch-red-500  
        font-extrabold transform rotate-45 text-white text-xl cursor-pointer -right-2 -top-2"
        onClick={props.onClick}
      >
        +
      </div>
        </div>
    )
}

export default DetailsHelp
