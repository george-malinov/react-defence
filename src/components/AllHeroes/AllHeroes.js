import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../Firestore/firebase";
import { Card, Badge } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";

function GetAllHeroes() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    db.collection("heroes").onSnapshot((snapshot) => {
      const newHeroes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setHeroes(newHeroes);
    });
  }, []);
  return heroes;
}

const AllHeroes = () => {
  const { currentUser } = useAuth();
  const heroes = GetAllHeroes();
  if(!currentUser){
    return <Redirect exact to="/"></Redirect>
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
            <Card key={hero.id} className="bg-primary ml-2 ml-lg-2 text-dark">
              <Card.Title>{hero.heroName}</Card.Title>
              <Card.Img
                src={hero.heroImageURL}
                style={{ width: "90px", height: "90px", cursor: "pointer" }}
              />
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
};

export default AllHeroes;
