import React from 'react'
import Loading from '../../components/Loading'
import ProjectList from '../../components/ProjectList'
import { useCollection } from '../../hooks/useCollection'

// import css 
import './dashboard.css'

const Dashboard = () => {
  const {documents, error} = useCollection('projects')
  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {!documents && !error && <Loading /> }
      {error && <span className='formError'>{error}</span>}
      {documents && <ProjectList projects={documents} />}
    </div>
  )
}

export default Dashboard