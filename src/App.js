import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import AllHeroes from "./components/AllHeroes/AllHeroes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={AllHeroes} />
        </Switch>
      </Container>
      <Footer />
    </>
  );
}

export default App;
