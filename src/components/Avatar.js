import React from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

// styles 
import './avatar.css'

export default function Avatar({src}) {
    const {user} = useAuthContext()
  return (
    <div className='avatar'>
      <img src={src} alt="user" />
    </div>
  );
}
