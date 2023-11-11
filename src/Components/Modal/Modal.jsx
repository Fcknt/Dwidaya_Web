import "./modal.scss";

export const Modal = ({ open, children }) => {
  return (
    <dialog open={open}>
      <div className="chill">{children}</div>
    </dialog>
  );
};

