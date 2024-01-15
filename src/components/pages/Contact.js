import React from 'react'
import BreadCrumb from '../BreadCrumb'
import "./Contact.css"

function Contact() {
  return (
    <div>
      <BreadCrumb breadCrumb="Contact"/>
      <section id="contact">
        <div className="contact-box">
          <div className="contact-links">
            <h2>CONTACT</h2>
            <div className="links">
              <div className="link">
                <a className="fab fa-facebook display-3 text-white"></a>
              </div>
              <div className="link">
                <a className="fab fa-instagram display-3 text-white"></a>
              </div>
              <div className="link">
                <a className="fab fa-linkedin display-3 text-white"></a>
              </div>
              <div className="link">
                <a className="fab fa-github display-3 text-white"></a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form className=''>
              <h2>Contact Us</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="first">First Name</label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="last">Last Name</label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="first">Mail</label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="last">Phone</label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                </div>
              </div>
              <div className='col-md-12 mt-2'>
                <label htmlFor="last">Message</label>
                <textarea type="text" className="form-control" placeholder="" />
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-3">
                Submit
              </button>
            </form>

          </div>
        </div>
      </section>
    </div>



  )
}

export default Contact