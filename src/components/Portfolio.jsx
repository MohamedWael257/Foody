import React, { memo, useEffect } from 'react'
import Image1 from '../images/portfolio/1.jpg'
import Image2 from '../images/portfolio/2.jpg'
import Image3 from '../images/portfolio/3.jpg'
import Image4 from '../images/portfolio/4.jpg'
import Image5 from '../images/portfolio/5.jpg'
import Image6 from '../images/portfolio/6.jpg'
import $ from 'jquery'
const Portfolio = memo(() => {
    useEffect(() => {
        // jQuery to filter items by class name
        $('.filter-button').on('click', function () {
            const filterClass = $(this).attr('data-filter');

            if (filterClass === 'All') {
                $('.element-item').show(); // Show all items
            } else {
                $('.element-item').hide(); // Hide all items
                $(`.element-item.${filterClass}`).show(); // Show only items with the selected class
            }
        });

        // Cleanup event listeners on unmount
        return () => {
            $('.filter-button').off('click');
        };
    }, []);

    return (
        <section id="portfolio" className="section_padding">
            <div className="container">
                <div className="section_heading text-center wow zoomIn">
                    <h2>Our <span>Gallery</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam<br /> ultrices sapien vel quam
                        luctus pulvinar.</p>

                    <div className="section_heading_border">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="our_port_menu text-center">
                    <ul>
                        <li className="active filter-button" data-filter="All">All</li>
                        <li className='filter-button' data-filter="expert">Pizza</li>
                        <li className='filter-button' data-filter="consult">Fruits</li>
                        <li className='filter-button' data-filter="research">Pasta</li>
                        <li className='filter-button' data-filter="video">Vegetables</li>
                    </ul>
                </div>

                <div className="grid_item_area">
                    <div className="col-md-4 col-sm-6 element-item expert" >
                        <div className="box">
                            <img src={Image1} alt="" />
                            <div className="box-content">
                                <h3 className="title">Pizza</h3>
                                <ul className="icon">
                                    <li><a href={Image1} data-lightbox="images"><i
                                        className="fa fa-search-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 element-item expert consult" >
                        <div className="box">
                            <img src={Image2} alt="" />
                            <div className="box-content">
                                <h3 className="title">Vegetables</h3>
                                <ul className="icon">
                                    <li><a href={Image2} data-lightbox="images"><i
                                        className="fa fa-search-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 element-item research">
                        <div className="box">
                            <img src={Image3} alt="" />
                            <div className="box-content">
                                <h3 className="title">Beaf</h3>
                                <ul className="icon">
                                    <li><a href={Image3} data-lightbox="images"><i
                                        className="fa fa-search-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 element-item research video">
                        <div className="box">
                            <img src={Image4} alt="" />
                            <div className="box-content">
                                <h3 className="title">Biscut</h3>
                                <ul className="icon">
                                    <li><a href={Image4} data-lightbox="images"><i
                                        className="fa fa-search-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 element-item expert research" >
                        <div className="box">
                            <img src={Image5} alt="" />
                            <div className="box-content">
                                <h3 className="title">Cakes</h3>
                                <ul className="icon">
                                    <li><a href={Image5} data-lightbox="images"><i
                                        className="fa fa-search-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 element-item expert research video">
                        <div className="box">
                            <img src={Image6} alt="" />
                            <div className="box-content">
                                <h3 className="title">Fruits</h3>
                                <ul className="icon">
                                    <li><a href={Image6} data-lightbox="images"><i
                                        className="fa fa-search-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>)
})

export default Portfolio