import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Portfolio from './components/Portfolio'
import Counter from './components/Counter'
import Team from './components/Team'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Copyright from './components/Copyright'
export default function app() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Portfolio />
      <Counter />
      <Team />
      <Pricing />
      <Testimonial />
      <Blog />
      <Contact />
      <Copyright />
    </>
  )
}
