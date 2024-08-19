import React, { memo } from 'react'

const Contact = memo(() => {
    return (
        <section id="contact" className="section_padding">
            <div className="container">
                <div className="section_heading text-center wow zoomIn">
                    <h2>Get In <span>Touch</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam<br /> ultrices sapien vel quam
                        luctus pulvinar.</p>

                    <div className="section_heading_border">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <form className="form" name="enq" method="post" action="contact.php" >
                            <div className="row">
                                <div className="input_padding text-center">
                                    <div className="form-group col-sm-12">
                                        <input type="text" name="name" className="form-control" placeholder="Name"
                                            required="required" />
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <input type="email" name="email" className="form-control" placeholder="Email"
                                            required="required" />
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <input type="text" name="subject" className="form-control" placeholder="Subject"
                                            required="required" />
                                    </div>
                                    <div className="form-group col-sm-12 mab-none">
                                        <textarea rows="6" name="message" className="form-control" placeholder="Your Message"
                                            required="required"></textarea>
                                    </div>
                                    <div className="form-group mb0 col-sm-12">
                                        <div className="actions">
                                            <button type="submit" value="Send message" name="submit" id="submitButton"
                                                className="btn btn-default contact_btn" title="Submit Your Message!">Send
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>)
})

export default Contact