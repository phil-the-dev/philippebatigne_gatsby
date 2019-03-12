import React from "react"

const AboutSection = () => (
    <section id="about">
      <div class="row section-intro">
        <div class="col-twelve">
          <h5>About</h5>
          <h1>Let me introduce myself.</h1>
          <div class="intro-info">
            <img src="images/profile-pic.jpg" alt="Profile Picture"></img>
            <p class="lead">I'm a big nerd - I like Star trek, board games, and comics but my real passion is tech and development. I love how you can build products and solutions that can help people and causes. Build things that can have real actionable impacts in everyday life. Innovate on ideas that can take off and create whole ecosystems around it.</p>
          </div>
        </div>
      </div>

    <div class="row about-content">
      <div class="col-six tab-full">
        <h3>Profile</h3>
        <p></p>
        <ul class="info-list">
          <li>
            <strong>Birth Date:</strong>
            <span>April 1989</span>
          </li>
          <li>
            <strong>Job:</strong>
            <span>Backend/Frontend Developer</span>
          </li>
          <li>
            <strong>Favorite Shows:</strong>
            <span>The Flash, Rick and Morty, BoJack Horseman</span>
          </li>
        </ul>
      </div>

      <div class="col-six tab-full">
        <h3>Skills</h3>
        <p></p>
        <ul class="skill-bars">
          <li>
            <div class="progress percent90"><span>90%</span></div>
            <strong>Java</strong>
          </li>
          <li>
            <div class="progress percent80"><span>80%</span></div>
            <strong>Javascript</strong>
          </li>
          <li>
            <div class="progress percent90"><span>90%</span></div>
            <strong>JQuery</strong>
          </li>
          <li>
            <div class="progress percent60"><span>60%</span></div>
            <strong>PHP</strong>
          </li>
          <li>
            <div class="progress percent60"><span>60%</span></div>
            <strong>Ruby on Rails</strong>
          </li>
          <li>
            <div class="progress percent75"><span>75%</span></div>
            <strong>Wordpress</strong>
          </li>
        </ul>
      </div>
    </div>

    <div class="row button-section">
      <div class="col-twelve">
        <a href="#contact" title="Hire Me" class="button stroke smoothscroll">Hire Me</a>
      </div>
    </div>
  </section>
)

export default AboutSection
