import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar--link">
          <Link className="navbar--link-item" to="/">Dota2 Heroes</Link>
        </div>
        <div className="navbar--link">
          <Link className="navbar--link-item" to="/all">
            All Heroes
          </Link>
          <Link className="navbar--link-item" to="/">
            Home
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
