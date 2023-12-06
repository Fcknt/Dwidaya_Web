import React, { useEffect } from "react";
import Aos from "aos";
import { useNavigate } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { blogInformation } from "../../data/blog";
import "aos/dist/aos.css";
import "./blog.scss";

const Blog = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            Our Best Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            An insight to the incredible experience in the world.
          </p>
        </div>

        <div className="mainContainer grid">
          {blogInformation.map((post) => {
            return (
              <div
                key={post.id}
                data-aos="fade-up"
                data-aos-duration="3000"
                className="singlePost grid"
              >
                <div className="imgDiv">
                  <img src={post.postImage[0]} alt={post.title} />
                </div>
                <div className="postDetails">
                  <h3>{post.title}</h3>
                  <p>{post.desc}</p>
                </div>
                <div className="readmore" onClick={() => {
                  navigate(`bestblog/${post.location}`)
                }}>
                  <span>Read More</span>
                  <BsArrowRightShort className="icon" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;

