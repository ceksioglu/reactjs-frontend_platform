import React from 'react'
import BreadCrumb from '../BreadCrumb'
import SideBar from '../SideBar'
import "./CourseDetail.css"
import Pagination from '../Pagination'

function CourseDetail() {
  return (
    <div id="coursedetail">
      <BreadCrumb breadCrumb="Course / Course Detail"/>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-md-9'>
            <div className="row">
            <video className='col-12' src='/videos/aboutUs.mp4' autoPlay loop muted />

            </div>
            <div className='d-flex justify-content-center mt-4'>
              <Pagination />
            </div>
          </div>
          <SideBar />
        </div>
      </div>
    </div>
  )
}

export default CourseDetail