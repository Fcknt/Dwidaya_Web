import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { popularDestination } from "../../../../data/popular";
import { Modal } from "../../../Modal/Modal";
import { Invoice } from "../Phase3/Invoice";
import "./extends.scss";

export const OrderFormPhaseTwo = () => {
  const { title } = useParams();

  const navigate = useNavigate();

  const [openModalInvoice, setOpenModalInvoice] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm({
    values: {
      location: "",
      nop: "",
      checkIn: "",
      checkOut: "",
      room: "",
      specs: "",
      additional: "",
    },
  });

  const popupInformation = (message, type) => {
    toast[type](message, {});
  };

  const onSubmitInformation = (data) => {
    const { location, nop, checkIn, checkOut, room, specs, additional } = data;
    if (!location || !nop || !checkIn || !checkOut || !room || !specs) {
      for (const i in data) {
        if (i === "nop") {
          setError(i, {
            type: "pattern",
            message: "Value Should Be Number",
          });
        } else {
          setError(i, {
            type: "manual",
            message: "Required",
          });
        }
      }
      popupInformation("All Field Is Required", "error");
    } else if (watch("specs") === "yes" && !additional) {
      setError(additional, {
        type: "manual",
        message: "Required",
      });
    } else {
      localStorage.setItem("dataRequirement", JSON.stringify(data));
      popupInformation("Congratulation Your Order Was Complete", "success");
      setTimeout(() => {
        setOpenModalInvoice(true);
      }, 1000);
    }
  };

  return (
    <>
      <div className="container-order">
        <div className="banner-order">
          <h1>Order Form</h1>
        </div>
        <div className="container-form">
          <form
            onSubmit={handleSubmit(onSubmitInformation)}
            className="form-order"
          >
            <div className="form-info">
              <h1>Your Requirement</h1>
            </div>
            <div className="label-input">
              <label>Location</label>
              <select {...register("location")}>
                <option value="" disabled hidden>
                  Location
                </option>
                {popularDestination.map((item) => (
                  <option key={item.id} value={item.location}>
                    {item.location}
                  </option>
                ))}
              </select>
              {errors.location && (
                <p className="error">{errors.location.message}</p>
              )}
            </div>
            <div className="label-input">
              <label>Number Of People</label>
              <input type="type" placeholder="1" {...register("nop")} />
              {errors.nop && <p className="error">{errors.nop.message}</p>}
            </div>
            <div style={{ display: "flex", gap: "2rem" }}>
              <div className="label-input">
                <label>Check in</label>
                <input type="date" {...register("checkIn")} />
                {errors.checkIn && (
                  <p className="error">{errors.checkIn.message}</p>
                )}
              </div>
              <div className="label-input">
                <label>Check out</label>
                <input type="date" {...register("checkOut")} />
                {errors.checkOut && (
                  <p className="error">{errors.checkOut.message}</p>
                )}
              </div>
            </div>
            <div className="label-input">
              <label>Room</label>
              <select {...register("room")}>
                <option value="" disabled hidden>
                  Room
                </option>
                {[
                  { id: 1, room: "Single Bed" },
                  { id: 2, room: "Double Bed" },
                  { id: 3, room: "Family Room" },
                ].map((item) => (
                  <option key={item.id} value={item.room}>
                    {item.room}
                  </option>
                ))}
              </select>
              {errors.room && <p className="error">{errors.room.message}</p>}
            </div>
            <div className="label-input">
              <label>Any Specification Preferences</label>
              <select {...register("specs")}>
                <option value="" disabled hidden>
                  Optional
                </option>
                {[
                  { id: 1, opts: "yes" },
                  { id: 2, opts: "no" },
                ].map((item) => (
                  <option key={item.id} value={item.opts}>
                    {item.opts}
                  </option>
                ))}
              </select>
              {errors.specs && <p className="error">{errors.specs.message}</p>}
            </div>
            <div className="label-input">
              {watch("specs") === "yes" && (
                <textarea
                  placeholder="Please mention here"
                  {...register("additional")}
                />
              )}
              {watch("specs") === "yes" && errors.additional && (
                <p className="error">{errors.additional.message}</p>
              )}
            </div>
            <div className="button-order">
              <button
                type="button"
                onClick={() => navigate(`/dwidaya/order/${title}`)}
              >
                Back
              </button>
              <button type="submit">Next</button>
            </div>
          </form>
        </div>
      </div>
      <Modal open={openModalInvoice}>
        <Invoice setOpen={setOpenModalInvoice} />
      </Modal>
    </>
  );
};

