import React, { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

// import css
import './signup.css';

const Signup = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ displayName, setDisplayName ] = useState('');
	const [ thumbnail, setThumbnail ] = useState(null);
	const [ thumbnailError, setThumbnailError ] = useState(null);
	const { signup, isPending, error } = useSignup();
	const handleSubmit = (e) => {
		e.preventDefault();
		signup(email, password, displayName, thumbnail);
	};

	const handleFileChange = (e) => {
		setThumbnail(null);
		let selected = e.target.files[0];
		console.log(selected);

		if (!selected) {
			setThumbnailError('Please select a file');
			return;
		}
		if (!selected.type.includes('image')) {
			setThumbnailError('Selected file must be an image');
			return;
		}
		if (selected.size > 100000) {
			setThumbnailError('image file must be less than 100kb');
			return;
		}

		setThumbnailError(null);
		setThumbnail(selected);
		console.log(selected);
	};
	return (
		<form className="auth-form" onSubmit={handleSubmit}>
			<h2>Sign up</h2>
			{thumbnailError && <label className="btn-err">{thumbnailError}</label>}
			{error && <label className="btn-err">{error}</label>}
			<label>
				<span>Username:</span>
				<input type="text" required value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
			</label>
			<label>
				<span>Email:</span>
				<input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
			</label>
			<label>
				<span>Password:</span>
				<input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
			</label>
			<label>
				<span>Profile Thumbnail:</span>
				<input type="file" required onChange={handleFileChange} />
			</label>
			{!isPending && <button className="btn">SignUp</button>}
			{isPending && (
				<button className="btn" disabled>
					loading...
				</button>
			)}
		</form>
	);
};

export default Signup;
