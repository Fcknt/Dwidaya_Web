import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Popular from '../Popular/Popular';
import Offer from '../Offer/Offer';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';

export const Homepage = () => {
	return (
		<>
			<Navbar />
			<Home />
			<Popular />
			<Offer />
			<About />
			<Blog />
			<Footer />
		</>
	);
};
