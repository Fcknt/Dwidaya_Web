import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { Homepage } from "./Components/Pages/Homepage";
import { Login } from "./Components/Login/Login";
import { Signup } from "./Components/Signup/Signup";
import { DestinationInfo } from "./Components/Pages/Destination/DestinationInfo";
import { OrderForm } from "./Components/Pages/Order/OrderForm";
import "./App.css";

export const router = createBrowserRouter([
  {
    path: "/dwidaya",
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "info/:id/:title",
        element: <DestinationInfo />,
      },
      {
        path: "order/:title",
        element: <OrderForm />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <Navigate to={"/dwidaya"} />,
  },
]);

