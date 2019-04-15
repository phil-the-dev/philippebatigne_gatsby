import React from "react"
import ReactFitText from 'react-fittext'

const Banner = () => (
  <section id="intro">
    <div className="intro-overlay"></div>
    <div className="intro-content">
      <div className="row">
        <div className="col-twelve">
          <ReactFitText>
            <h1>Hi, I'm Philippe Batigne.</h1>
          </ReactFitText>
          <h5>pronounced "fill-leap" "bat-teen"</h5>
          <p className="intro-position">
            <span>Full Stack Web Developer</span>
          </p>
          <a className="button stroke smoothscroll" href="#about" title="">More About Me</a>
        </div>
      </div>
    </div>

    <ul className="intro-social">
      <li><a href="https://www.linkedin.com/in/philippebatigne"><i className="fab fa-linkedin-in"></i></a></li>
    </ul>
  </section>
)

export default Banner
