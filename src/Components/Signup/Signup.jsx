import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.scss";

export const Signup = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setIsSignUp((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onReset = () => {
    setIsSignUp({
      username: "",
      email: "",
      password: "",
    });
    setError(false);
  };

  const onSignup = (e) => {
    e.preventDefault();
    if (isSignUp.username && isSignUp.email && isSignUp.password) {
      setLoading(true);
      localStorage.setItem("user-access", JSON.stringify(isSignUp));
      setTimeout(() => {
        navigate("../login");
      }, 2000);
    } else {
      setError(true);
      setTimeout(() => {
        onReset();
      }, 3000);
    }
  };

  return (
    <div className="login-section-signup">
      <form onSubmit={onSignup}>
        <h2>SignUp Page</h2>
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={onHandleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={onHandleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={onHandleChange}
        />
        <div className="login-or-signup">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => navigate("/login")}>Login</button>
        </div>
        {error && <p className="error">Field Cannot Be Empty</p>}
        {loading && <p className="loading">Loading...</p>}
      </form>
    </div>
  );
};

