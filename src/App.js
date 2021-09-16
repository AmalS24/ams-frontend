import Content from "./Home/Content";
import Footer from "./Home/Footer";
import { Header } from "./Home/Header";
import Hero from "./Home/Hero";
import NriRegister from "./components/NriRegister";
import {Switch, Route} from "react-router-dom";
import NriLogin from "./components/NriLogin";
import NriDetaisl_1 from "./components/NriDetails_1";
import NriDetails_2 from "./components/NriDetails_2";
import NriDetails_3 from "./components/NriDetails_3";
import NriDetails_4 from "./components/NriDetails_4";



function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Content />
          <Hero />
          <Footer />
        </Route>
        <Route path="/nri" component={NriRegister} />
        <Route path="/login" component={NriLogin} />
        <Route path="/nridetails_1" component={NriDetaisl_1} />
        <Route path="/nridetails_2" component={NriDetails_2} />
        <Route path="/nridetails_3" component={NriDetails_3} />
        <Route path="/nridetails_4" component={NriDetails_4} />
      </Switch>
    </>
  );
}
export default App;
