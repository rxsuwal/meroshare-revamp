import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Layout from '../components/Layout'
import Loader from '../components/Loader/Loader'

import * as actionData from '../store/actionCreator/dataAction'

const Asba = () => {
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionData.getOpenings())
  }, [])

  const openings = useSelector(state => state?.data?.openings)
  return (
    <Layout pageTitle="My ASBA" pageGroup="New Issue">
      <h1>ASBA</h1>

      {openings || openings == null ? <>
        {openings != null ?
          <>{openings.map((open, i) => {
            return (
              <div key={i} className='d-flex justify-content-between align-items-center flex-wrap border-bottom py-4'>
                <div className='d-flex justify-content-between align-items-center w-100 w-md-50 flex-wrap'>
                  <span className='d-block'>{open.name}
                  </span> -
                  <span>For General Public</span> -
                  <span class="badge badge-dark">IPO</span>

                </div>
                <NavLink to={'/'} className="btn btn-sm btn-primary">Apply</NavLink>
              </div>
            )
          })}
          </> : <h6>No Openings Available !</h6>
        }
      </> : <Loader />}

     
    </Layout>
  )
}

export default Asba