import React, { memo } from 'react'
import Image1 from '../images/blog/1.jpg'
import Image2 from '../images/blog/1(1).png'
import Image3 from '../images/blog/2.jpg'
import Image4 from '../images/blog/1(2).png'
import Image5 from '../images/blog/3.jpg'
import { Link } from 'react-router-dom'

const Blog = memo(() => {
    return (
        <section id="blog" className="gray_bg section_padding">
            <div className="container">
                <div className="section_heading text-center wow zoomIn">
                    <h2>Latest <span>News</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam<br /> ultrices sapien vel quam
                        luctus pulvinar.</p>

                    <div className="section_heading_border">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="blog_area wow fadeInUp">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="post-slide">
                                <div className="post-img">
                                    <img src={Image1} alt="" />
                                    <span className="icons">
                                        <img src={Image2} alt="" />
                                    </span>
                                </div>
                                <div className="post-review">
                                    <Link href="#">
                                        <h3 className="post-title">Right Way to Make Coffee</h3>
                                    </Link>
                                    <ul className="post-bar">
                                        <li><i className="fa fa-calendar"></i>December 30, 2024</li>
                                        <li><i className="fa fa-user"></i> Cooker</li>
                                    </ul>
                                    <p className="post-description">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                    <Link href="#" className="read">read more<i className="fa fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="post-slide">
                                <div className="post-img">
                                    <img src={Image3} alt="" />
                                    <span className="icons">
                                        <img src={Image4} alt="" />
                                    </span>
                                </div>
                                <div className="post-review">
                                    <Link href="#">
                                        <h3 className="post-title">Truly Amazing Blueberry</h3>
                                    </Link>
                                    <ul className="post-bar">
                                        <li><i className="fa fa-calendar"></i>December 30, 2024</li>
                                        <li><i className="fa fa-user"></i> Chef</li>
                                    </ul>
                                    <p className="post-description">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                    <Link href="#" className="read">read more<i className="fa fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="post-slide">
                                <div className="post-img">
                                    <img src={Image5} alt="" />
                                    <span className="icons">
                                        <img src={Image2} alt="" />
                                    </span>
                                </div>
                                <div className="post-review">
                                    <Link href="#">
                                        <h3 className="post-title">The benefits of Buffalo Meat</h3>
                                    </Link>
                                    <ul className="post-bar">
                                        <li><i className="fa fa-calendar"></i>December 30, 2024</li>
                                        <li><i className="fa fa-user"></i> Cooker</li>
                                    </ul>
                                    <p className="post-description">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                    <Link href="#" className="read">read more<i className="fa fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
})

export default Blog