import React, { useEffect, useState } from 'react'
import { ProgressBar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AddButton from '../components/Buttons/AddButton'
import Layout from '../components/Layout'
import Loader from '../components/Loader/Loader'

import * as actionUserData from '../store/actionCreator/userDataAction'

function Dashboard() {

  const userData = useSelector((state) => state?.auth?.userData)
  let userDetails = useSelector(state => state?.userData?.details)
  let userShares = useSelector(state => state?.userData?.shares)


  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionUserData.getDetails())
    dispatch(actionUserData.getShares())
  }, [userData])


  const [totalNumberOfUserShare, setTotalNumberOfUserShare] = useState()
  const [totalAmountOfUserShare, setTotalAmountOfUserShare] = useState()

  useEffect(() => {
    let totalNumberofShares = 0
    let totalAmountofShares = 0

    for (let i = 0; i < userShares.length; i++) {
      totalNumberofShares = totalNumberofShares + userShares[i].quantity
      totalAmountofShares = totalAmountofShares + userShares[i].totalAmount

    }
    setTotalNumberOfUserShare(totalNumberofShares)
    setTotalAmountOfUserShare(totalAmountofShares)

  }, [userShares])





  return (
    <Layout pageTitle="Home" pageGroup="General">

      <h1>DASHBOARD</h1>

      <div className='mt-4'>

        {userDetails || userDetails == null ?
          <div className='d-flex align-items-center justify-content-md-between justify-content-center flex-wrap'>
            {/*--begin::Progress*/}
            <div className="d-flex align-items-center w-md-50 w-100 flex-column mt-3">
              <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                <span className="fw-bold fs-6 text-gray-400">Profile Completion</span>
                <span className="fw-bolder fs-6">{userDetails ? `100%` : `50%`}</span>
              </div>
              <div className="h-5px mx-3 w-100 bg-light mb-3">
                <div className="bg-success rounded h-5px" role="progressbar" style={{ "width": userDetails ? `100%` : `50%` }} aria-valuenow={userDetails ? 100 : 50} aria-valuemin="0" aria-valuemax="100"></div>
              </div>

            </div>
            {/*--end::Progress*/}
            {userDetails ? null : <Link to={"/details"} className="btn btn-success btn-sm my-4 my-md-0">Complete Now !</Link>}
          </div> :
          <Loader />}


        <div className="separator my-6"></div>


        <div className='d-flex justify-content-between flex-wrap'>

          <div className="w-100 w-md-50">
            <div className="card card-flush shadow-sm m-6 m-md-10 mt-0 mt-md-4">
              <div className="card-header">
                <h3 className="card-title">My Shares</h3>
                <div className="card-toolbar">
                  <Link to={"/shares"} className="btn btn-flush btn-link">
                    {/* <!--begin::Svg Icon | path: assets/media/icons/duotune/arrows/arr087.svg--> */}
                    <span className="svg-icon svg-icon-primary svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect opacity="0.5" x="11" y="18" width="12" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
                      <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor" />
                    </svg></span>
                    {/* <!--end::Svg Icon--> */}
                    Add</Link>


                </div>
              </div>
              {userShares ?
                <>
                  {userShares.length == "0" ?
                    <h4 className='text-center py-8'>Start Adding !</h4> :
                    <>
                      <div className="card-body py-4">
                        <div className='d-flex flex-wrap align-items-center justify-content-between'>
                          <div>
                            <span className='fw-bolder'>No. of Companies : </span>{userShares.length}

                          </div>
                          <div>
                            <span className='fw-bolder'>Total :</span> {totalNumberOfUserShare} Units
                          </div>

                        </div>



                      </div>
                      <div className="card-footer text-center">
                        <Link className='btn btn-flush btn-link' to={"/shares"}>View All</Link>
                      </div>
                    </>
                  }
                </> :
                <Loader />
              }
            </div>
          </div>

          <div className="w-100 w-md-50">
            <div className="card card-flush shadow-sm m-6 m-md-10 mt-0 mt-md-4">
              <div className="card-header">
                <h3 className="card-title">My Portfolio</h3>
                <div className="card-toolbar">
                  <Link to={"/portfolio"} className="btn btn-flush btn-link">
                    {/* <!--begin::Svg Icon | path: assets/media/icons/duotune/arrows/arr087.svg--> */}
                    <span className="svg-icon svg-icon-primary svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect opacity="0.5" x="11" y="18" width="12" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
                      <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor" />
                    </svg></span>
                    {/* <!--end::Svg Icon--> */}
                    Add</Link>

                </div>
              </div>
              {userShares ?
                <>
                  {userShares.length == "0" ?
                    <h4 className='text-center py-8'>Start Adding !</h4> :
                    <>
                      <div className="card-body py-4">
                        <div className='d-flex flex-wrap align-items-center justify-content-between'>
                          <div>
                            <span className='fw-bolder'>No. of Companies : </span>{userShares.length}

                          </div>
                          <div>
                            <span className='fw-bolder'>Total :</span> {totalAmountOfUserShare} Rs
                          </div>

                        </div>



                      </div>
                      <div className="card-footer text-center">
                        <Link className='btn btn-flush btn-link' to={"/portfolio"}>View All</Link>
                      </div>
                    </>
                  }
                </> :
                <Loader />
              }
              
            </div>
          </div>


        </div>
      </div>







    </Layout>
  )
}

export default Dashboard