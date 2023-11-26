import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "./order.scss";

export const OrderFormPhaseOne = () => {
  const { title } = useParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    values: {
      name: "",
      phoneNumber: "",
      email: "",
      date: "",
    },
  });

  const popupMessage = (message, type) => {
    toast[type](message, {});
  };

  const onSubmitRequirement = (data) => {
    const { name, phoneNumber, email, date } = data;
    if (!name || !phoneNumber || !email || !date) {
      for (const i in data) {
        setError(i, {
          type: "manual",
          message: "Required",
        });
      }
      popupMessage("All Input Field Is Required", "error");
    } else {
      localStorage.setItem("contactDetails", JSON.stringify(data));
      popupMessage("Data Successfuly Updated", "success");
      navigate(`/dwidaya/order/information/${title}`);
    }
  };

  return (
    <>
      <div className="container-order">
        <div className="banner-order">
          <h1>Order Form</h1>
        </div>
        <div className="container-form">
          <div className="order-heading">
            <h1>Post Your Requirement</h1>
            <p>
              Please fill the form below to receive a invoice of your order.
              Please add all the details required.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmitRequirement)}
            className="form-order"
          >
            <div className="form-info">
              <h1>Contact Details</h1>
              <p>
                Please fill your information so we can get in touch with you
              </p>
            </div>
            <div className="label-input">
              <label>Name</label>
              <input type="text" placeholder="Name" {...register("name")} />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
            <div className="label-input">
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Phone Number"
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <p className="error">{errors.phoneNumber.message}</p>
              )}
            </div>
            <div className="label-input">
              <label>Email</label>
              <input type="text" placeholder="Email" {...register("email")} />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <div className="label-input">
              <label>Date</label>
              <input type="date" placeholder="Date" {...register("date")} />
              {errors.date && <p className="error">{errors.date.message}</p>}
            </div>
            <button type="submit">Next</button>
          </form>
        </div>
      </div>
    </>
  );
};

