import { Redirect, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../Firestore/firebase";
import { Badge } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import HeroCard from "../AllHeroes/HeroCard";
import "./MyHeroes.css";

const MyHeroes = () => {
  const [heroes, setHeroes] = useState([]);
  const { currentUser } = useAuth();

  function onDeleteHandler(heroId) {
    db.collection("heroes").doc(heroId).delete();
  }

  useEffect(() => {
    db.collection("heroes").onSnapshot((snapshot) => {
      const newHeroes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setHeroes(newHeroes.filter((h) => h.createdBy === currentUser.email));
    });
  }, [heroes, currentUser.email]);

  if (!currentUser) {
    return <Redirect exact to="/"></Redirect>;
  }
  return (
    <div className="text-center text-light">
      <h1>
        <Badge variant="info">My Heroes</Badge>
      </h1>
      <Link className="Create-hero-link" to="/create">
        CREATE HERO
      </Link>
      <br />
      <div className="text-center border-warning">
        <section
          className="d-flex flex-row justify-content-center"
          style={{ width: "100%" }}
        >
          {heroes.map((hero) => (
            <div key={hero.heroImageURL} className="hero-card">
              <HeroCard key={hero.id} {...hero} />
              <div key={hero.heroName}>
                <Link
                  key={hero.heroDescription}
                  to={`${hero.id}/edit`}
                  className="edit"
                >
                  Edit
                </Link>
                <button
                  onClick={() => onDeleteHandler(hero.id)}
                  key={hero.createdBy}
                  className="delete"
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default MyHeroes;
