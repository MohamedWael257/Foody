import React from 'react'

export default function Navbar() {
    return (
        <header className="header_area">
            <div className="main_header navbar navbar-default menu-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-2 col-xs-4">
                            <div className="logo">
                                <a href="index.html" className="navbar-brand">
                                    <p>Foody</p>
                                </a>
                                <div className="mobile-nav"></div>
                            </div>
                        </div>

                        <div className="col-md-10 col-sm-10 col-xs-8">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                    <span className="fa fa-navicon"></span>
                                </button>
                            </div>

                            <nav id="navbar" className="navbar-collapse collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#about_us">About</a></li>
                                    <li><a href="#service">Service</a></li>
                                    <li><a href="#portfolio">Gallery</a></li>
                                    <li><a href="#team">Team</a></li>
                                    <li><a href="#pricing_table">Pricing</a></li>
                                    <li><a href="#blog">Blog</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>)
}
