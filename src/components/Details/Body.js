import React from 'react'
import PersonalInfoPage from './PersonalInfoPage'
import ParentInfoPage from './ParentInfoPage'

function Body() {
    return (
        <div className="w-screen xs:mt-10 sm:mt-0 bg-transparent h-99 flex">
        <ParentInfoPage />
        </div>
    )
}

export default Body
