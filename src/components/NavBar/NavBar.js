import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg" id="navbar">
            <a className="navbar navbar-brand text-white" href="#navbar">P W L</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#aboutme_wrapper">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio_wrapper">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact_wrapper">Contact</a>
                    </li>
                    <li className="nav-item dropdown">
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#aboutme_wrapper">About</a>
                            <a className="dropdown-item" href="#portfolio_wrapper">Portfolio</a>
                            <a className="dropdown-item" href="#contact_wrapper">Contact</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default NavBar;