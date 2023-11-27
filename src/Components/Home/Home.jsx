import React, { useEffect } from 'react';
import './home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<section className="home">
			<div className="secContainer container">
				<div className="homeText">
					<h1 data-aos="fade-up" className="title">
						Plan Your Trip With Dwidaya Tour{' '}
					</h1>

					<p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
						Travel to your favourite city with respectful of the environment!
					</p>
				</div>
			</div>
		</section>
	);
};

export default Home;
