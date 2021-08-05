import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaGithub } from "react-icons/fa";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function Gallery({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const nextSlider = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlider = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow " onClick={prevSlider} />
      <FaArrowAltCircleRight className="right-arrow " onClick={nextSlider} />

      {SliderData.map(({id,img,title}) => {
        return (
          <div className="project-container">
            <div
              className={id === current ? "slide active" : "slide"}
              key={id}
            >
              {id === current && (
                <img
                  src={img}
                  alt="projects screen shots"
                  className="sliderImage"
                />
              )}
              <div className="projects-info">
                <h1>{title}</h1><a target="blank" href="https://github.com/hamzadarej" ><FaGithub/></a>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Gallery;
