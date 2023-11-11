import "./success.scss";

export const Success = ({ icon, data, fn }) => {
  const { firstName, lastName, phone, email, streetNumber, city, postalCode } =
    data;
  return (
    <div className="success-container">
      <div className="success-headline">
        <h1>Booking Success</h1>
        <div>{icon}</div>
      </div>
      <div className="success-info">
        <p className="success-title">First Name</p>
        <p className="success-data">{firstName}</p>
        <p className="success-title">Last Name</p>
        <p className="success-data">{lastName}</p>
        <p className="success-title">Phone Number</p>
        <p className="success-data">{phone}</p>
        <p className="success-title">Email</p>
        <p className="success-data">{email}</p>
        <p className="success-title">Address</p>
        <div className="success-data">
          <span>{city}</span>
          <span>{streetNumber}</span>
          <span>{postalCode}</span>
        </div>
      </div>
      <button
        type="submit"
        onClick={() => {
          fn();
        }}
      >
        Back To Homepage
      </button>
    </div>
  );
};

