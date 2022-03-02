import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Testimonials.scss";
import { urlFor, client } from "../../client";
import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brans, setBrands] = useState([]);
  const handleClick = (index) => {
    setCurrentIndex(index)
  }
  return (
    <>
      <div className="app__testimonials-item app__flex">
        <img
          src={urlFor(testimonials[currentIndex].imgurl)}
          alt={testimonials[currentIndex].name}
          srcset=""
        />
        <div className="app__testimonials-content">
          <p className="p-text">{testimonials[currentIndex].feedback}</p>
          <div>
            <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
            <h5 className="p-text">{testimonials[currentIndex].company}</h5>
          </div>
        </div>
      </div>
      <div className="app__testimonials-btns app__flex">
        <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length -1 : currentIndex -1 )}>
          <HiChevronLeft />
        </div>
        <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length -1 ? 0 : currentIndex + 1 )}>
          <HiChevronRight />
        </div>
      </div>
    </>                                                                                                                          
  );
};

export default Testimonials;
