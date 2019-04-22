import React from "react"
import react_logo from '../assets/images/react.png';

const ProgressSection = () => (
  <section id="cta" className="grey-section">
    <h2 className="h01">What I'm learning right now</h2>
    <div className="row">
      <div className="col-six">
        <p className="lead">
          <a href="https://facebook.github.io/react/" target="_blank"><img src={react_logo} alt="" style={{ height: `100px` }} /></a> <br />
          Currently learning React so I can decouple my Rails apps and separate client-side functionality, reduce server calls, speed up page loads, and create more efficient code.
        </p>
      </div>
      <div className="col-six">
        <h1 style={{ fontSize: "70px", margin: "0px" }}>UI/UX Design</h1>
        <p className="lead" style={{ marginTop: "18px" }}>
          I've always had a designer or guidelines for my projects, but I've always found myself a little lost when it comes to making designs and user interfaces. I want to be more of a designer and be able to be a self suffient web developer.
        </p>
      </div>
    </div>
  </section>
)

export default ProgressSection;