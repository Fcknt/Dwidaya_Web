import React, { useState } from 'react';
import './login.css';

function App() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loggedIn, setLoggedIn] = useState(false);

	const handleLogin = () => {
		if (username === 'user' && password === 'password') {
			setLoggedIn(true);
		} else {
			alert('Login gagal. Silakan coba lagi.');
		}
	};

	return (
		<div className="cont">
			{loggedIn ? (
				<h1>Selamat datang, {username}!</h1>
			) : (
				<div className="form">
					<h1>Form Login</h1>
					<input
						type="text"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<br />
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<br />
					<button onClick={handleLogin}>Login</button>
				</div>
			)}
		</div>
	);
}

export default App;
