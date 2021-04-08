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
        <div className="messages">
          <p className="login-message">
            Now you can explore all of the heroes{" "}
            <Link to="/all" className="login-btn">
              HERE !
            </Link>
          </p>
          <p className="login-message">
            Or you can create your custom hero{" "}
            <Link to="/create" className="login-btn">
              HERE !
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
