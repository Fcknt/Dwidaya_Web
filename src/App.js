import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { Homepage } from "./Components/Pages/Homepage";
import { Login } from "./Components/Login/Login";
import { Signup } from "./Components/Signup/Signup";
import { DestinationInfo } from "./Components/Pages/Destination/DestinationInfo";
import { OrderFormPhaseOne } from "./Components/Pages/Order/Phase1/OrderFormPhaseOne";
import { OrderFormPhaseTwo } from "./Components/Pages/Order/Phase2/OrderFormPhaseTwo";
import { DetailOffers } from "./Components/Pages/DetailOffers/DetailOffer";
import "react-toastify/dist/ReactToastify.css";
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
        element: <OrderFormPhaseOne />,
      },
      {
        path: "order/information/:title",
        element: <OrderFormPhaseTwo />,
      },
      {
        path: "offers/:location",
        element: <DetailOffers />
      }
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

