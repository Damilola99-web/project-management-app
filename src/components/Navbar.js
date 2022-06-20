import React from 'react';
import { Link } from 'react-router-dom';

// style and images

import './navbar.css';
import Temple from '../assets/temple.svg';

const Navbar = () => {
	return (
		<div className='navbar'>
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
					<button className="btn">Logout</button>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
