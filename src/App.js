import Header from "./Home/Header";
import { Switch, Route,Redirect } from "react-router-dom";
import NriLogin from "./components/login/NriLogin";
import Hero from "./Home/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { About } from "./Home/About";
import RegisterPage from "./components/register/RegisterPage";
// import ParentInfoPage from "./components/Details/ParentForm/ParentInfoPage";
// import PersonalInfoPage from "./components/Details/PersonalForm/PersonalInfoPage";
// import { ToastContainer, toast, Zoom, Bounce} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import NriForm from "./components/Details/NriForm";
import Error from "./components/Details/Error";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  const access = localStorage.getItem("access_token");
  return (
    <>
      {access ? (
        <Switch>
          <Route path="/" exact>
            <Header />
            <Hero />
            <About />
          </Route>
          <Route path="/form" component={NriForm} />
          {/* <Route path="/404" component={Error} /> <Redirect to="/404" /> */}
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact>
            <Header />
            <Hero />
            <About />
          </Route>
          <Route path="/nri" component={RegisterPage} />
          <Route path="/login" component={NriLogin} />
          {/* <Route path="/404" component={Error} /> <Redirect to="/404" /> */}
        </Switch>
      )}
      {/* <NriForm /> */}
    </>
  );
}
export default App;
