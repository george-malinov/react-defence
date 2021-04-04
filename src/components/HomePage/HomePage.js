import "./HomePage.css";
import video from "../../Resoures/dota_montage_02.mp4";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const HomePage = () => {
  const { currentUser } = useAuth();
  return (
    <div className="home-page">
      <video type="vide/mp4" src={video} autoPlay={true} loop={true}></video>
      <p className="info-message">"A MODERN MULTIPLAYER MASTERPIECE"</p>
      {!currentUser && (
        <p className="login-message">
          Please{" "}
          <Link to="/login" className="login-btn">
            Log In
          </Link>{" "}
          to explore the heroes
        </p>
      )}
      {currentUser && (
        <p className="login-message">
          Now you can explore the{" "}
          <Link to="/all" className="login-btn">
            HEROES
          </Link>{" "}
          of the game!
        </p>
      )}
    </div>
  );
};

export default HomePage;
