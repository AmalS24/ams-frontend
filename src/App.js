import Header from "./Home/Header";
import { Switch, Route } from "react-router-dom";
import NriLogin from "./components/login/NriLogin";
import Hero from "./Home/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { About } from "./Home/About";
import RegisterPage from "./components/register/RegisterPage";
import DetailsPage from "./components/Details/DetailsPage";
import ParentInfoPage from "./components/Details/ParentInfoPage";
import PaymentInfoPage from "./components/Details/PaymentInfoPage";
import PersonalInfoPage from "./components/Details/PersonalInfoPage";
import Body from "./components/Details/Body";
import TitleBar from "./components/Details/TitleBar";

function App() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
     <>
      {/* <DetailsPage/> */}
      <Switch>
        <Route path="/" exact>
          <Header />
          <Hero />
          <About />
        </Route>
        <Route path="/nri" exact component={RegisterPage} />
        <Route path="/login" exact component={NriLogin} />
         {/* <Route path="/login/form" >
          <TitleBar />
          <Body />
          <PersonalInfoPage />
        </Route>
        <Route path="/login/form2" >
          <TitleBar />
          <Body />
          <ParentInfoPage />
        </Route> */}
        <Route path="/login/form" exact component={DetailsPage} />
        <Route path="/login/form2" exact component={ParentInfoPage}/>
        <Route path="/login/form3" exact component={PaymentInfoPage}/>
      </Switch>
    </>
  );
}
export default App;
