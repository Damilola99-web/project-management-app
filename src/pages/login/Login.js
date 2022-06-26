import React, { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

// import css
import './login.css';


const Login = () => {
  const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const { login, isPending, error } = useLogin();
	const handleSubmit = (e) => {
		e.preventDefault();
		login(email, password);
	};

	return (
		<form className="auth-form" onSubmit={handleSubmit}>
			<h2>Log In</h2>
			{error && <label className="btn-err">{error}</label>}
			<label>
				<span>Email:</span>
				<input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
			</label>
			<label>
				<span>Password:</span>
				<input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
			</label>
			{!isPending && <button className="btn">Log In</button>}
			{isPending && (
				<button className="btn" disabled>
					loading...
				</button>
			)}
		</form>
	);
};

export default Login;
