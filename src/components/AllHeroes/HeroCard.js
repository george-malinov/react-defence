import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
const HeroCard = ({ id, heroName, heroImageURL }) => {
  return (
    <Card className="bg-primary ml-2 ml-lg-2 text-dark heroes">
      <Card.Title>{heroName}</Card.Title>
      <Link to={id}>
        <Card.Img
          src={heroImageURL}
          style={{ width: "60%", cursor: "pointer" }}
        />
      </Link>
    </Card>
  );
};

export default HeroCard;
