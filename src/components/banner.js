import React from "react"

const Banner = () => (
  <section id="intro">
    <div class="intro-overlay"></div>
    <div class="intro-content">
      <div class="row">
        <div class="col-twelve">
          <h1>Hi, I'm Philippe Batigne.</h1>
          <h5>pronounced "fill-leap" "bat-teen"</h5>
          <p class="intro-position">
            <span>Full Stack Web Developer</span>
          </p>
          <a class="button stroke smoothscroll" href="#about" title="">More About Me</a>
        </div>
      </div>
    </div>

    <ul class="intro-social">
      <li><a href="https://www.linkedin.com/in/philippebatigne"><i class="fab fa-linkedin-in"></i></a></li>
    </ul>
  </section>
)

export default Banner
