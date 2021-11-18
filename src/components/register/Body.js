import React from 'react'
import RegisterForm from './RegisterForm'
import RegisterLogo from './RegisterLogo'

function Body() {
    return (
        <div className="w-screen xs:mt-10 sm:mt-0 bg-transparent h-99 flex">
            <RegisterForm />
            <RegisterLogo />
        </div>
    )
}

export default Body
