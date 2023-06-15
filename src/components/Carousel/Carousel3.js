import React from 'react';
import './Carousel.css';

const Carousel3 = () => {
    return (
        <div className="carousel_wrapper text-white text-center">
            <div classname="ch_container">
                <p className='carousel_heading'>Full Stack</p>
            </div>
            <div id="carouselExampleControls3" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block img-fluid" src={require('./images/DinnerBell.png')} alt="First slide" />
                        <div class="carousel-caption d-sm-block">
                            <h5>Dinner Bell</h5>
                            <p className="carousel_link"><a href="https://github.com/roigme/dinnerbell/" target="_blank" rel="noopener noreferrer">Repo Link</a></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={require('./images/newsday_headlines.jpg')} alt="Second slide" />
                        <div class="carousel-caption d-sm-block">
                            <h5>Newsday Headline Scraper</h5>
                            <p className="carousel_link"><a href="https://github.com/patlehmann1/quote_scraper" target="_blank" rel="noopener noreferrer">Repo Link</a></p>
                            <p className="carousel_link"><a href="https://fast-fortress-79428.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed</a></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={require('./images/pouches.jpg')} alt="Third slide" />
                        <div class="carousel-caption d-sm-block">
                            <h5>Pouches: Kickstarter Data Analysis (Group Project)</h5>
                            <p className="carousel_link"><a href="https://github.com/Jedwards18/Project-2" target="_blank" rel="noopener noreferrer">Repo Link</a></p>
                            <p className="carousel_link"><a href="https://pouches.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed</a></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={require('./images/eat_da_burger.jpg')} alt="Third slide" />
                        <div class="carousel-caption d-sm-block">
                            <h5>Eat-Da-Burger!</h5>
                            <p className="carousel_link"><a href="https://github.com/patlehmann1/eat_da_burger" target="_blank" rel="noopener noreferrer">Repo Link</a></p>
                            <p className="carousel_link"><a href="https://whispering-island-71496.herokuapp.com/burgers" target="_blank" rel="noopener noreferrer">Deployed</a></p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls3" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls3" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
};

export default Carousel3;