import React from "react";
import PersonalInfoPage from "./PersonalInfoPage";
import ParentInfoPage from "./ParentInfoPage";
import PaymentInfoPage from "./PaymentInfoPage";
import { Switch } from "react-router";
import { Route } from "react-router";

function Body() {
  return (
    <div className="w-screen xs:mt-10 sm:mt-0 bg-transparent h-99 flex">
      {/* <Switch>
        <Route path="/login/form" exact component={PersonalInfoPage}/>
        <Route path="/login/form2" exact component={ParentInfoPage}/>
        <Route path="/login/form3" exact component={PaymentInfoPage}/>
        
      </Switch> */}
      <PersonalInfoPage />
    </div>
  );
}

export default Body;
