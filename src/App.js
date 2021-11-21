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

function App() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
     <>
    {/* // <DetailsPage/> */}
      <Switch>
        <Route path="/" exact>
          <Header />
          <Hero />
          <About />
        </Route>
        <Route path="/nri" component={RegisterPage} />
        <Route path="/login" component={NriLogin} />
      </Switch>
    </>
  );
}
export default App;
