import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Loader from '../components/Loader/Loader'

import * as actionData from '../store/actionCreator/dataAction'

function OpeningDetail() {

  let location = useLocation()

  let dispatch = useDispatch()

  let navigate = useNavigate()


  let data = useSelector(state => state?.data?.openingsDetail)


  useEffect(() => {
    let pathname = location.pathname.split(':')

    if (pathname[1].includes('/')) {
      let final = pathname[1].split('/')
      dispatch(actionData.getOpeningsDetail(final[0]))


    } else if (!pathname[1].includes('/')) {
      dispatch(actionData.getOpeningsDetail(pathname[1]))

    }

  }, [])

  return (
    <Layout pageTitle="My ASBA" pageGroup="Openings Details">

      <button onClick={() => navigate(-1)} class="btn btn-link me-5 mb-2">
        {/* <!--begin::Svg Icon | path: assets/media/icons/duotune/arrows/arr063.svg--> */}
        <span class="svg-icon svg-icon-primary svg-icon-2x"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="currentColor" />
          <path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="currentColor" />
        </svg></span>
        {/* <!--end::Svg Icon--> */}
      </button>

      {
        data ?
          <>
            <div className='d-flex flex-wrap align-items-center '>
              <div className='w-100 w-md-50 mb-6'>
                <h6>Company Name </h6> <span>{data?.name}</span>

              </div>

              <div className="w-100 w-md-50 mb-6">
                <h6>Issue Type</h6> <span>{data?.issueType}</span>

              </div>
              <div className="w-100 w-md-50 mb-6">
                <h6>SCRIP</h6> <span>{data?.scrip}</span>
              </div>
              <div className="w-100 w-md-50 mb-6">
                <h6>Total Issued Units :</h6> <span>{data?.totalIssue}</span>

              </div>

            </div>

            <Outlet />
          </> :
          <Loader />
      }



    </Layout>
  )
}

export default OpeningDetail