import React, { memo } from 'react'

const Pricing = memo(() => {
    return (
        <section id="pricing_table" className="gray_bg section_padding">
            <div className="container">
                <div className="section_heading text-center wow zoomIn">
                    <h2>Pricing <span>Plan</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam<br /> ultrices sapien vel quam
                        luctus pulvinar.</p>

                    <div className="section_heading_border">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s"
                        data-wow-offset="0">
                        <div className="pricingTable">
                            <div className="pricingTable-header">
                                <div className="heading">
                                    <h3>Breakfast</h3>
                                    <span className="subtitle">Lorem ipsum dolor</span>
                                </div>
                                <span className="price-value"><i className="fa fa-usd"></i><span>10</span><span
                                    className="mo">Daily</span></span>
                            </div>

                            <div className="pricingContent">
                                <ul>
                                    <li>Sat - 7am-11am</li>
                                    <li>Sun - 6am-10am</li>
                                    <li>Mon - 8am-10am</li>
                                    <li>Tue - 7am-10am</li>
                                    <li>Wed - 6am-11am</li>
                                </ul>
                            </div>

                            <div className="pricingTable-sign-up">
                                <a href="#" className="btn btn-default main_btn">Get Started</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s"
                        data-wow-offset="0">
                        <div className="pricingTable">
                            <div className="pricingTable-header">
                                <div className="heading">
                                    <h3>Launch</h3>
                                    <span className="subtitle">Lorem ipsum dolor</span>
                                </div>
                                <span className="price_value"><i className="fa fa-usd"></i><span>20</span><span
                                    className="mo">Monthly</span></span>
                            </div>

                            <div className="pricingContent">
                                <ul>
                                    <li>Sat - 12pm-1pm</li>
                                    <li>Sun - 11am-2pm</li>
                                    <li>Mon - 12pm-1pm</li>
                                    <li>Tue - 1pm-2pm</li>
                                    <li>Wed - 12pm-1pm</li>
                                </ul>
                            </div>

                            <div className="pricingTable-sign-up">
                                <a href="#" className="btn btn-default main_btn">Get Started</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s"
                        data-wow-offset="0">
                        <div className="pricingTable">
                            <div className="pricingTable-header">
                                <div className="heading">
                                    <h3>Dinner</h3>
                                    <span className="subtitle">Lorem ipsum dolor</span>
                                </div>
                                <span className="price-value"><i className="fa fa-usd"></i><span>30</span><span
                                    className="mo">Yearly</span></span>
                            </div>

                            <div className="pricingContent">
                                <ul>
                                    <li>Sat - 6pm-8pm</li>
                                    <li>Sun - 8pm-10pm</li>
                                    <li>Mon - 6pm-7pm</li>
                                    <li>Tue - 7pm-9pm</li>
                                    <li>Wed - 8pm-9pm</li>
                                </ul>
                            </div>

                            <div className="pricingTable-sign-up">
                                <a href="#" className="btn btn-default main_btn">Get Started</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>)
})

export default Pricing