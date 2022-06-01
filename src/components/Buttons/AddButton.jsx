import React from 'react'
import {Link} from "react-router-dom"

function AddButton(props) {
    return (
        <Link  to={props.to}  className="btn btn-flush btn-link">
            {/* <!--begin::Svg Icon | path: assets/media/icons/duotune/arrows/arr087.svg--> */}
            <span className="svg-icon svg-icon-muted svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect opacity="0.5" x="11" y="18" width="12" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
                <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor" />
            </svg></span>
            {/* <!--end::Svg Icon--> */}
            Add</Link>
    )
}

export default AddButton