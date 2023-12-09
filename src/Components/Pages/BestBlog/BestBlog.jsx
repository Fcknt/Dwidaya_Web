import { useEffect, useState } from "react";
import { IoMdStar, IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { blogInformation } from "../../../data/blog";
import "./bestblog.scss";

const PreviewImageList = ({ image, onChangeImage }) => {
  return (
    <div className="preview-image-container">
      {image.map((item, index) => (
        <div
          className="image-choose"
          key={index}
          onClick={() => {
            onChangeImage(item);
          }}
        >
          <img src={item} alt={`preview-image-${index}`} />
        </div>
      ))}
    </div>
  );
};

const ChooseBlog = ({ img, location, rate, title, onChoose }) => {
  return (
    <div className="book-card">
      <img src={img} alt="book-image" />
      <div className="book-info">
        <div className="book-title">
          <span>{title}</span>
          <div>
            <IoMdStar />
            <span>{rate}</span>
          </div>
        </div>
        <div className="book-location">
          <IoLocationSharp />
          <span>{location}</span>
        </div>
        <button type="button" onClick={onChoose}>
          preview
        </button>
      </div>
    </div>
  );
};

export const BestBlog = () => {
  const navigate = useNavigate();

  // params
  const { location } = useParams();

  // heart icon
  const [heart, setHeart] = useState(false);

  // state
  const [blog, setBlog] = useState({
    id: 0,
    rate: 0,
    postImage: [],
    locaiton: "",
    title: "",
    desc: "",
  });

  // state for choose another destination by filterByChoosen
  const [book, setBook] = useState([]);

  // state for image preview
  const [preview, setPreview] = useState("");

  // filter data by location
  const findDataByLocation = () => {
    const data = blogInformation.find((item) => item.location === location);
    if (data) {
      setBlog(data);
      setPreview(data.postImage?.[0]);
    }
  };

  // filter by choosen
  const filterByChoosen = () => {
    const data = blogInformation.filter((item) => item.location !== location);
    if (data) {
      setBook(data);
    }
  };

  // get data by location & filter data by choosen
  useEffect(() => {
    const time = setTimeout(() => {
      findDataByLocation();
      filterByChoosen();
    }, 500);
    return () => clearTimeout(time);
  }, [location]);

  return (
    <div className="blog-container">
      <h1>Dwidaya tour</h1>
      <div className="blog-jumbotron">
        <img className="image-preview" src={preview} alt="best-blog-image" />
        <PreviewImageList
          image={blog.postImage}
          onChangeImage={(img) => {
            setPreview(img);
          }}
        />
        <div className="blog-information">
          <div className="blog-rate">
            <h4
              style={{ fontWeight: "600", color: "#323232", fontSize: "20px" }}
            >
              {blog.title}
            </h4>
            <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
              <IoMdStar style={{ color: "orange" }} />
              <span style={{ fontWeight: "500" }}>{blog.rate}</span>
            </div>
          </div>
          <p style={{ color: "#636363" }}>{blog.desc}</p>
          <div className="heart" onClick={() => setHeart(!heart)}>
            {!heart ? (
              <IoIosHeartEmpty size={30} color={"#AFAFAF"} />
            ) : (
              <IoMdHeart size={30} color="red" />
            )}
          </div>
        </div>
      </div>
      <div className="order-preview">
        <div className="book-container">
          {book.map((item) => (
            <ChooseBlog
              key={item.id}
              img={item.postImage?.[0]}
              location={item.location}
              rate={item.rate}
              title={item.title}
              onChoose={() => navigate(`/dwidaya/bestblog/${item.location}`)}
            />
          ))}
        </div>
        <button
          type="button"
          className="order-btn"
          onClick={() => {
            navigate(`/dwidaya/order/${location}`);
          }}
        >
          Order
        </button>
      </div>
    </div>
  );
};

