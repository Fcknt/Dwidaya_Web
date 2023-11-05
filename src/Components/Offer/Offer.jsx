import React, { useEffect } from 'react';
import './offer.scss';
import { MdKingBed } from 'react-icons/md';
import { MdBathtub } from 'react-icons/md';
import { FaWifi } from 'react-icons/fa';
import { MdAirportShuttle } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';
import img from '../../Asset/housejap.jpg';
import img6 from '../../Asset/korearent.jpg';
import img7 from '../../Asset/singaporerent.jpg';
import img8 from '../../Asset/thairent.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Offers = [
	{
		id: 1,
		imgSrc: img,
		destTitle: 'Tokyo',
		location: 'Japan',
		price: 'Rp.4.500.000',
	},
	{
		id: 2,
		imgSrc: img6,
		destTitle: 'Seoul',
		location: 'Korea',
		price: 'Rp.6.500.000',
	},
	{
		id: 3,
		imgSrc: img7,
		destTitle: 'Emerald Hill',
		location: 'Singapore',
		price: 'Rp 7.000.000',
	},
	{
		id: 4,
		imgSrc: img8,
		destTitle: 'Chiang Mai',
		location: 'Thailand',
		price: 'Rp 4.000.000',
	},
];

const Coba = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<section className="offer container section">
			<div className="secContainer">
				<div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
					<h2 className="secTtile">Special Offers</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
						vitae quis explicabo neque nesciunt blanditiis?
					</p>
				</div>

				<div className="mainContent grid">
					{Offers.map(({ id, imgSrc, destTitle, location, price }) => {
						return (
							<div
                key={id}
								data-aos="fade-up"
								data-aos-duration="3000"
								className="singleOffer"
							>
								<div className="destImage">
									<img src={imgSrc} alt="{destTitle}" />

									<span className="discount">30% Off</span>
								</div>

								<div className="offerBody">
									<div className="price flex">
										<h4>{price}</h4>
										<span className="status">For Rent</span>
									</div>

									<div className="amenities flex">
										<div className="singleAmenity flex">
											<MdKingBed className="icon" />
											<small>2 Beds</small>
										</div>
										<div className="singleAmenity flex">
											<MdBathtub className="icon" />
											<small>1 Bath</small>
										</div>
										<div className="singleAmenity flex">
											<FaWifi className="icon" />
											<small>Wi-Fi</small>
										</div>
										<div className="singleAmenity flex">
											<MdAirportShuttle className="icon" />
											<small>Shuttle</small>
										</div>
									</div>

									<div className="location flex">
										<MdLocationOn className="icon" />
										<small>alamat,{location}.</small>
									</div>
									<button className="btn flex">
										View Details
										<BsArrowRightShort className="icon" />
									</button>
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
