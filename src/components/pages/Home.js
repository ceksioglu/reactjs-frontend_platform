import React from 'react';
import AboutUs from '../AboutUs';
import ProfilCard from '../card/ProfilCard';
import BlogCard from '../card/BlogCard';
import SliderCard from '../card/SliderCard';
import { Link } from 'react-router-dom';
import './Home.css';
function Home() {
  const slides = [
    {
      image: "images/node.png",
      title: "Node JS",
      description: "All our courses are prepared by professionals",
      button: "Read More...",
    },
    {
      image: "images/css.png",
      title: "HTML&CSS",
      description: "All our courses are prepared by professionals",
      button: "Read More...",
    },
    {
      image: "images/python.png",
      title: "Python",
      description: "All our courses are prepared by professionals",
      button: "Read More...",
    },
    {
      image: "images/react.png",
      title: "React JS",
      description: "All our courses are prepared by professionals",
      button: "Read More...",
    },
    {
      image: "images/shop.png",
      title: "Adobe Shop",
      description: "All our courses are prepared by professionals",
      button: "Read More...",
    },
    {
      image: "images/vue.png",
      title: "Vue JS",
      description: "All our courses are prepared by professionals",
      button: "Read More...",
    },
    {
      image: "images/web.png",
      title: "Web Development",
      description: "All our courses are prepared by professionals",
      button: "Read More...",
    },
    {
      image: "images/javascript.png",
      title: "JavaScript",
      description: "All our courses are prepared by professionals",
      button: "Read More...",
    },
    {
      image: "images/java.png",
      title: "Java",
      description: "All our courses are prepared by professionals",
      button: "Read More...",
    },
  ];
  return (
    <div >
      <div className='hero-container'>
        <div id="backgorundvideo">
          <video src='/videos/video-1.mp4' autoPlay loop muted />
        </div>
        <h1 className='container'>Marmara Education Platform</h1>
        <p>Most Popular Courses</p>
        <div className='container mt-2'>
          <div className=' d-flex justify-content-center mt-5'>
            <SliderCard slides={slides} />
          </div>
        </div>


        <div className='d-flex justify-content-center'>
          <AboutUs />
        </div>
        <div className='container mt-5'>
          <h1 className='display-3 text-center'>Our Teachers</h1>
          <p className='text-muted text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, repudiandae, suscipit repellat minus molestiae ea.</p>
          <div className='row'>
            <ProfilCard teacher="Ercan Erkalkan" title="Uni Professor" image="/images/teacher-1.png" />
            <ProfilCard teacher="Can Ekşioğlu" title="junior Developer" image="/images/teacher-1.png" />
            <ProfilCard teacher="Can Ekşioğlu" title="junior Developer" image="/images/teacher-1.png" />
            <ProfilCard teacher="Rahman Çoban" title="junior Developer" image="/images/teacher-1.png" />
          </div>
        </div>
        <div className='container mt-5'>
          <h1 className='display-3 text-center'>Most Popular Blog</h1>
          <p className='text-muted text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, repudiandae, suscipit repellat minus molestiae ea.</p>
          <div className='row d-flex justify-content-center'>
            <div className='col-md-9 row'>
              <BlogCard blogimage="images/python.png" blogsubject="Back End Development" blogtitle="How to use pyhton" blogauthor="Vedat Topuz" />
              <BlogCard blogimage="images/shop.png" blogsubject="Back End Development" blogtitle="How to use pyhton" blogauthor="Vedat Topuz" />
              <BlogCard blogimage="images/web.png" blogsubject="Back End Development" blogtitle="How to use pyhton" blogauthor="Vedat Topuz" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
