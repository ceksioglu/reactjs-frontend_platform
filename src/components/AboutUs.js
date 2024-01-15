import React from 'react'
import "./AboutUs.css"
function AboutUs() {
    return (
        
            <section className='mt-5' >
                <div className="container mt-5 pt-5 text-black">
                    <div className="d-flex justify-content-center">
                        <div className="col-md-10 d-flex">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="">
                                            {/* Start Title */}
                                            <div>
                                                <h2 className='display-2'>About Us</h2>
                                            </div>
                                            {/* End Title */}
                                            <p id="aboutcontent" className=''>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Rerum pariatur fuga eveniet soluta aspernatur rem, nam
                                                voluptatibus voluptate voluptates sapiente, inventore.
                                                Voluptatem, maiores esse molestiae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Rerum pariatur fuga eveniet soluta aspernatur rem, nam
                                                voluptatibus voluptate voluptates sapiente, inventore.
                                                Voluptatem, maiores esse molestiae.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                               
                                            </p>
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <div className="mu-about-us-right">
                                            <video className='col-12' src='/videos/aboutUs.mp4' autoPlay loop muted />
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
      

    )
}

export default AboutUs