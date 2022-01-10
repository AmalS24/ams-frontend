import React from 'react'
import TitleBar from '../ParentForm/TitleBar';
import PersonalInfoForm from './PersonalInfoForm';

const PersonalInfoPage = () => {
    return (
        <div className="w-screen overflow-x-hidden h-screen bg-trout-600">
      <TitleBar />
      <PersonalInfoForm />
    </div>
    )
}

export default PersonalInfoPage
