import React from "react"
import profile_pic from '../../assets/images/profile-pic.jpg';

const AboutSection = () => (
  <section id="about">
    <div className="row section-intro">
      <div className="col-twelve">
        <h5>About</h5>
        <h1>Let me introduce myself.</h1>
        <div className="intro-info">
          <img src={profile_pic} alt="Profile" />
          <p className="lead">I'm a big nerd - I like Star trek, board games, and comics but my real passion is tech and development. I love how you can build products and solutions that can help people and causes. Build things that can have real actionable impacts in everyday life. Innovate on ideas that can take off and create whole ecosystems around it.</p>
        </div>
      </div>
    </div>

    <div className="row about-content">
      <div className="col-six tab-full">
        <h3>Profile</h3>
        <p></p>
        <ul className="info-list">
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

      <div className="col-six tab-full">
        <h3>Skills</h3>
        <p></p>
        <ul className="skill-bars">
          <li>
            <div className="progress percent90"><span>90%</span></div>
            <strong>Java</strong>
          </li>
          <li>
            <div className="progress percent80"><span>80%</span></div>
            <strong>Javascript</strong>
          </li>
          <li>
            <div className="progress percent90"><span>90%</span></div>
            <strong>JQuery</strong>
          </li>
          <li>
            <div className="progress percent60"><span>60%</span></div>
            <strong>PHP</strong>
          </li>
          <li>
            <div className="progress percent60"><span>60%</span></div>
            <strong>Ruby on Rails</strong>
          </li>
          <li>
            <div className="progress percent75"><span>75%</span></div>
            <strong>Wordpress</strong>
          </li>
        </ul>
      </div>
    </div>

    <div className="row button-section">
      <div className="col-twelve">
        <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
      </div>
    </div>
  </section>
)

export default AboutSection
