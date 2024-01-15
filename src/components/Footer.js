import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className=''>
      {/* Footer main */}
      <section className="ft-main mt-5">
        <div className="ft-main-item">
          <h2 className="ft-title">About</h2>
          <ul>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Resources</h2>
          <ul>
            <li>
              <a href="#">Docs</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">eBooks</a>
            </li>
            <li>
              <a href="#">Webinars</a>
            </li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Contact</h2>
          <ul>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Sales</a>
            </li>
            <li>
              <a href="#">Advertise</a>
            </li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Stay Updated</h2>
          <p>Get free updates before others do!</p>
          <form>
            <input type="email" name="email" placeholder="Enter email address" />
            <input className='btn-danger' type="submit" defaultValue="Subscribe" />
          </form>
        </div>
      </section>
      {/* Footer social */}
      <section className="ft-social">
        <ul className="ft-social-list">
          <li>
            <a href="#">
              <i className="fab fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </section>
      {/* Footer legal */}
      <section className="ft-legal">
        <ul className="ft-legal-list">
          <li>
            <a href="#">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>©Can Ekşioğlu</li>
        </ul>
      </section>
    </footer>


  );
}

export default Footer;
