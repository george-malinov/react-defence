import React from "react";
import { db } from "../../Firestore/firebase";
import "./SingleHero.css";
import { Link } from "react-router-dom";

class GetSingleHero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hero: {},
      heroSpells: [],
    };
  }
  componentDidMount() {
    db.collection("heroes")
      .doc(this.props.match.params.heroId)
      .get()
      .then((snapshot) =>
        this.setState({
          hero: snapshot.data(),
          heroSpells: snapshot.data().heroSpells,
        })
      );
  }
  render() {
    return (
      <div>
        <div className="current-hero">
          <div className="hero-info">
            <img
              className="heroImg"
              src={this.state.hero.heroImageURL}
              alt=""
            ></img>
            <p>Class: {this.state.hero.heroClass}</p>
            <p>Name: {this.state.hero.heroName}</p>
            <p>Description:</p>
            <p className="description">{this.state.hero.heroDescription}</p>
            <p className="created-by">
              Created by: {this.state.hero.createdBy}
            </p>
          </div>
          <div className="spells-wrapper">
            <h4>Spells</h4>
            {this.state.heroSpells.length !== 0 ? (
              this.state.heroSpells.map((spell) => (
                <div key={spell.spellName} className="hero-spells">
                  <img
                    className="spellImg"
                    src={spell.spellImageURL}
                    alt=""
                  ></img>
                  <div>
                    <p className="spell-info">
                      <strong>Name: </strong>
                      {spell.spellName}
                    </p>
                    <p className="spell-info">
                      <strong>Cooldown: </strong>
                      {spell.spellCd}
                    </p>
                    <p className="spell-info">
                      <strong>Damage: </strong>
                      {spell.spellDmg}
                    </p>
                    <p className="spell-info">
                      <strong>Description: </strong>
                      {spell.spellDescription}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>hahaha</p>
            )}
          </div>
        </div>
        <Link to="/all" type="button" className="backBtn">BACK</Link>
      </div>
    );
  }
}

export default GetSingleHero;
