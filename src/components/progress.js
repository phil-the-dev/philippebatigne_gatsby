import React from "react"

const ProgressSection = () => (
  <section id="cta" class="grey-section">
    <h2 class="h01">What I'm learning right now</h2>
    <div class="row">
      <div class="col-six">
        <p class="lead">
          <a href="https://facebook.github.io/react/" target="_blank"><img src="images/react.png" alt="" style={{height:`100px`}}/></a> <br/>
          Currently learning React so I can decouple my Rails apps and separate client-side functionality, reduce server calls, speed up page loads, and create more efficient code.
        </p>
      </div>
      <div class="col-six">
        <h1 style={{fontSize: "70px", margin: "0px"}}>UI/UX Design</h1> 
        <p class="lead" style={{marginTop: "18px"}}>
          I've always had a designer or guidelines for my projects, but I've always found myself a little lost when it comes to making designs and user interfaces. I want to be more of a designer and be able to be a self suffient web developer.
        </p>
      </div>
    </div>
  </section>
)

export default ProgressSection;