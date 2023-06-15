import React from 'react';
import './Carousel.css';

const Carousel2 = () => {
    return (
        <div className="carousel_wrapper text-white text-center">
            <div classname="ch_container">
                <p className='carousel_heading'>Back End</p>
            </div>
            <div id="carouselExampleControls2" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block img-fluid" src={require('./images/liri_node_app.jpg')} alt="First slide" />
                        <div class="carousel-caption d-sm-block">
                            <h5>LIRI Node App</h5>
                            <p className="carousel_link"><a href="https://github.com/patlehmann1/liri-node-app/" target="_blank" rel="noopener noreferrer">Repo Link</a></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={require('./images/node_mysql_store.jpg')} alt="Second slide" />
                        <div class="carousel-caption d-sm-block">
                            <h5>Bamazon: Node/MySQL Store</h5>
                            <p className="carousel_link"><a href="https://github.com/patlehmann1/node_mysql_store/" target="_blank" rel="noopener noreferrer">Repo Link</a></p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
};

export default Carousel2;