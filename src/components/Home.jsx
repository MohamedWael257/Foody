import React from 'react'
import { Link } from 'react-router-dom'
import Image1 from '../images/1.jpg'
import Image2 from '../images/2.jpg'
import Image3 from '../images/3.jpg'

export default function Home() {
    return (
        <section id="home" className="welcome-area">
            <div className="welcome-slider-area">
                <div id="welcome-slide-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner" >
                        <div className="carousel-item ng-star-inserted active">
                            <div className="single-slide-item"
                                style={{ backgroundImage: `url(${Image1})`, maxHeight: '100%', backgroundSize: 'cover' }}>
                                <div className="single-slide-item-table">
                                    <div className="single-slide-item-tablecell">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h2 className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.3s"
                                                        data-wow-offset="0">Welcome To</h2>
                                                    <h1 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s"
                                                        data-wow-offset="0">Foody Fresh Food <span>Template</span></h1>
                                                    <p className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s"
                                                        data-wow-offset="0">Lorem Ipsum is simply dummy text of the printing
                                                        and typesetting industry. Lorem<br /> Ipsum has been the industry's
                                                        standard dummy text.</p>

                                                    <div className="single_slide_item_button wow fadeInUp"
                                                        data-wow-duration="1s" data-wow-delay="1s" data-wow-offset="0">
                                                        <Link href="#portfolio" className="slider_btn s_bg_btn">Book Now</Link>
                                                        <Link href="#contact" className="slider_btn">Our Menu</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ng-star-inserted"
                            style={{ backgroundImage: `url(${Image2})`, maxHeight: '100%', backgroundSize: 'cover' }}>
                            <div className="single-slide-item slide-2">
                                <div className="single-slide-item-table">
                                    <div className="single-slide-item-tablecell">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h2 className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.3s"
                                                        data-wow-offset="0">Welcome To</h2>
                                                    <h1 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s"
                                                        data-wow-offset="0">We Have Modern Creative <span>Bakery</span></h1>
                                                    <p className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s"
                                                        data-wow-offset="0">Lorem Ipsum is simply dummy text of the printing
                                                        and typesetting industry. Lorem<br /> Ipsum has been the industry's
                                                        standard dummy text.</p>

                                                    <div className="single_slide_item_button wow fadeInUp"
                                                        data-wow-duration="1s" data-wow-delay="1s" data-wow-offset="0">
                                                        <Link href="#portfolio" className="slider_btn s_bg_btn">Book Now</Link>
                                                        <Link href="#contact" className="slider_btn">Our Menu</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ng-star-inserted"
                            style={{ backgroundImage: `url(${Image3})`, maxHeight: '100%', backgroundSize: 'cover' }}>
                            <div className="single-slide-item slide-3">
                                <div className="single-slide-item-table">
                                    <div className="single-slide-item-tablecell">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h2 className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.3s"
                                                        data-wow-offset="0">Welcome To</h2>
                                                    <h1 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s"
                                                        data-wow-offset="0">We Provide Food Delivery <span>Service</span>
                                                    </h1>
                                                    <p className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s"
                                                        data-wow-offset="0">Lorem Ipsum is simply dummy text of the printing
                                                        and typesetting industry. Lorem<br /> Ipsum has been the industry's
                                                        standard dummy text.</p>

                                                    <div className="single_slide_item_button wow fadeInUp"
                                                        data-wow-duration="1s" data-wow-delay="1s" data-wow-offset="0">
                                                        <Link href="#portfolio" className="slider_btn s_bg_btn">Book Now</Link>
                                                        <Link href="#contact" className="slider_btn">Our Menu</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" data-bs-target="#welcome-slide-carousel" data-bs-slide="prev"
                        className="carousel-control-prev left carousel-control">
                        <i className="ti-hand-point-left" aria-hidden="true" ></i>
                    </button>
                    <button type="button" data-bs-target="#welcome-slide-carousel" data-bs-slide="next"
                        className="carousel-control-next right carousel-control">
                        <i className="ti-hand-point-right" aria-hidden="true" ></i>
                    </button>
                </div>
            </div>
        </section>
    )
}
