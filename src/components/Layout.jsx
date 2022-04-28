import React, { Component } from 'react'

import Header from './Header'

import Aside from './Aside'


export default class Layout extends Component {




    render() {


        return (
            <div className="header-fixed header-tablet-and-mobile-fixed">
                {/* <!--begin::Main--> */}
                {/* <!--begin::Root--> */}
                <div className="d-flex flex-column flex-root">
                    {/* <!--begin::Page--> */}
                    <div className="page d-flex flex-row flex-column-fluid">
                        {/* <!--begin::Wrapper--> */}
                        <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

                            {/* HEADER */}



                            <Header />

                            {/* END HEADER */}


                            {/* <!--begin::Content wrapper--> */}
                            <div className="d-flex flex-column-fluid">
                               <Aside/>

                                {this.props.children}

                            </div>
                            {/* <!--end::Content wrapper--> */}
                        </div>
                        {/* <!--end::Wrapper--> */}
                    </div>
                    {/* <!--end::Page--> */}
                </div>
                {/* <!--end::Root--> */}

                {/* <!--end::Main--> */}



            </div>
        )
    }
}
