import { useRef, useState } from "react";
import "./User.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const SignUp = () => {
  let emailRef = useRef();
  let passwordRef = useRef();
  let confirmPasswordRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const history = useHistory();

  async function signUpHandle(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match!");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push("/login");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }
  if (currentUser) {
    return <Redirect exact to="/" />;
  }
  return (
    <>
      <form onSubmit={signUpHandle} className="col-md-4 offset-4 user-box">
        <h3>Sign Up</h3>
        {error && <p className="alert">{error}</p>}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            ref={emailRef}
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            ref={passwordRef}
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
            ref={confirmPasswordRef}
            placeholder="Confirm password"
            required
          />
        </div>
        <button disabled={loading} className="btn btn-info btn-lg btn-block">
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
