import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Missing from './pages/missing/Missing';
import Create from './pages/create/Create';
import Project from './pages/project/Project';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProtectedRoute from './pages/ProtectedRoute';
import { ResrtictedRoute } from './pages/RestrictedRoute';
import { useAuthContext } from './hooks/useAuthContext';
import UsersList from './components/UsersList';

function App() {
	const { user } = useAuthContext();
	return (
		<div className="App">
			<Router>
				{user && <Sidebar />}
				<div className="container">
					<Navbar />
					<Routes>
						<Route
							path="/"
							element={
								<ProtectedRoute>
									<Dashboard />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/login"
							element={
								<ResrtictedRoute>
									<Login />
								</ResrtictedRoute>
							}
						/>
						<Route
							path="/signup"
							element={
								<ResrtictedRoute>
									<Signup />
								</ResrtictedRoute>
							}
						/>
						<Route
							path="/project"
							element={
								<ProtectedRoute>
									<Project />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/create"
							element={
								<ProtectedRoute>
									<Create />
								</ProtectedRoute>
							}
						/>
						<Route path="*" element={<Missing />} />
					</Routes>
				</div>
				{user && <UsersList />}
			</Router>
		</div>
	);
}

export default App;
