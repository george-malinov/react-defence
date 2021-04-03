import "./HomePage.css";
import video from "../../Resoures/dota_montage_02.mp4";
import {Link} from "react-router-dom"

const HomePage = () => {
  return (
    <div className="home-page">
      <video type="vide/mp4" src={video} autoPlay={true} loop={true}></video>
      <p className = "info-message">"A MODERN MULTIPLAYER MASTERPIECE"</p>
      <p className="login-message">Please <Link to="/login" className="login-btn">Log In</Link> to explore the heroes</p>
    </div>    
  );
};

export default HomePage;
