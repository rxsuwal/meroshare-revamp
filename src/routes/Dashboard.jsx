import React, { useEffect } from 'react'
import { ProgressBar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Loader from '../components/Loader/Loader'

import * as actionUserData from '../store/actionCreator/userDataAction'

function Dashboard() {
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionUserData.getDetails(), actionUserData.getShares())
  }, [])


  let userDetail = useSelector(state => state?.userData?.details)



  return (
    <Layout pageTitle="Home" pageGroup="General">

      <h1>DASHBOARD</h1>

      <div className='mt-4'>
        


        {userDetail || userDetail == null  ?  <div className='d-flex align-items-center justify-content-md-between justify-content-center flex-wrap'>
          {/*--begin::Progress*/}
          <div className="d-flex align-items-center w-md-50 w-100 flex-column mt-3">
            <div className="d-flex justify-content-between w-100 mt-auto mb-2">
              <span className="fw-bold fs-6 text-gray-400">Profile Completion</span>
              <span className="fw-bolder fs-6">{userDetail ? `100%` : `50%`}</span>
            </div>
            <div className="h-5px mx-3 w-100 bg-light mb-3">
              <div className="bg-success rounded h-5px" role="progressbar" style={{ "width": userDetail ? `100%` : `50%` }} aria-valuenow={userDetail ? 100 : 50} aria-valuemin="0" aria-valuemax="100"></div>
            </div>

          </div>
          {/*--end::Progress*/}
          <Link to={"/details"} className="btn btn-success btn-sm my-4 my-md-0">Complete Now !</Link>
        </div> : <Loader/>}


        <div className="separator my-6"></div>


        <div className='d-flex justify-content-between flex-wrap'>

          <div className="w-100 w-md-50">
            <div className="card card-flush shadow-sm m-6 m-md-10 mt-0 mt-md-4">
              <div className="card-header">
                <h3 className="card-title">My Shares</h3>
                <div className="card-toolbar">
                  <Link to={"/shares"} href="#" class="btn btn-primary btn-sm">
                    {/* <!--begin::Svg Icon | path: assets/media/icons/duotune/arrows/arr087.svg--> */}
                    <span class="svg-icon svg-icon-muted svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect opacity="0.5" x="11" y="18" width="12" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
                      <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor" />
                    </svg></span>
                    {/* <!--end::Svg Icon--> */}
                    Add</Link>


                </div>
              </div>
              <div className="card-body py-5">
              </div>
              <div className="card-footer">
                <span className='fw-bolder'>Total :</span> 100 Units
              </div>
            </div>
          </div>

          <div className="w-100 w-md-50">
            <div className="card card-flush shadow-sm m-6 m-md-10 mt-0 mt-md-4">
              <div className="card-header">
                <h3 className="card-title">My Portfolio</h3>
                <div className="card-toolbar">
                  <Link to={"#!"} href="#" class="btn btn-primary btn-sm">
                    {/* <!--begin::Svg Icon | path: assets/media/icons/duotune/arrows/arr087.svg--> */}
                    <span class="svg-icon svg-icon-muted svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect opacity="0.5" x="11" y="18" width="12" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
                      <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor" />
                    </svg></span>
                    {/* <!--end::Svg Icon--> */}
                    Add</Link>


                </div>
              </div>
              <div className="card-body py-5">
              </div>
              <div className="card-footer">
                <span className='fw-bolder'>Total :</span> 10,000 Rs
              </div>
            </div>
          </div>


        </div>
      </div>







    </Layout>
  )
}

export default Dashboard