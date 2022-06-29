import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { timestamp } from '../../firebase/config';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';
import { useFirestore } from '../../hooks/useFirestore';
import { useNavigate } from 'react-router-dom';
// import css
import './create.css';

export default function Create() {
	const navigate = useNavigate();
	const { addDocument, deleteDocument, response } = useFirestore('projects');
	const { isPending, document, error, success } = response;
	const { user } = useAuthContext();
	const { documents } = useCollection('users');
	const [ users, setUsers ] = useState([]);

	const [ name, setName ] = useState('');
	const [ formError, setFormError ] = useState('');
	const [ details, setDetails ] = useState('');
	const [ dueDate, setDueDate ] = useState('');
	const [ category, setCategory ] = useState('');
	const [ assignedUsers, setAssignedUsers ] = useState([]);

	useEffect(
		() => {
			if (documents) {
				const options = documents.map((user) => {
					return { value: user, label: user.displayName };
				});
				setUsers(options);
			}
		},
		[ documents ]
	);

	const categories = [
		{ value: 'development', label: 'Development' },
		{ value: 'design', label: 'Design' },
		{ value: 'sales', label: 'Sales' },
		{ value: 'marketing', label: 'Marketing' }
	];
	const handleSubmit = async(e) => {
		e.preventDefault();
		setFormError(null);
		if (!category) {
			setFormError('Please select a category');
			return;
		}
		if (assignedUsers.length < 1) {
			setFormError('Please select at least a user');
			return;
		}

		const createdBy = {
			displayName : user.displayName,
			photoURL    : user.photoURL,
			id          : user.uid
		};

		const assignedUsersList = assignedUsers.map((u) => {
			return {
				displayName : u.value.displayName,
				photoURL    : u.value.photoURL,
				id          : u.value.id
			};
		});

		const project = {
			name,
			details,
			category          : category.value,
			dueDate           : timestamp.fromDate(new Date(dueDate)),
			comments          : [],
			createdBy,
			assignedUsersList
		};


		await addDocument(project);
		if (!error) {
			navigate('/')
		}
		
	};
	return (
		<div className="create-form">
			<h2 className="page-title" />
			<form>
				{error && <span class="form-error">{error}</span>}
				{formError && <span class="form-error">{formError}</span>}
				<label>
					<span>Project Name:</span>
					<input required type="text" onChange={(e) => setName(e.target.value)} value={name} />
				</label>
				<label>
					<span>Project Details:</span>
					<textarea required type="text" onChange={(e) => setDetails(e.target.value)} value={details} />
				</label>
				<label>
					<span>Set due date:</span>
					<input required type="date" onChange={(e) => setDueDate(e.target.value)} value={dueDate} />
				</label>
				<label>
					<span>Project Category :</span>
					<Select options={categories} onChange={(option) => setCategory(option)} />
				</label>
				<label>
					<span>Assign to :</span>
					<Select options={users} onChange={(option) => setAssignedUsers(option)} isMulti />
				</label>
				{!isPending && (
					<button className="btn" onClick={handleSubmit}>
						Add Project
					</button>
				)}
				{isPending && (
					<button className="btn" disabled>
						Adding...
					</button>
				)}
			</form>
		</div>
	);
}
