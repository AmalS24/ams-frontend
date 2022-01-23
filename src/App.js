import Header from "./Home/Header";
import { Switch, Route, Redirect } from "react-router-dom";
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
import { Offline, Online } from "react-detect-offline";
import "react-toastify/dist/ReactToastify.css";
import NriForm from "./components/Details/NriForm";
import Error from "./components/Details/Error";
import OfflinePage from "./OfflinePage";

function App() {
  const access = localStorage.getItem("access_token");
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Online>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Hero />
            <About />
          </Route>
          <Route path="/nri" component={RegisterPage} />
          <Route path="/login" component={NriLogin} />
          {access ? <Route path="/form" component={NriForm} /> : <Route path="/form" component={Error} />}
        </Switch>
      </Online>
      {/* <NriForm /> */}
      <Offline>
        <OfflinePage />
      </Offline>
    </>
  );
}
export default App;
