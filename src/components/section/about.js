import React from "react"
import profile_pic from '../../assets/images/profile-pic.jpg';

const AboutSection = () => {
  const languages = [
    'Java',
    'Javascript',
    'PHP',
    'CSS',
    'LESS/SCSS',
    'Ruby',
    'HTML5',
  ]
  const frameworks = [
    'React',
    'CSS Animations',
    'Wordpress',
    'React',
    'Gatsby',
    'Bootstrap',
    'Ruby on Rails',
    'Foundation',
    'jQuery',
    'GraphQL'
  ]
  const misc = [
    'Git',
    'Agile workflow',
    'JIRA',
    'Redmine',
    'Capistrano',
    'Capybara',
    'Application Architecure',
    'MVC Methodologies',
    'JAM Stack',
    'Accessibility',
    'ADA Compliance'
  ]
  return (
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
        <h3>Skills</h3>
        <div className="col-six tab-full">
          <SkillSection title={'Languages'} skills={languages} />
          <hr />
          <SkillSection title={'Frameworks/Libraries'} skills={frameworks} />
        </div>

        <div className="col-six tab-full">
          <SkillSection title={'Miscellaneous'} skills={misc} />
        </div>
      </div>

      <div className="row button-section">
        <div className="col-twelve">
          <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
        </div>
      </div>
    </section>
  )
}

const SkillSection = ({ title, skills }) => (
  <div>
    <h4 style={{ marginTop: '15px', marginBottom: '0px' }}>{title}:</h4>
    <div className="skill_container">
      {skills.map((skill) => (<div className="skill">{skill}</div>))}
    </div>
  </div>
)

export default AboutSection
