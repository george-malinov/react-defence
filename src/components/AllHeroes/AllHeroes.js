import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../Firestore/firebase";
import { Badge } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import HeroCard from "./HeroCard";
import "./AllHeroes.css";

const AllHeroes = () => {
  const [heroes, setHeroes] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    db.collection("heroes").onSnapshot((snapshot) => {
      const newHeroes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setHeroes(newHeroes);
    });
  }, []);

  if (!currentUser) {
    return <Redirect exact to="/"></Redirect>;
  }
  return (
    <div className="text-center text-light">
      <h1>
        <Badge variant="info">All Heroes</Badge>
      </h1>
      <br />
      <div className="text-center border-warning">
        <section
          className="d-flex flex-row justify-content-center"
          style={{ width: "100%" }}
        >
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default AllHeroes;
