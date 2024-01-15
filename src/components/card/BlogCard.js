import React from 'react'
import './BlogCard.css';
function BlogCard(props) {
    return (
        <div className='col-md-4 mt-3 text-white'>
            <div id="blogcard">
                <div className="card__header">
                    <img
                        src={props.blogimage}
                        alt="card__image"
                        className="card__image"
                        width={600}
                    />
                </div>
                <div className="card__body">
                    <span className="tag tag-blue">{props.blogsubject}</span>
                    <h4>{props.blogtitle}</h4>
                    <p>
                        {props.blogartical}Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                        perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque
                        quidem!
                    </p>
                </div>
                <div className="card__footer">
                    <div className="user">
                        <img
                            src="/images/teacher-1.png"
                            alt="user__image"
                            className="user__image"
                        />
                        <div className="user__info">
                            <h5>{props.blogauthor}</h5>
                            <small className='text-white'>2h ago</small>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>



    )
}

export default BlogCard