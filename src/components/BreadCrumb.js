import React from 'react'
import { Link } from 'react-router-dom'
import "./BreadCrumb.css"
function BreadCrumb(props) {
    return (
        <div id="breadCrumb">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to='/'>Marmara</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                         {props.breadCrumb}
                    </li>
                </ol>
            </nav>
        </div>
    )
}

export default BreadCrumb