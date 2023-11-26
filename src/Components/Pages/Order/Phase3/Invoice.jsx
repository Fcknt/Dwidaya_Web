import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { popularDestination } from "../../../../data/popular";
import "./invoice.scss";

export const Invoice = () => {
  const navigate = useNavigate();

  const generateInvoice = () => Math.ceil(Math.random() * 200) + Math.random().toFixed(4);

  const [dataClient, setDataClient] = useState({});

  const getData = () => {
    const user = JSON.parse(localStorage.getItem("login-info"));
    const requirement = JSON.parse(localStorage.getItem("dataRequirement"));
    const contact = JSON.parse(localStorage.getItem("contactDetails"));
    setDataClient({
      data: {
        invoice: generateInvoice(),
        user,
        contact,
        requirement,
      },
    });
  };

  const findByName = popularDestination.filter(
    (item) =>
      item.location.toLowerCase() ===
      dataClient?.data?.requirement?.location.toLowerCase(),
  );

  function formatIDRPrice(price) {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
    return formattedPrice.replace(/\./g, ",");
  }

  useEffect(() => {
    const time = setTimeout(() => {
      getData();
    }, 500);
    return () => clearTimeout(time);
  }, []);

  return (
    <div className="container-invoice">
      <div className="inner-invoice">
        <div className="invoice">
          <h1>Invoice</h1>
          <div className="invoice-info">
            <p>Invoice No</p>
            <span>#{dataClient?.data?.invoice}</span>
          </div>
        </div>
        <div className="bill">
          <div className="bill-info">
            <p>Billed To:</p>
            <h3>{dataClient?.data?.contact?.name}</h3>
            <p>Address / Contact Info</p>
            <h3>{dataClient?.data?.contact?.email}</h3>
          </div>
          <div className="bill-date">
            <div className="issue-bill">
              <p>Issue On</p>
              <span>{dataClient?.data?.requirement?.checkIn}</span>
            </div>
            <div className="issue-bill">
              <p>Payment Due</p>
              <span>{dataClient?.data?.requirement?.checkOut}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-service">
        <table className="inner-service">
          <thead>
            <tr>
              <td>Services</td>
              <td>Destination</td>
              <td>Price</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {findByName.map((item) => (
              <tr key={item.id}>
                <td>{item.location}</td>
                <td>{item.title}</td>
                <td>{formatIDRPrice(item.price)}</td>
                <td>{formatIDRPrice(item.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="total-price">
        {findByName.map((item) => (
          <div key={item.id} className="inner-price">
            <div className="line"></div>
            <div className="price">
              <p>Total</p>
              <span>{formatIDRPrice(item.price)}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="footer-invoice">
        <div className="column">
          <p style={{ fontWeight: "700" }}>Dwidaya Tour</p>
          <p>Address / Contact Info</p>
          <p>email@company.com</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>ID#1 Label</p>
            <p>1234567890-123</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>ID#2 Label</p>
            <p>1234567890-123</p>
          </div>
        </div>
        <div className="column column-middle">
          <p style={{ fontWeight: "700" }}>Payment Instruction</p>
          <p style={{ width: "300px" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            possimus porro sapiente eaque accusamus perspiciatis, totam beatae
            perspiciatis dolor eos pariatur vero expedita aliquid voluptas?
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>ID#1 Label</p>
            <p>1234567890-123</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>ID#2 Label</p>
            <p>1234567890-123</p>
          </div>
        </div>
        <div className="column">
          <p style={{ fontWeight: "700" }}>Additional Notes</p>
          <p>Have A Nice Day</p>
        </div>
      </div>

      <div className="button-action">
        <button
          type="button"
          className="button"
          onClick={() => {
            navigate("/dwidaya");
          }}
        >
          Home
        </button>
      </div>
    </div>
  );
};

