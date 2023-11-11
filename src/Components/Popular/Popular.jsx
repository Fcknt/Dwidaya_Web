import React, { useEffect } from "react";
import Aos from "aos";
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { popularDestination } from "../../data/popular";
import "aos/dist/aos.css";
import "./popular.scss";

const Coba = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secheader flex">
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="textDiv"
          >
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              consequatur iste molestiae nostrum reiciendis praesentium incidunt
              vel architecto nulla sit?
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            className="iconsDiv flex"
          >
            <BsArrowLeftShort className="icon leftIcon " />
            <BsArrowRightShort className="icon" />
          </div>
        </div>
        <div className="mainContent grid">
          {popularDestination.map(({ id, image, title, location }) => {
            return (
              <div
                key={id}
                data-aos="fade-up"
                data-aos-duration="2500"
                className="singleDestination"
              >
                <div className="destImage">
                  <img src={image} alt={title} />

                  <div className="overlayInfo">
                    <h3>{title}</h3>
                    <p>{location}</p>
                    <BsArrowRightShort
                      className="icon"
                      onClick={() => navigate(`info/${id}/${title}`)}
                    />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">0{id}</div>
                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      Dot
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Coba;

