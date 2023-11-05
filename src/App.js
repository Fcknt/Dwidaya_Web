import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import First from './Components/Pages/First';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<First />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
};

export default App;
