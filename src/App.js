import Header from "./Home/Header";
import { Switch, Route } from "react-router-dom";
import NriLogin from "./components/NriLogin";
import NriRegister from "./components/NriRegister";
import Hero from "./Home/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Check from "./Home/Check";
import { About } from "./Home/About";

function App() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Hero />
          <About />
        </Route>
        <Route path="/nri" component={NriRegister} />
        <Route path="/login" component={NriLogin} />
      </Switch>
    </>
  );
}
export default App;
