import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { useDocument } from '../../hooks/useDocument';
// import css
import './project.css';
import ProjectComments from './ProjectComments';
import ProjectSummary from './ProjectSummary';

const Project = () => {
	const { id } = useParams();
	const { document, error } = useDocument('projects', id);

	if (error) {
		return <div className="error">{error}</div>;
	}
	if (!document) {
		return <Loading />;
	}
	return (
		<div className="project-details">
			<ProjectSummary project={document} />
			<ProjectComments project={document} />
		</div>
	);
};

export default Project;
