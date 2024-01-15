import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './components/pages/Admin';
import SignIn from './components/pages/SignIn';
import SignUpPage from './components/pages/SignUpPage';
import Course from './components/pages/Course';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import CourseDetail from './components/pages/CourseDetail';

function App() {
  return (

      <>
        <Router>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/course' element={<Course />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/sign-up' element={<SignUpPage />} />
              <Route path='/course-detail' element={<CourseDetail />} />
              <Route path='/*' element={<NotFound />} />


            </Routes>
            <Footer/>
        </Router>
      </>
);
}

export default App;
