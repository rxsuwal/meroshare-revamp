import React from 'react'
import { NavLink } from 'react-router-dom'
import Layout from '../components/Layout'

const Asba = () => {
  return (
    <Layout pageTitle="My ASBA" pageGroup="New Issue">
      <h1>ASBA</h1>

      <div className='d-flex justify-content-between align-items-center'>
        <span className='d-block'>hjnjihbj</span>
        <NavLink to={'/'} className="btn btn-sm btn-primary">Apply</NavLink>
      </div>
    </Layout>
  )
}

export default Asba