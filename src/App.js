import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { First } from "./Components/Pages/First";
import { Login } from "./Components/Login/Login";
import { Signup } from "./Components/Signup/Signup";
import "./App.css";

const App = () => {
  const access = [
    {
      id: 1,
      path: "/",
      element: <First />,
    },
    {
      id: 2,
      path: "/Login",
      element: <Login />,
    },
    {
      id: 3,
      path: "/Signup",
      element: <Signup />,
    },
  ];
  return (
    <Router>
      <Routes>
        {access.map((item) => (
          <Route key={item.id} path={item.path} element={item.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;

