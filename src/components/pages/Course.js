import React from 'react'
import BreadCrumb from '../BreadCrumb'
import SideBar from '../SideBar'
import Cards from "../card/Cards"
import "./Course.css"
import Pagination from '../Pagination'

function Course() {
  return (
    <div id="course">
      <BreadCrumb breadCrumb="Course"/>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-md-9'>
            <div className="row">
              <Cards url="/course-detail" courseimage="images/web.png" coursesubject="Back End Development" coursetitle="How to use pyhton" courseteacher="Vedat Topuz" />
              <Cards url="/course-detail" courseimage="images/web.png" coursesubject="Back End Development" coursetitle="How to use pyhton" courseteacher="Vedat Topuz" />
              <Cards url="/course-detail" courseimage="images/web.png" coursesubject="Back End Development" coursetitle="How to use pyhton" courseteacher="Vedat Topuz" />
              <Cards url="/course-detail" courseimage="images/web.png" coursesubject="Back End Development" coursetitle="How to use pyhton" courseteacher="Vedat Topuz" />
              <Cards url="/course-detail" courseimage="images/web.png" coursesubject="Back End Development" coursetitle="How to use pyhton" courseteacher="Vedat Topuz" />
              <Cards url="/course-detail" courseimage="images/web.png" coursesubject="Back End Development" coursetitle="How to use pyhton" courseteacher="Vedat Topuz" />
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

export default Course