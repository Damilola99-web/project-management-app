import React from 'react';
import Avatar from '../../components/Avatar';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestore } from '../../hooks/useFirestore';
import { useNavigate } from 'react-router-dom';

import './project.css';

export default function ProjectSummary({ project }) {
	const navigate = useNavigate();
	const { deleteDocument } = useFirestore('projects');

	const handleClick = (e) => {
		deleteDocument(project.id);
		navigate('/');
	};
	const { user } = useAuthContext();
	return (
		<div>
			<div className="project-summary">
				<h2 className="page-title">{project.name}</h2>
				<p>Created by: {project.createdBy.displayName}</p>
				<p className="due-date">Project due by : {project.dueDate.toDate().toDateString()}</p>
				<p className="details">{project.details}</p>
				<h4>Project is assigned to : </h4>
				<div className="assigned-users">
					{project.assignedUsersList.map((user) => <Avatar key={user.id} src={user.photoURL} />)}
				</div>
			</div>
			{user.uid === project.createdBy.id && (
				<button className="btn" onClick={handleClick}>
					Mark as complete
				</button>
			)}
		</div>
	);
}
