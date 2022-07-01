import React, { useState } from 'react';
import Loading from '../../components/Loading';
import ProjectList from '../../components/ProjectList';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';

// import css
import './dashboard.css';
import ProjectFilter from './ProjectFilter';

const Dashboard = () => {
	const { user } = useAuthContext();
	const { documents, error } = useCollection('projects');
	const [ currentFilter, setCurrentFilter ] = useState('all');
	const changeFilter = (newFilter) => {
		setCurrentFilter(newFilter);
	};

	const projects = documents?.filter((document) => {
		switch (currentFilter) {
			case 'all':
				return true;
			case 'mine':
				let assignedToMe = false;
				document.assignedUsersList.forEach((u) => {
					if (user.uid === u.id) {
						assignedToMe = true;
					}
				});
				return assignedToMe;

			case 'development':
			case 'design':
			case 'sales':
			case 'marketing':
				return document.category === currentFilter;

			default:
				return true;
		}
	});

	return (
		<div>
			<h2 className="page-title">Dashboard</h2>
			{!documents && !error && <Loading />}
			{error && <span className="formError">{error}</span>}
			{documents && <ProjectFilter currentFilter={currentFilter} changeFilter={changeFilter} />}
			{projects && <ProjectList projects={projects} />}
		</div>
	);
};

export default Dashboard;
