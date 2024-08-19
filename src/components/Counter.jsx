import React, { memo } from 'react'
import Image from '../images/counterup.jpg'
const Counter = memo(() => {
    return (
        <section id="counter_area"
            style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundAttachment: 'fixed' }}>
            <div className="count_overlay">
                <div className="container">
                    <div className="counter-content text-center">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="count">
                                    <h3><span className="counter">350</span>+</h3>
                                    <h5>Trusted By Customers</h5>
                                </div >
                            </div >

                            <div className="col-md-3 col-sm-6" >
                                <div className="count" >
                                    <h3><span className="counter">462</span>K</h3 >
                                    <h5>Product Sale Per Day</h5>
                                </div >
                            </div >

                            <div className="col-md-3 col-sm-6" >
                                <div className="count" >
                                    <h3><span className="counter">523</span> +</h3 >
                                    <h5>Years Of Foundation</h5>
                                </div >
                            </div >

                            <div className="col-md-3 col-sm-6" >
                                <div className="count" >
                                    <h3><span className="counter">624</span>K</h3 >
                                    <h5>Monthly Product Order</h5>
                                </div >
                            </div >
                        </div >
                    </div >
                </div >
            </div >
        </section >)
})

export default Counter