import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/about/about.jpg'
const About = () => {
    return (
        <section id="about_us" className="section_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="single_about wow fadeInLeft">
                            <div className="about_title">
                                <span>Who We Are</span>
                                <h2>Welcome To Our Foody Bakery</h2>
                                <p className="description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book. It has survived not only five centuries,
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                    roots in a piece of classical Latin literature from 45 BC, making it over
                                    2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                                    College in Virginia.Lorem Ipsum is not simply random text.
                                </p>
                            </div>
                            <Link href="#" className="btn btn-default main_btn">Book A Table</Link>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6">
                        <div className="single-about wow fadeInRight">
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default About