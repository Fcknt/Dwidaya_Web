import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { offerInformation } from "../../data/offer";
import Aos from "aos";
import "aos/dist/aos.css";
import "./offer.scss";

const Coba = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="offer container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTtile">Special Offers</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
            vitae quis explicabo neque nesciunt blanditiis?
          </p>
        </div>

        <div className="mainContent grid">
          {offerInformation.map(
            ({
              id,
              imgSrc,
              location,
              price,
              discount,
              facilities: { bed, bath, wifi, shuttel },
            }) => {
              return (
                <div
                  key={id}
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="singleOffer"
                >
                  <div className="destImage">
                    <img src={imgSrc[0]} alt="pic-title" />
                    <span className="discount">{discount}% Off</span>
                  </div>

                  <div className="offerBody">
                    <div className="price flex">
                      <h4>{price}</h4>
                      <span className="status">For Rent</span>
                    </div>

                    <div className="amenities flex">
                      <div className="singleAmenity flex">
                        <MdKingBed className="icon" />
                        <small>{bed}</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdBathtub className="icon" />
                        <small>{bath}</small>
                      </div>
                      <div className="singleAmenity flex">
                        <FaWifi className="icon" />
                        <small>{wifi}</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdAirportShuttle className="icon" />
                        <small>{shuttel}</small>
                      </div>
                    </div>

                    <div className="location flex">
                      <MdLocationOn className="icon" />
                      <small>alamat,{location}.</small>
                    </div>
                    <button
                      className="btn flex"
                      onClick={() => {
                        navigate(`offers/${location}`);
                      }}
                    >
                      View Details
                      <BsArrowRightShort className="icon" />
                    </button>
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
};

export default Coba;

