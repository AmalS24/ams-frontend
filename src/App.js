import React from "react";
import HomePage from "./Home/HomePage";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import NriRegister from "./Forms/NriRegister";
import Hero from "./Home/Hero";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //  to toggle mobile-menu with screen size >768px
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage toggle={toggle} isOpen={isOpen} />
          <Hero />
        </Route>
        <Route path="/nri">
          <NriRegister />
        </Route>
      </Switch>
    </>
  );
}

export default App;
