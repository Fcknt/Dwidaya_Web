import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./login.scss";

export const Login = () => {
  const navigate = useNavigate();

  // dummy account
  const checkLocalStorage = () => {
    const localStorageData = localStorage.getItem("user-access");
    if (localStorageData) {
      const userData = JSON.parse(localStorageData);
      setLocalData(userData);
    }
  };

  const [localData, setLocalData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // handle Input
  const [userLogin, setUserLogin] = useState({
    username: "",
    email: "",
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

  // handle login
  const onLogin = (e) => {
    e.preventDefault();
    if (userLogin.username !== "" && userLogin.password !== "") {
      if (
        (userLogin.username === localData.username ||
          userLogin.username === localData.email) &&
        userLogin.password === localData.password
      ) {
        setLoading(true);
        toast.success(`Wellcome Back ${userLogin.username}`, {});
        setTimeout(() => {
          localStorage.setItem(
            "login-info",
            JSON.stringify({ login: true, username: localData.email }),
          );
          navigate("../dwidaya");
        }, 3000);
      } else {
        toast.error("Woops, Username and Password Not Found", {});
        setError(true);
      }
    } else {
      toast.error("Woops, Username and Password Not Found", {});
      setError(true);
    }
  };

  useEffect(() => {
    const time = setTimeout(() => {
      checkLocalStorage();
    }, 500);
    return () => clearTimeout(time);
  }, []);

  return (
    <div className="login-section">
      <form onSubmit={onLogin}>
        <h2>Login Page</h2>
        <input
          name="username"
          type="text"
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
        <div className="login-or-signup">
          <button type="submit">Login</button>
          <button type="button" onClick={() => navigate("/signup")}>
            Signup
          </button>
        </div>
        {error && (
          <p className="error">Woops, Username and Password Not Found</p>
        )}
        {loading && <p className="loading">Loading ...</p>}
      </form>
    </div>
  );
};

