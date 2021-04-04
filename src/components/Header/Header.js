import { NavLink, useHistory } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../../Context/AuthContext";
const Header = () => {
  const { currentUser, logOut } = useAuth();
  const history = useHistory();
  function logOutHandle(e) {
    e.preventDefault();
    logOut();
    history.push("/");
  }

  return (
    <header>
      <nav className="navbar">
        <div className="navbar--link">
          <NavLink className="navbar--link-item" to="/">
            DOTA 2
          </NavLink>
        </div>
        {currentUser && (
          <p className="welcome-user">Welcome {currentUser.email} !</p>
        )}
        {!currentUser && <p className="welcome-guest">Welcome Guest !</p>}
        <div className="navbar--link">
          {!currentUser && (
            <NavLink className="navbar--link-item" to="/signup">
              SIGN UP
            </NavLink>
          )}
          {!currentUser && (
            <NavLink className="navbar--link-item" to="/login">
              LOG IN
            </NavLink>
          )}
          {currentUser && (
            <form onSubmit={logOutHandle}>
              <button className="navbar--link-item logoutbutton">
                LOG OUT
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
