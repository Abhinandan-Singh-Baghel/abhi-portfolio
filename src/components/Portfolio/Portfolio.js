import React from 'react';
import Carousel1 from '../Carousel/Carousel1';
import Carousel2 from '../Carousel/Carousel2';
import Carousel3 from '../Carousel/Carousel3';


import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className='portfolio_wrapper' id='portfolio_wrapper'>
            <p className='portfolio_heading text-white text-center'>Portfolio</p>
            <div className='main_carousel'>
                <div className='carousel_1'>
                    <Carousel1 />
                </div>
                <div className="carousel_2">
                    <Carousel2 />
                </div>
                <div className="carousel_2">
                    <Carousel3 />
                </div>
            </div>
        </div>
    )
};

export default Portfolio;