import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import AllHeroes from "./components/AllHeroes/AllHeroes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import SignUp from "./components/User/SignUp";
import LogIn from "./components/User/LogIn";

function App() {
  return (
    <>
      <Header />
      <Container className="wrapper">
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />          
          <Route path="/all" exact component={AllHeroes} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Container>
      <Footer />
    </>
  );
}

export default App;
