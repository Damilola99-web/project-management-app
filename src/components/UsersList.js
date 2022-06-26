import React from 'react';
import { useCollection } from '../hooks/useCollection';
import Avatar from './Avatar';

// styles 
import './userslist.css'

export default function UsersList() {
    const {error, documents} = useCollection('users')
  return (
    <div className='user-list'>
      <h2>All Users</h2>
      {error && <div className='error'>{error}</div>}
      {documents && documents.map(user =>(
        <div key={user.id} className='user-list-item'>
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
        </div>
      ))}
    </div>
  );
}