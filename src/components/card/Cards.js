import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';

function Cards(props) {
  return (
    <div className='col-md-4 mt-3 text-white'>
      <div id="card">
        <div className="card__header">
          <img
            src={props.courseimage}
            alt="card__image"
            className="card__image"
            width={600}
          />
        </div>
        <div className="card__body">
          <span className="tag tag-blue">{props.coursesubject}</span>
          <h4 className='mt-3'>{props.coursetitle}</h4>

        </div>
        <div className="card__footer mt-3">
          <div className="user">
            <img
              src="/images/teacher-1.png"
              alt="user__image"
              className="user__image"
            />
            <div className="user__info row">
              <div className='col-9'>
                <h5>{props.courseteacher}</h5>
              </div>
              <div className='col-3'>
                <Link id="btnplay" to={props.url} ><i className="fa-solid fa-circle-play display-4 text-white"></i></Link>
              </div>


            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Cards;
