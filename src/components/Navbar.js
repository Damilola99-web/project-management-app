import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
// style and images

import './navbar.css';
import Temple from '../assets/temple.svg';

const Navbar = () => {
	const { logout, isPending } = useLogout();
	return (
		<div className="navbar">
			<ul>
				<li className="logo">
					<img src={Temple} alt="name" />
					<span>DevTalk</span>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/signup">Signup</Link>
				</li>
				<li>
					{!isPending && (
						<button className="btn" onClick={logout}>
							Logout
						</button>
					)}
					{isPending && (
						<button className="btn" disabled>
							Logging out...
						</button>
					)}
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
