import React from "react";
import "./SliderCard.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const SliderCard = (props) => {

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 290;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 290;
  };

  return (
    <div id="main-slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideLeft}
      />
      <div id="slider">
        {props.slides.map((slide, index) => {
          return (
            <div className="slider-card" key={index}>
              <div
                className="slider-card-image"
                style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }}
              ></div>
              <p className="slider-card-title">{slide.title}</p>
              <p className="slider-card-description">{slide.description}</p>
              <button className="sliderButton">{slide.button}</button>
            </div>
          );
        })}
      </div>
      <MdChevronRight
        size={40}
        className="slider-icon right"
        onClick={slideRight}
      />
    </div>
  );
};


export default SliderCard;
