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

function App() {
	return (
		<div className="App">
			<Router>
        <Sidebar />
				<div className="container">
					<Navbar />
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/project" element={<Project />} />
						<Route path="/create" element={<Create />} />
						<Route path="*" element={<Missing />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
