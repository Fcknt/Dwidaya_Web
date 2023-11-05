import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();

  // dummy account
  const isAccount = {
    username: "aldi@gmail.com",
    password: "aldi",
  };

  // handle Input
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

  // handle Error
  const [error, setError] = useState(false);

  // handle Loading
  const [loading, setLoading] = useState(false);

  // handle Input Change
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setUserLogin((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // reset error reset field
  const onReset = () => {
    setError(false);
    setUserLogin({ username: "", password: "" });
  };

  // handle login
  const onLogin = (e) => {
    e.preventDefault();
    if (
      isAccount.username === userLogin.username &&
      isAccount.password === userLogin.password
    ) {
      setLoading(true);
      setTimeout(() => {
        localStorage.setItem(
          "login-info",
          JSON.stringify({ login: true, username: isAccount.username }),
        );
        navigate("../");
      }, 3000);
    } else {
      setError(true);
      setTimeout(() => onReset(), 3000);
    }
  };

  return (
    <div className="login-section">
      <form onSubmit={onLogin}>
        <h2>Login Page</h2>
        <input
          name="username"
          type="email"
          placeholder="Email"
          value={userLogin.username}
          onChange={onHandleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={userLogin.password}
          onChange={onHandleChange}
        />
        <button type="submit">Login</button>
        {error && (
          <p className="error">Woops, Username and Password Not Found</p>
        )}
        {loading && <p className="loading">Loading ...</p>}
      </form>
    </div>
  );
};

export default Login;

