import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNav = () => {
    setActive("navBar ");
  };

  const [transparent, setTransparent] = useState("header");

  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };

  window.addEventListener("scroll", addBg);

  // user auth state
  const [auth, setAuth] = useState({
    login: false,
    username: "",
  });

  // check when user login
  const isLogin = () => {
    const response = JSON.parse(localStorage.getItem("login-info")) ?? "";
    if (response.login) {
      setAuth({ login: response.login, username: response.username });
    } else {
      setAuth({ login: false, username: "" });
    }
  };

  // handle Logout
  const onLogout = () => {
    localStorage.removeItem("login-info");
    localStorage.removeItem("user-access");
    window.location.reload();
  };

  // check user interval
  useEffect(() => {
    isLogin();
  }, []);

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <h1 className="flex">
            <SiYourtraveldottv className="icon" />
            Dwidaya
          </h1>
        </div>
        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <span className="navLink">Home</span>
            </li>
            <li className="navItem">
              <span className="navLink">Products</span>
            </li>
            <li className="navItem">
              <span className="navLink">Resources</span>
            </li>
            <li className="navItem">
              <span className="navLink">Contacts</span>
            </li>
            <li className="navItem">
              <span className="navLink">Blog</span>
            </li>
            {auth.login ? (
              <div className="headerBtns flex">
                <button className="btn">
                  <p>{auth.username}</p>
                </button>
                <button className="btn" onClick={onLogout}>
                  <p>Logout</p>
                </button>
              </div>
            ) : (
              <div className="headerBtns flex">
                <button
                  onClick={() => navigate("/Login")}
                  className="btn LoginBtn"
                >
                  Login
                </button>
                <button className="btn" onClick={() => navigate("/Signup")}>
                  Sign Up
                </button>
              </div>
            )}
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;

