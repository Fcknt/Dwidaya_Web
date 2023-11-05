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
          <a href="#" className="logo">
            <h1 className="flex">
              <SiYourtraveldottv className="icon" />
              Dwidaya
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Products
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Resources
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Contacts
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Blog
              </a>
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
                  onClick={() => navigate("/login")}
                  className="btn LoginBtn"
                >
                  <a href="#">Login</a>
                </button>

                <button className="btn ">
                  <a href="#">Sign Up</a>
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

