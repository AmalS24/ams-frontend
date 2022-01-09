import Header from "./Home/Header";
import { Switch, Route } from "react-router-dom";
import NriLogin from "./components/login/NriLogin";
import Hero from "./Home/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { About } from "./Home/About";
import RegisterPage from "./components/register/RegisterPage";
import ParentInfoPage from "./components/Details/ParentForm/ParentInfoPage";
import PersonalInfoPage from "./components/Details/PersonalForm/PersonalInfoPage";
import PersonalInfoPage1 from "./components/Details/PersonalInfoPage";
import { ToastContainer, toast, Zoom, Bounce} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  
  return (
     <>
       <Switch>
        <Route path="/" exact>
          <Header />
          <Hero />
          <About />
        </Route>
        <Route path="/nri" component={RegisterPage} />
        <Route path="/login" component={NriLogin} />
      </Switch> 
      {/* <ParentInfoPage /> */}
    </>
  );
}
export default App;
