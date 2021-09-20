import React from "react";
import HomePage from "./Home/HomePage";
import { useState, useEffect } from "react";

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
      <HomePage toggle={toggle} isOpen={isOpen} />
    </>
  );
}

export default App;
