import Header from "./Home/Header";
import { Switch, Route } from "react-router-dom";
import NriLogin from "./components/NriLogin";
import NriRegister from "./components/NriRegister";
import Hero from "./Home/Hero";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import Check from "./Home/Check";

function App() {

  useEffect(() => {
    Aos.init({duration : 2000});
  }, []);

  return (
    <div className="h-screen w-screen  min-w-screen">
      <Switch>
        <Route path="/" exact>
          <Header />
          <Hero />
          {/* <Check /> */}
        </Route>
        <Route path="/nri" component={NriRegister} />
        <Route path="/login" component={NriLogin} />
      </Switch>
    </div>
  );
}
export default App;
