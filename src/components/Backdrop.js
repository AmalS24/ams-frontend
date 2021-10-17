import React from 'react'
import "../index.css"

function Backdrop(props) {
    return (
        <div className='fixed top-0 z-10 left-0 w-full h-full bg-trout-900 opacity-95'onClick={props.onClick}> 
        </div>
    )
}

export default Backdrop
