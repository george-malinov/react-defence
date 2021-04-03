import "./User.css";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <form className="col-md-4 offset-4 user-box">
      <h3>Log in</h3>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div>
        <button className="btn btn-info btn-lg btn-block">Log In</button>
      </div>
      <div>
        <p>
          You don't have an account? <Link to="signup">Sign In </Link>!
        </p>
      </div>
    </form>
  );
};

export default LogIn;
