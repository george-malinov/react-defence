import { useRef, useState } from "react";
import "./User.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const LogIn = ({ history }) => {
  let emailRef = useRef();
  let passwordRef = useRef();
  const { logIn } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  function logInHandle(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      logIn(emailRef.current.value, passwordRef.current.value).then(() => {
        history.push("/all");
      });
      emailRef = "";
      passwordRef = "";
    } catch (err) {
      if (err.message === "The email address is badly formatted.") {
        setError("Invalid email! Please try again.");
      } else if (
        err.message ===
        "The password is invalid or the user does not have a password."
      ) {
        setError("Invalid password!");
      } else if (
        err.message ===
        "There is no user record corresponding to this identifier. The user may have been deleted."
      ) {
        setError("No such user! Please register.");
      }
    }
    setLoading(false);
  }

  return (
    <form onSubmit={logInHandle} className="col-md-4 offset-4 user-box">
      <h3>Log in</h3>
      {error && <p className="alert">{error}</p>}
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          ref={emailRef}
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          ref={passwordRef}
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div>
        <button disabled={loading} className="btn btn-info btn-lg btn-block">
          Log In
        </button>
      </div>
      <div>
        <p>
          You don't have an account? <Link to="signup">Sign Up </Link>!
        </p>
      </div>
    </form>
  );
};

export default LogIn;
