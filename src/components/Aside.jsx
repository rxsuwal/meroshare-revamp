import React from 'react'
import { NavLink } from 'react-router-dom'

const asideStye ={
    display:"flex",
    position:"fixed",
    top: 0,
    left: 0,
    zIndex: 100,
    bottom: 0,
    transition:"0.3s ease-in-out"
    
}

const zerow ={
    width:"fit-content",
    transition:"0.3s ease-in-out"
}

const Aside = (props) => {

    


    return (
        <>

            <div onClick={props.clicked} className='bg-secondary bg-opacity-75 h-100 w-100' style={props.mobileMenuToggle ? asideStye : {display:'none'}}></div>
            <div className="aside card" style={props.mobileMenuToggle ? asideStye : zerow} >
                {/* <!--begin::Aside menu--> */}
                <div className="aside-menu flex-column-fluid px-5">
                    {/* <!--begin::Aside Menu--> */}
                    <div className="hover-scroll-overlay-y my-5 pe-4 me-n4">
                        {/* <!--begin::Menu--> */}
                        <div className="menu menu-column menu-rounded fw-bold fs-6">
                            <div>
                                <div className="menu-item">
                                    <div className="menu-content pb-2">
                                        <span className="menu-section text-muted text-uppercase fs-8 ls-1">General</span>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>
                                        <span className="menu-icon">
                                            {/* <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg--> */}
                                            <span className="svg-icon svg-icon-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <rect x="2" y="2" width="9" height="9" rx="2" fill="black" />
                                                    <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black" />
                                                    <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="black" />
                                                    <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black" />
                                                </svg>
                                            </span>
                                            {/* <!--end::Svg Icon--> */}
                                        </span>
                                        <span className="menu-title">Home</span>
                                    </NavLink>
                                </div>
                                <div className="menu-item">
                                    <NavLink to={'/details'} className={({ isActive }) => isActive ? "menu-link active" : "menu-link"} >
                                        <span className="menu-icon">
                                            {/* <!--begin::Svg Icon | path: assets/media/icons/duotune/general/gen049.svg--> */}
                                            <span className="svg-icon svg-icon-muted svg-icon-2hx"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="black" />
                                                <path d="M12.0006 11.1542C13.1434 11.1542 14.0777 10.22 14.0777 9.0771C14.0777 7.93424 13.1434 7 12.0006 7C10.8577 7 9.92348 7.93424 9.92348 9.0771C9.92348 10.22 10.8577 11.1542 12.0006 11.1542Z" fill="black" />
                                                <path d="M15.5652 13.814C15.5108 13.6779 15.4382 13.551 15.3566 13.4331C14.9393 12.8163 14.2954 12.4081 13.5697 12.3083C13.479 12.2993 13.3793 12.3174 13.3067 12.3718C12.9257 12.653 12.4722 12.7981 12.0006 12.7981C11.5289 12.7981 11.0754 12.653 10.6944 12.3718C10.6219 12.3174 10.5221 12.2902 10.4314 12.3083C9.70578 12.4081 9.05272 12.8163 8.64456 13.4331C8.56293 13.551 8.49036 13.687 8.43595 13.814C8.40875 13.8684 8.41781 13.9319 8.44502 13.9864C8.51759 14.1133 8.60828 14.2403 8.68991 14.3492C8.81689 14.5215 8.95295 14.6757 9.10715 14.8208C9.23413 14.9478 9.37925 15.0657 9.52439 15.1836C10.2409 15.7188 11.1026 15.9999 11.9915 15.9999C12.8804 15.9999 13.7421 15.7188 14.4586 15.1836C14.6038 15.0748 14.7489 14.9478 14.8759 14.8208C15.021 14.6757 15.1661 14.5215 15.2931 14.3492C15.3838 14.2312 15.4655 14.1133 15.538 13.9864C15.5833 13.9319 15.5924 13.8684 15.5652 13.814Z" fill="black" />
                                            </svg></span>
                                            {/* <!--end::Svg Icon--> */}
                                        </span>
                                        <span className="menu-title">My Details</span>
                                    </NavLink>
                                </div>

                            </div>
                            <div>
                                <div className="menu-item">
                                    <div className="menu-content pt-8 pb-2">
                                        <span className="menu-section text-muted text-uppercase fs-8 ls-1">Shares</span>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <NavLink to={'/shares'} className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>
                                        <span className="menu-icon">
                                            {/* <!--begin::Svg Icon | path: assets/media/icons/duotune/general/gen032.svg--> */}
                                            <span className="svg-icon svg-icon-muted svg-icon-2hx"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect x="8" y="9" width="3" height="10" rx="1.5" fill="black" />
                                                <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="black" />
                                                <rect x="18" y="11" width="3" height="8" rx="1.5" fill="black" />
                                                <rect x="3" y="13" width="3" height="6" rx="1.5" fill="black" />
                                            </svg></span>
                                            {/* <!--end::Svg Icon--> */}
                                        </span>
                                        <span className="menu-title">My Shares</span>
                                    </NavLink>
                                </div>
                                <div className="menu-item">
                                    <NavLink to={'/portfolio'} className={({ isActive }) => isActive ? "menu-link active" : "menu-link"} >
                                        <span className="menu-icon">
                                            {/* <!--begin::Svg Icon | path: assets/media/icons/duotune/finance/fin006.svg--> */}
                                            <span className="svg-icon svg-icon-muted svg-icon-2hx"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="black" />
                                                <path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="black" />
                                            </svg></span>
                                            {/* <!--end::Svg Icon--> */}
                                        </span>
                                        <span className="menu-title">My Portfolio</span>
                                    </NavLink>
                                </div>
                            </div>

                            <div>
                                <div className="menu-item">
                                    <div className="menu-content pt-8 pb-2">
                                        <span className="menu-section text-muted text-uppercase fs-8 ls-1">New Issue</span>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <NavLink to={'/asba'} className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>
                                        <span className="menu-icon">
                                            {/* <!--begin::Svg Icon | path: assets/media/icons/duotune/maps/map004.svg--> */}
                                            <span className="svg-icon svg-icon-muted svg-icon-2hx"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path opacity="0.3" d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z" fill="black" />
                                                <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z" fill="black" />
                                            </svg></span>
                                            {/* <!--end::Svg Icon--> */}
                                        </span>
                                        <span className="menu-title">My ASBA</span>
                                    </NavLink>
                                </div>
                            </div>



                            


                        </div>
                        {/* <!--end::Menu--> */}
                    </div>
                </div>
                {/* <!--end::Aside menu--> */}

                {/* <!--begin::Footer--> */}
                <div className="aside-footer flex-column-auto pt-5 pb-7 px-5" id="kt_aside_footer">
                    <a href="../../demo14/dist/documentation/getting-started.html" className="btn btn-bg-light btn-color-gray-500 btn-active-color-gray-900 w-100" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss-="click" title="200+ in-house components and 3rd-party plugins">
                        <span className="btn-label">Docs &amp; Components</span>
                        {/* <!--begin::Svg Icon | path: icons/duotune/general/gen005.svg--> */}
                        <span className="svg-icon btn-icon svg-icon-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM15 17C15 16.4 14.6 16 14 16H8C7.4 16 7 16.4 7 17C7 17.6 7.4 18 8 18H14C14.6 18 15 17.6 15 17ZM17 12C17 11.4 16.6 11 16 11H8C7.4 11 7 11.4 7 12C7 12.6 7.4 13 8 13H16C16.6 13 17 12.6 17 12ZM17 7C17 6.4 16.6 6 16 6H8C7.4 6 7 6.4 7 7C7 7.6 7.4 8 8 8H16C16.6 8 17 7.6 17 7Z" fill="black" />
                                <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black" />
                            </svg>
                        </span>
                        {/* <!--end::Svg Icon--> */}
                    </a>
                </div>
                {/* <!--end::Footer--> */}
            </div>
        </>
    )
}

export default Aside