import React, { useEffect } from 'react';
import './about.css';
import img from '../../Asset/customer-service.png';
import img2 from '../../Asset/mountain.png';
import img3 from '../../Asset/hiking.png';
import video from '../../Asset/video.mp4';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<section className="about section">
			<div className="secContainer">
				<h2 data-aos="fade-up" data-aos-duration="2000" className="title">
					Why Hikings?
				</h2>
				<div className="mainContent container grid">
					<div
						data-aos="fade-up"
						data-aos-duration="2000"
						className="singleItem"
					>
						<img src={img2} alt="Image Name" />
						<h3>100+ Mountains</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Aspernatur unde praesentium quasi cum modi reprehenderit vitae sit
							eveniet necessitatibus cumque.
						</p>
					</div>
					<div
						data-aos="fade-up"
						data-aos-duration="2500"
						className="singleItem"
					>
						<img src={img3} alt="Image Name" />
						<h3>1000+ Hikings</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Aspernatur unde praesentium quasi cum modi reprehenderit vitae sit
							eveniet necessitatibus cumque.
						</p>
					</div>
					<div
						data-aos="fade-up"
						data-aos-duration="3000"
						className="singleItem"
					>
						<img src={img} alt="Image Name" />
						<h3>2000+ Customers </h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Aspernatur unde praesentium quasi cum modi reprehenderit vitae sit
							eveniet necessitatibus cumque.
						</p>
					</div>
				</div>

				<div className="videoCard container">
					<div className="cardContent grid">
						<div
							data-aos="fade-right"
							data-aos-duration="2000"
							className="cardText"
						>
							<h2>Wonderful House Experience in there</h2>
							<p>
								The Adventure subranking is based on an equally weighted average
								of scores from five country
							</p>
						</div>
						<div
							data-aos="fade-left"
							data-aos-duration="2000"
							className="cardVideo"
						>
							<video src={video} autoPlay loop muted></video>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
