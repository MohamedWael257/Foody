import React, { memo } from 'react'
import Team1 from '../images/team/1.jpg'
import Team2 from '../images/team/2.jpg'
import Team3 from '../images/team/3.jpg'
import Team4 from '../images/team/4.jpg'
import { Link } from 'react-router-dom'

const Team = memo(() => {
    return (
        <section id="team" className="section_padding">
            <div className="container">
                <div className="section_heading text-center wow zoomIn">
                    <h2>Our <span>Team</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam<br /> ultrices sapien vel quam
                        luctus pulvinar.</p>

                    <div className="section_heading_border">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_team wow fadeInLeft">
                            <div className="team-overlay text-center">
                                <div className="overlay-text">
                                    <h3>Douglas Cowell</h3>
                                    <p>Brand Chef</p>
                                </div>
                                <div className="team_icon">
                                    <Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                    <Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                    <Link href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                            <img src={Team1} alt="team-img" className="img-fluid w-100" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_team wow fadeInLeft">
                            <div className="team-overlay text-center">
                                <div className="overlay-text">
                                    <h3>Ayoub Fennouni</h3>
                                    <p>Sous Chef</p>
                                </div>
                                <div className="team_icon">
                                    <Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                    <Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                    <Link href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                            <img src={Team2} alt="team-img" className="img-fluid w-100" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_team wow fadeInRight">
                            <div className="team-overlay text-center">
                                <div className="overlay-text">
                                    <h3>Lawrence Mackie</h3>
                                    <p>Juniour Chef</p>
                                </div>
                                <div className="team_icon">
                                    <Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                    <Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                    <Link href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                            <img src={Team3} alt="team-img" className="img-fluid w-100" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_team wow fadeInRight">
                            <div className="team-overlay text-center">
                                <div className="overlay-text">
                                    <h3>Amira Yerden</h3>
                                    <p>Head Chef</p>
                                </div>
                                <div className="team_icon">
                                    <Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                    <Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                    <Link href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                            <img src={Team4} alt="team-img" className="img-fluid w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Team