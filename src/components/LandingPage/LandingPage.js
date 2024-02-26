import React from 'react';
import './LandingPage.css';
import NavBar from '../NavBar/NavBar';

const LandingPage = () => {
    return (
        <div className="landing_background">
            <div className="img_overlay">
                <header className="main_header">
                    <NavBar />
                </header>
                <div className="lp_text text-center">
                    <p>Hi! My name is Abhinandan Singh Baghel. 
                        <br /> 
                       I am a CyberPunk <br />
                    </p>
                </div>
            </div>
        </div>
    )
};

export default LandingPage;

