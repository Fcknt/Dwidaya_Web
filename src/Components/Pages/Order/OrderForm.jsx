import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../Modal/Modal";
import { Confirm } from "../../Modal/Confirm";
import { FcInfo, FcCancel } from "react-icons/fc";
import { GiConfirmed } from "react-icons/gi";
import { Success } from "../../Modal/Success";
import "./order.scss";

export const OrderForm = () => {
  const navigate = useNavigate();

  const [booking, setBooking] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    streetNumber: "",
    city: "",
    postalCode: "",
  });

  const [error, setError] = useState(false);
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const [openModalCancel, setOpenModalCancel] = useState(false);
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setBooking((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setOpenModalConfirm(true);
  };

  useEffect(() => {
    setTimeout(() => {
      error && setError(false);
    }, 5000);
  }, [error]);

  return (
    <>
      <div className="order-container">
        <form onSubmit={onSubmit}>
          <h1>Order Form</h1>
          <div className="personal-information">
            <h1>Personal Information</h1>
            <div className="personal-input-name">
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                value={booking.firstName}
                onChange={onInputChange}
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={booking.lastName}
                onChange={onInputChange}
              />
            </div>
            <div className="personal-input-auth">
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={booking.email}
                onChange={onInputChange}
              />
              <input
                name="phone"
                type="number"
                placeholder="Phone Number"
                value={booking.phone}
                onChange={onInputChange}
              />
            </div>
          </div>
          <div className="personal-information">
            <h1>Address</h1>
            <div className="personal-input-name">
              <input
                name="streetNumber"
                type="text"
                placeholder="Street Number"
                value={booking.streetNumber}
                onChange={onInputChange}
              />
              <input
                name="city"
                type="text"
                placeholder="City"
                value={booking.city}
                onChange={onInputChange}
              />
            </div>
            <div className="personal-input-auth">
              <input
                name="postalCode"
                type="number"
                placeholder="Postal Code"
                style={{ width: "49.5%" }}
                value={booking.postalCode}
                onChange={onInputChange}
              />
            </div>
          </div>
          <button className="submit" type="submit">
            Continue
          </button>
          <button
            className="back"
            type="button"
            onClick={() => {
              setOpenModalCancel(true);
            }}
          >
            Cancel & Back
          </button>
        </form>
        {error && (
          <p className="error-message">
            Please Make Sure All Input Field Is Not Empty
          </p>
        )}
      </div>
      <Modal open={openModalConfirm}>
        <Confirm
          title="Confirm"
          icon={<FcInfo size={42} />}
          text="are you sure want to booking right now ?"
          setOpen={setOpenModalConfirm}
          fn={() => {
            for (const [_, value] of Object.entries(booking)) {
              if (value === "") {
                setError(true);
                setOpenModalConfirm(false);
                return;
              } else {
                setOpenModalConfirm(false);
                setOpenModalSuccess(true);
              }
            }
          }}
        />
      </Modal>
      <Modal open={openModalCancel}>
        <Confirm
          title="Cancel ?"
          icon={<FcCancel size={42} />}
          text="are you sure want to cancel And Back to Homepage ?"
          setOpen={setOpenModalCancel}
          fn={() => navigate("/dwidaya")}
        />
      </Modal>
      <Modal open={openModalSuccess}>
        <Success
          data={booking}
          icon={<GiConfirmed size={42} />}
          fn={() => navigate("/dwidaya")}
        />
      </Modal>
    </>
  );
};

