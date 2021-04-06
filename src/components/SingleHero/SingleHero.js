import { useState, useEffect } from "react";
import { db } from "../../Firestore/firebase";
import "./SingleHero.css";
import { useParams } from "react-router-dom";

function GetSingleHero() {
  let [hero, setCurrentHero] = useState({});
  const params = useParams();
  useEffect(() => {
    db.collection("heroes")
      .doc(params.heroId)
      .get()
      .then((snapshot) => {
        setCurrentHero(snapshot.data());
      });
  }, [params.heroId]);
  return hero;
}

const SingleHero = () => {
  const currentHero = GetSingleHero();
  console.log(currentHero);
  return (
    <div>
      <div className="current-hero">
        <div className="hero-info">
          <p>Class: {currentHero.heroClass}</p>
          <p>Name: {currentHero.heroName}</p>
          <p>Description:</p>
          <p className="description">{currentHero.heroDescription}</p>
          <p className="created-by">Created by: {currentHero.createdBy}</p>
        </div>
        <div>
          <img src={currentHero.heroImageURL} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default SingleHero;
