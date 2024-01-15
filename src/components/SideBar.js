import React from 'react'

function SideBar() {
    return (
        <div id="sidebar" className="col-md-3 mt-3">
            {/* start sidebar */}
            <aside className="bg-white">
                {/* start single sidebar */}
                <div className="mu-single-sidebar">
                    <h3>Categories</h3>
                    <ul className="mu-sidebar-catg">
                        <li>
                            <a href="#">Web Design</a>
                        </li>
                        <li>
                            <a href="">Web Development</a>
                        </li>
                        <li>
                            <a href="">Math</a>
                        </li>
                        <li>
                            <a href="">Physics</a>
                        </li>
                        <li>
                            <a href="">Camestry</a>
                        </li>
                        <li>
                            <a href="">English</a>
                        </li>
                    </ul>
                </div>
                {/* end single sidebar */}
                {/* start single sidebar */}
                <div className="mu-single-sidebar">
                    <h3>Popular Course</h3>
                    <div className="mu-sidebar-popular-courses">
                        <div className="media">
                            <div className="media-left">
                                <a href="#">
                                    <img
                                        className="media-object"
                                        src="assets/img/courses/1.jpg"
                                        alt="img"
                                    />
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">
                                    <a href="#">Medical Science</a>
                                </h4>
                                <span className="popular-course-price">$200.00</span>
                            </div>
                        </div>
                        <div className="media">
                            <div className="media-left">
                                <a href="#">
                                    <img
                                        className="media-object"
                                        src="assets/img/courses/2.jpg"
                                        alt="img"
                                    />
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">
                                    <a href="#">Web Design</a>
                                </h4>
                                <span className="popular-course-price">$250.00</span>
                            </div>
                        </div>
                        <div className="media">
                            <div className="media-left">
                                <a href="#">
                                    <img
                                        className="media-object"
                                        src="assets/img/courses/3.jpg"
                                        alt="img"
                                    />
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">
                                    <a href="#">Health &amp; Sports</a>
                                </h4>
                                <span className="popular-course-price">$90.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end single sidebar */}
                {/* start single sidebar */}
                <div className="mu-single-sidebar">
                    <h3>Archives</h3>
                    <ul className="mu-sidebar-catg mu-sidebar-archives">
                        <li>
                            <a href="#">
                                May <span>(25)</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                June <span>(35)</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                July <span>(20)</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                August <span>(125)</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                September <span>(45)</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                October <span>(85)</span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* end single sidebar */}
                {/* start single sidebar */}
                <div className="mu-single-sidebar">
                    <h3>Tags Cloud</h3>
                    <div className="tag-cloud">
                        <a href="#">Health</a>
                        <a href="#">Science</a>
                        <a href="#">Sports</a>
                        <a href="#">Mathematics</a>
                        <a href="#">Web Design</a>
                        <a href="#">Admission</a>
                        <a href="#">History</a>
                        <a href="#">Environment</a>
                    </div>
                </div>
                {/* end single sidebar */}
            </aside>
            {/* / end sidebar */}
        </div>

    )
}

export default SideBar