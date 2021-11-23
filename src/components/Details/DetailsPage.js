import React from "react";
import TitleBar from "./TitleBar";
import Body from "./Body";
import PersonalInfoPage from "./PersonalInfoPage";
import { Switch,Route } from "react-router";
import ParentInfoPage from "./ParentInfoPage";

const DetailsPage = () => {
  return (
    <div className="w-screen h-screen bg-trout-600 overflow-x-hidden">
      <TitleBar />
      <Body />
      
    </div>
  );
};

export default DetailsPage;
