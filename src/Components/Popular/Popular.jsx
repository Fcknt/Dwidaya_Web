import React, { useEffect } from 'react';
import './popular.css';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsDot } from 'react-icons/bs';
import img from '../../Asset/img2.jpg';
import img3 from '../../Asset/japan.jpg';
import img4 from '../../Asset/korea.jpg';
import img5 from '../../Asset/malaysia.jpg';
import img6 from '../../Asset/thailand.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
	{
		id: 1,
		imgSrc: img3,
		destTitle: 'Tokyo',
		location: 'Japan',
		grade: 'Food Culture',
	},
	{
		id: 2,
		imgSrc: img4,
		destTitle: 'Seoul',
		location: 'Korea',
		grade: 'Korean Culture',
	},
	{
		id: 3,
		imgSrc: img5,
		destTitle: 'Twin Tower',
		location: 'Malaysia',
		grade: 'Cultural Relax',
	},
	{
		id: 4,
		imgSrc: img6,
		destTitle: 'Chiang Mai',
		location: 'Thailand',
		grade: 'Culture Religion',
	},
	{
		id: 5,
		imgSrc: img,
		destTitle: 'Merlion Park',
		location: 'Singapore',
		grade: 'Touris',
	},
];

const Coba = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<section className="popular section container">
			<div className="secContainer">
				<div className="secheader flex">
					<div
						data-aos="fade-right"
						data-aos-duration="2500"
						className="textDiv"
					>
						<h2 className="secTitle">Popular Destination</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
							consequatur iste molestiae nostrum reiciendis praesentium incidunt
							vel architecto nulla sit?
						</p>
					</div>

					<div
						data-aos="fade-left"
						data-aos-duration="2500"
						className="iconsDiv flex"
					>
						<BsArrowLeftShort className="icon leftIcon " />
						<BsArrowRightShort className="icon" />
					</div>
				</div>
				<div className="mainContent grid">
					{Data.map(({ id, imgSrc, destTitle, location, grade }) => {
						return (
							<div
								data-aos="fade-up"
								data-aos-duration="2500"
								className="singleDestination"
							>
								<div className="destImage">
									<img src={imgSrc} alt="Image Title" />

									<div className="overlayInfo">
										<h3>{destTitle}</h3>
										<p>{location}</p>
										<BsArrowRightShort className="icon" />
									</div>
								</div>
								<div className="destFooter">
									<div className="number">0{id}</div>
									<div className="destText flex">
										<h6>{location}</h6>
										<span className="flex">
											<span className="dot">
												<BsDot className="icon" />
											</span>
											Dot
										</span>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Coba;
