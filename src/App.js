import Content from "./Home/Content";
import Footer from "./Home/Footer";
import { Header } from "./Home/Header";
import Hero from "./Home/Hero";
import NriRegister from "./components/NriRegister";
import {Switch, Route} from "react-router-dom";


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
      </Switch>
    </>
  );
}
export default App;
