import React from 'react'
import BreadCrumb from '../BreadCrumb'
import "./SignIn.css"

function SignIn() {
  return (
    <div>
      <BreadCrumb breadCrumb="Sign in" />
      <div className="box-form">
        <div className="left">
          <div className="overlay">
            <h1>Marmara Education</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
              est sed felis aliquet sollicitudin
            </p>
          </div>
        </div>
        <div className="right">
          <div>
            <h5 className=''>Login</h5>
          </div>
          <div>

          </div>
          <div className="inputs">
            <input type="text" placeholder="user name" />
            <br />
            <input type="password" placeholder="password" />
          </div>
          <div className="mt-2">
            <div className='col-md-12'>
              <p>
                Don't have an account?
                <a href="/sign-up">Create Your Account</a>
              </p>
            </div>
            <div className='row'>
                <a href='#'>Forgot password?</a>
            </div>
          </div>
          <br />
          <button type="submit" className='btn btn-primary '>Login</button>
        </div>
      </div>
    </div>


  )
}

export default SignIn