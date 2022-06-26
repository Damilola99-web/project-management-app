import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
// style and images

import './navbar.css';
import Temple from '../assets/temple.svg';

const Navbar = () => {
	const { user } = useAuthContext();
	const { logout, isPending } = useLogout();
	return (
		<div className="navbar">
			<ul>
				<li className="logo">
					<img src={Temple} alt="name" />
					<span>DevTalk</span>
				</li>
				{!user && (
					<li>
						<Link to="/login">Login</Link>
					</li>
				)}

				{!user && (
					<li>
						<Link to="/signup">Signup</Link>
					</li>
				)}
				{user && (
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
				)}
			</ul>
		</div>
	);
};

export default Navbar;
