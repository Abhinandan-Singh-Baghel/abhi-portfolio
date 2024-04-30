import React from 'react';
import './Carousel.css';

const Carousel1 = () => {
    return (
        <div className="carousel_wrapper text-white text-center">
            <div classname="ch_container">
                <p className='carousel_heading'>Front End</p>
            </div>
            <div id="carouselExampleControls1" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block img-fluid" src={require('./images/api-site.jpg')} alt="First slide" />
                        <div class="carousel-caption d-sm-block">
                            <h5>Favorite Food and Drink GIFs!</h5>
                            <p className="carousel_link"><a href="https://github.com/Abhinandan-Singh-Baghel/api-site" target="_blank" rel="noopener noreferrer">Repo Link</a></p>
                            <p className="carousel_link"><a href="https://abhinandan-singh-baghel.github.io/api-site/" target="_blank" rel="noopener noreferrer">Deployed</a></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={require('./images/clicky-game.png')} alt="Second slide" />
                        <div class="carousel-caption d-sm-block">
                        <h5>Puppy Memory Game</h5>
                            <p className="carousel_link"><a href="https://github.com/Abhinandan-Singh-Baghel/clicky-game-master" target="_blank" rel="noopener noreferrer">Repo Link</a></p>
                            <p className="carousel_link"><a href="https://abhinandan-singh-baghel.github.io/clicky-game-master/" target="_blank" rel="noopener noreferrer">Deployed</a></p>
                        </div>
                    </div>
                    {/* <div className="carousel-item">
                        <img className="d-block img-fluid" src={require('./images/musicSite.jpg')} alt="Third slide" />
                        <div class="carousel-caption d-sm-block">
                        <h5>Find A Show! (Group Project)</h5>
                            <p className="carousel_link"><a href="https://github.com/mstig/project-one" target="_blank" rel="noopener noreferrer">Repo Link</a></p>
                            <p className="carousel_link"><a href="https://mstig.github.io/Project-One/" target="_blank" rel="noopener noreferrer">Deployed</a></p>
                        </div>
                    </div> */}
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={require('./images/crystals.jpg')} alt="Fourth slide" />
                        <div class="carousel-caption d-sm-block">
                        <h5>Crystals Collector</h5>
                            <p className="carousel_link"><a href="https://github.com/Abhinandan-Singh-Baghel/unit-4-game-master" target="_blank" rel="noopener noreferrer">Repo Link</a></p>
                            <p className="carousel_link"><a href="https://abhinandan-singh-baghel.github.io/unit-4-game-master/" target="_blank" rel="noopener noreferrer">Deployed</a></p>
                        </div>
                    </div>
                    {/* <div className="carousel-item">
                        <img className="d-block img-fluid" src={require('./images/World_Cup.jpg')} alt="Fifth slide" />
                        <div class="carousel-caption d-sm-block">
                        <h5>World Cup Trivia</h5>
                            <p className="carousel_link"><a href="https://github.com/patlehmann1/triviagame/" target="_blank" rel="noopener noreferrer">Repo Link</a></p>
                            <p className="carousel_link"><a href="https://patlehmann1.github.io/triviagame/" target="_blank" rel="noopener noreferrer">Deployed</a></p>
                        </div>
                    </div> */}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
};

export default Carousel1;