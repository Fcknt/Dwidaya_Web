import React, { useEffect } from 'react';
import './blog.css';
import { BsArrowRightShort } from 'react-icons/bs';
import img from '../../Asset/beachsinga.jpg';
import img2 from '../../Asset/fujim.jpg';
import img3 from '../../Asset/jabo.jpg';
import img4 from '../../Asset/langkawi.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Posts = [
	{
		id: 1,
		postImage: img, // Pastikan img telah didefinisikan dengan nilai yang valid
		title: 'Beautiful East Coast Park Singapore',
		desc: 'Singapore East Coast Park is a 15 kilometer stretch of beach. While enjoying the sunshine and sea breeze, relax from the hustle and bustle of the city.',
	},
	{
		id: 2,
		postImage: img2,
		title: 'Fuji Mountain Japan',
		desc: 'Standing at 3,765 meters, Mount Fuji is Japan highest mountain, and has long been an icon of the country. This almost perfectly shaped volcano is one of Japan most popular and iconic tourist spots.',
	},
	{
		id: 3,
		postImage: img3,
		title: 'Jabo Village Thailand',
		desc: 'This small town on the northern border of Thailand has a holiday surprise for you. To be precise, at Jabo Village, you will find the beauty of a holiday above the sea of clouds.',
	},
	{
		id: 4,
		postImage: img4,
		title: 'Langkawi cable car Malaysia',
		desc: 'Langkawi cable car is a natural and famous tourist attraction in Malaysia. The cable car which is at the top of the second highest mountain in Langkawi has a height of 709 meters above sea level.',
	},
];

const Blog = () => {
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
					{Posts.map((post) => {
						// Menggunakan satu argumen post
						return (
							<div
								data-aos="fade-up"
								data-aos-duration="3000"
								className="singlePost grid"
								key={post.id}
							>
								<div className="imgDiv">
									<img src={post.postImage} alt={post.title} />
								</div>
								<div className="postDetails">
									<h3>{post.title}</h3>
									<p>{post.desc}</p>
								</div>
								<a href="#" className="flex">
									Read More
									<BsArrowRightShort className="icon" />
								</a>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Blog;
