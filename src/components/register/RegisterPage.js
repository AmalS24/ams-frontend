import React from "react";
import RegisterLogo from "./RegisterLogo";
import RegisterForm from "./RegisterForm";
import TitleBar from "./TitleBar";

const RegisterPage = () => {
        return (
            <div className="w-screen h-screen bg-trout-600 overflow-x-hidden">
              <TitleBar />
              <div className="w-screen h-screen sm:py-0 pt-96 items-center flex">
                <RegisterForm />
                <RegisterLogo />
              </div>
            </div>
          );
        }
        

export default RegisterPage
