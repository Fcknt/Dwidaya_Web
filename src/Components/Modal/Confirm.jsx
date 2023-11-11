import "./confirm.scss";

export const Confirm = ({ setOpen, title, text, icon, fn }) => {
  return (
    <div className="confirm-container">
      <div className="confirm-info">
        <div className="confirm-headline">
          <h1>{title}</h1>
          <div>{icon}</div>
        </div>
        <p>{text}</p>
      </div>
      <div className="button-action">
        <button
          type="submit"
          onClick={() => {
            fn();
          }}
          className="confirm"
        >
          Yes, Confirm
        </button>
        <button onClick={() => setOpen(false)} type="button" className="cancel">
          Cancel
        </button>
      </div>
    </div>
  );
};

