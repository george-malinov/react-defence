import "./HomePage.css";
import video from "../../Resoures/dota_montage_02.mp4";

const HomePage = () => {
  return (
    <div className="home-page">
      <p>"A MODERN MULTIPLAYER MASTERPIECE"</p>
      <video type="vide/mp4" src={video} autoPlay={true} loop={true}></video>
    </div>
  );
};

export default HomePage;
