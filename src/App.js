import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./Context/AuthContext";
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
      <AuthProvider>
        <Header />
        <Container className="wrapper">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Route path="/all" exact component={AllHeroes} />
          </Switch>
        </Container>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
