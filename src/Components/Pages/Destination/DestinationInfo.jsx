import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { popularDestination } from "../../../data/popular";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./destination.scss";

export const DestinationInfo = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);

  const [cardInformation, setCardInformation] = useState({
    id: "",
    image: "",
    title: "",
    location: "",
    information: "",
    orderLink: "",
  });

  const getDataPopular = () => {
    popularDestination.find((item) => {
      if (item.id === Number(id)) {
        setCardInformation({
          id: item.id,
          image: item.image,
          title: item.title,
          location: item.location,
          information: item.information,
          orderLink: item.orderLink,
        });
      }
    });
  };

  const userIsLogin = () => {
    const localData = JSON.parse(localStorage.getItem("login-info"));
    return localData?.login ? setIsLogin(true) : setIsLogin(false);
  };

  useEffect(() => {
    const time = setTimeout(() => {
      userIsLogin();
      getDataPopular();
    }, 500);
    return () => clearTimeout(time);
  }, []);

  return (
    <div className="card-container">
      <img src={cardInformation.image} alt={cardInformation.title} />
      <div className="card-title">
        <div className="card-information">
          <div className="card-discover">
            <span>Discover the World with</span>
            <span>Dwidaya Tour</span>
          </div>
          <div className="card-headline">
            <span>{cardInformation.title}</span>
            <span>{cardInformation.information}</span>
          </div>
        </div>
        {isLogin ? (
          <button
            className="order"
            onClick={() => navigate(`/dwidaya/order/${cardInformation.location}`)}
          >
            <span>Book Now</span>
            <IoIosArrowForward color={"#559BFF"} />
          </button>
        ) : (
          <button className="order" onClick={() => navigate("/login")}>
            <span>Login Now</span>
            <IoIosArrowForward color={"#559BFF"} />
          </button>
        )}
        <button
          className="back"
          onClick={() =>
            navigate("/dwidaya", {
              state: { scrollToContent: true },
              replace: true,
            })
          }
        >
          <IoIosArrowBack
            color={"#000000"}
            size={36}
            style={{ margin: ".25rem .25rem 0 0" }}
          />
        </button>
      </div>
    </div>
  );
};

