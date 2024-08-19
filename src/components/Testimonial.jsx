import React, { memo } from 'react'
import Image1 from '../images/testimonial/testimonial.jpg'
import Image2 from '../images/testimonial/1.jpg'
import Image3 from '../images/testimonial/2.jpg'
import Image4 from '../images/testimonial/3.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Testimonial = memo(() => {
    const options = {
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoPlay: true,
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            6000: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    };
    return (
        <section id="testimonial"
            style={{ backgroundImage: `url(${Image1})`, backgroundSize: 'cover', backgroundPosition: 'center center;', backgroundAttachment: 'fixed' }}>
            <div className="testi_overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-offset-1 col-md-10">
                            <OwlCarousel className='owl-theme' dots loop autoplay margin={10} responsive={options.responsive} items={1} >
                                <div className="itemm" style={{ width: '945px;', marginRight: '10px;' }}>
                                    <div className="single_testimonial">
                                        <div className="pic">
                                            <img src={Image2} alt="" />
                                        </div>
                                        <div className="testimonial-review">
                                            <p className="testimonial-description">Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed do eiu nt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                                dolor in reprehenderit in voluptat</p>
                                            <h4 className="testimonial-title">
                                                Miss Elina Pool<br />
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="itemm" style={{ width: '945px;', marginRight: '10px;' }}>
                                    <div className="single_testimonial">
                                        <div className="pic">
                                            <img src={Image3} alt="" />
                                        </div>
                                        <div className="testimonial-review">
                                            <p className="testimonial-description">Sed do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                                esse cillum dolore eu</p>
                                            <h4 className="testimonial-title">
                                                Mr. Antoine Varane<br />
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="itemm" style={{ width: '945px;', marginRight: '10px;' }}>
                                    <div className="single_testimonial">
                                        <div className="pic">
                                            <img src={Image4} alt="" />
                                        </div>
                                        <div className="testimonial-review">
                                            <p className="testimonial-description">Consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit ess</p>
                                            <h4 className="testimonial-title">
                                                Miss Lucy Walker<br />
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
})

export default Testimonial