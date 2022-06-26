// routes restricted for users that are logged in
import { useAuthContext } from '../hooks/useAuthContext';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const ResrtictedRoute = ({children}) => {
    const {user} = useAuthContext()
    if (user) {
		return <Navigate to="/" />;
	}
	else {
		return children;
	}
};
