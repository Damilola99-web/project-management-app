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
import Loading from './components/Loading';

function App() {
	const { user, authIsReady } = useAuthContext();
	return (
		<div className={!user? 'App' : 'appp'}>
			{!authIsReady && <Loading />}
			{authIsReady && <Router>
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
							path="/projects/:id"
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
			</Router>}
		</div>
	);
}

export default App;
