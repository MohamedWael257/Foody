import React, { memo } from 'react'

const Service = memo(() => {
    return (
        <section id="service" className="gray_bg section_padding">
            <div className="container">
                <div className="section_heading text-center wow zoomIn">
                    <h2>Our <span>Service</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam<br /> ultrices sapien vel quam
                        luctus pulvinar.</p>

                    <div className="section_heading_border">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single-service wow fadeInLeft">
                            <i className="fa fa-coffee"></i>
                            <h4>Fresh Food</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single-service wow fadeInDown">
                            <i className="fa fa-car"></i>
                            <h4>Fast Delivery</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single-service wow fadeInRight">
                            <i className="fa fa-cubes"></i>
                            <h4>Quality Maintain</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single-service wow fadeInLeft">
                            <i className="fa fa-pencil-square-o"></i>
                            <h4>Pasta Salad</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single-service wow fadeInUp">
                            <i className="fa fa-pie-chart"></i>
                            <h4>Brief Pizza</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single-service wow fadeInRight">
                            <i className="fa fa-support fa-lg"></i>
                            <h4>24/7 Service</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
})

export default Service