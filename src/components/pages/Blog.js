import React from 'react'
import BreadCrumb from '../BreadCrumb'
import BlogCard from '../card/BlogCard'
import Pagination from '../Pagination'
import SideBar from '../SideBar'
import "./Blog.css"

function Blog() {
  return (
    <div id="blog">
      <BreadCrumb breadCrumb="Blog" />
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-md-9'>
            <div className="row">
              <BlogCard blogimage="images/python.png" blogsubject="Back End Development" blogtitle="How to use pyhton" blogauthor="Vedat Topuz" />
              <BlogCard blogimage="images/shop.png" blogsubject="Back End Development" blogtitle="How to use pyhton" blogauthor="Vedat Topuz" />
              <BlogCard blogimage="images/web.png" blogsubject="Back End Development" blogtitle="How to use pyhton" blogauthor="Vedat Topuz" />
              <BlogCard blogimage="images/python.png" blogsubject="Back End Development" blogtitle="How to use pyhton" blogauthor="Vedat Topuz" />
              <BlogCard blogimage="images/shop.png" blogsubject="Back End Development" blogtitle="How to use pyhton" blogauthor="Vedat Topuz" />
              <BlogCard blogimage="images/web.png" blogsubject="Back End Development" blogtitle="How to use pyhton" blogauthor="Vedat Topuz" />
            </div>
            <div className='d-flex justify-content-center mt-5'>
              <Pagination />
            </div>
          </div>
          <SideBar />
        </div>


      </div>
    </div>
  )
}

export default Blog