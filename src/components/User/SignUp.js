import "./User.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <form className="col-md-4 offset-4 user-box">
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            required
          />
        </div>

        <button type="submit" className="btn btn-info btn-lg btn-block">
          Sign in
        </button>

        <div>
          <p>
            You already have an account? <Link to="login">Log In </Link>!
          </p>
        </div>
      </form>
    </>
  );
};

export default SignUp;
