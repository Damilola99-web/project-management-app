import { useState, useEffect } from 'react';
import { projectAuth, projectFirestore } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
	const [ error, setError ] = useState(null);
	const [ isPending, setIsPending ] = useState(false);
	const { dispatch, user } = useAuthContext();

	const login = async (email, password) => {
		setError(null);
		setIsPending(true);

		try {
			// login
			const res = await projectAuth.signInWithEmailAndPassword(email, password);
			await projectFirestore.collection('users').doc(res.user.uid).update({ online: true });

			// dispatch login action
			dispatch({ type: 'LOGIN', payload: res.user });

			setIsPending(false);
			setError(null);
		} catch (err) {
			setError(err.message);
			setIsPending(false);
		}
	};

	return { login, isPending, error };
};
