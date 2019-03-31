import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
library.add(faBriefcase);
library.add(faGraduationCap);

const ResumeSection = () => (
  <section id="resume" class="grey-section">
    <div class="row section-intro">
      <div class="col-twelve">
        <h5>Resume</h5>
        <h1>More of my credentials.</h1>
        <p class="lead"></p>
      </div>
    </div>
    <div class="row resume-timeline">
      <div class="col-twelve resume-header">
        <h2>Work Experience</h2>
      </div>
      <div class="col-twelve">
        <div class="timeline-wrap">
          <div class="timeline-block">
            <div class="timeline-ico">
              <i class="fa fa-briefcase"></i>
              <FontAwesomeIcon icon="briefcase" />
            </div>
            <div class="timeline-header">
              <h3>Ruby on Rails Developer</h3>
              <p>November 2017 - present</p>
            </div>
            <div class="timeline-content">
              <h4>Space Telescope Science Institute</h4>
              <p>
                I'm the main developer for a <mark>Ruby on Rails</mark> web app called <a href="https://viewspace.org">ViewSpace</a>. I help with the product owners and stakeholders to build out features and create workable solutions to their problems. I also semi-project manage the project with the product owner since there is no central project manager role. The web app uses <mark>Bootstrap 3</mark> to create all the views that are written in <mark>HAML</mark>. I use <mark>JavaScript</mark> and <mark>jQuery</mark> as well for most of the front end interactions, along with some <mark>CSS3</mark> transtitions to make the site snappy and snazzy. I'm also using <mark>capybara</mark> to write tests for my models, views, and overall functionality.
                </p>
            </div>
          </div>
          <div class="timeline-block">
            <div class="timeline-ico">
              <FontAwesomeIcon icon="briefcase" />
            </div>
            <div class="timeline-header">
              <h3>Informatica Developer/Tester <br /><small>(as a consultant from Sogeti)</small></h3>
              <p>July 2017 - November 2017</p>
            </div>
            <div class="timeline-content">
              <h4>T. Rowe Price</h4>
              <p>
                I rigorously test other
                  <mark>Informatica</mark> Developers' mappings and workflows using hand written
                  <mark>SQL</mark> scripts to make sure they followed the technical specifications as the client specified. I also
          learned Informatica to create and run my own
                  <mark>ETL</mark> mappings and workflows that complied with the technical specifications given by the client.
                </p>
            </div>
          </div>
          <div class="timeline-block">
            <div class="timeline-ico">
              <FontAwesomeIcon icon="briefcase" />
            </div>
            <div class="timeline-header">
              <h3>Windows Application Developer<br /><small>(as a consultant from Sogeti)</small></h3>
              <p>May 2017 - July 2017</p>
            </div>
            <div class="timeline-content">
              <h4>Procter & Gamble</h4>
              <p>
                I created small
                <mark>WinForms</mark> programs in
                <mark>C#</mark> and
                <mark>.NET</mark> to both A) scrape data from certain word documents and compile into a single Excel Spreadsheet
                and B) pull certain word and pdf documents from a shared drive. Both were part of a data migration effort
                and for internal use only.
              </p>
            </div>
          </div>
          <div class="timeline-block">
            <div class="timeline-ico">
              <FontAwesomeIcon icon="briefcase" />
            </div>
            <div class="timeline-header">
              <h3>Web Developer<br /><small>(as a consultant from Sogeti)</small></h3>
              <p>June 2015 - May 2017</p>
            </div>
            <div class="timeline-content">
              <h4>ConnectYourCare</h4>
              <p>
                I worked on their massive healthcare portal implementing client requested features, building out new functionality, and tackling
                their backlog of bugs. I worked with
                <mark>Git</mark> to check in all my code and scripts, an
                <mark>Oracle</mark> database for creating/modifying tables,
                <mark>Java</mark> for all the backend work, and
                <mark>Javascript/CSS/HTML</mark> for the frontend. I also reworked the majority of the main portal to make it more
                <mark>508 Compliant</mark>. I also followed
                <mark>design guidelines</mark> that I later documented. I worked in an
                <mark>Agile</mark> workflow/SDLC with one-month sprints where I worked closely with a team that comprised of a
                Business Associate and a Tester.
              </p>
            </div>
          </div>
          <div class="timeline-block">
            <div class="timeline-ico">
              <FontAwesomeIcon icon="briefcase" />
            </div>
            <div class="timeline-header">
              <h3>Front-end Developer</h3>
              <p>April 2014 - June 2015</p>
            </div>
            <div class="timeline-content">
              <h4>Decision Software Inc</h4>
              <p>
                I was brought on to implement their first set of web apps to allow clients to access our databases. I used a standard
                <mark>ASP.NET</mark> stack using
                <mark>C#</mark> to do any manipulations or anything that couldn't be done with Javascript. I also utilized the
                <mark>DevExpress</mark> libraries to bring features like graphs and pivot tables to let users have more control
                to see what they were trying to see.
              </p>
            </div>
          </div>
          <div class="timeline-block">
            <div class="timeline-ico">
              <FontAwesomeIcon icon="briefcase" />
            </div>
            <div class="timeline-header">
              <h3>Web Developer</h3>
              <p>June 2013 – March 2014</p>
            </div>
            <div class="timeline-content">
              <h4>StrongDigital <small>(formerly DevelopDC)</small></h4>
              <p>
                Small tech startup firm that worked on anything that a client wanted. Worked on standard marking websites to
                <mark>Ruby on Rails</mark> apps. For marketing sites, I used
                <mark>Wordpress</mark> and
                <mark>ExpressionEngine</mark> for client backend content management and
                <mark>Foundation</mark> and/or made custom
                <mark>CSS</mark> for front-end development.
              </p>
            </div>
          </div>
          <div class="timeline-block">
            <div class="timeline-ico">
              <FontAwesomeIcon icon="briefcase" />
            </div>
            <div class="timeline-header">
              <h3>Web Developer</h3>
              <p>Feburary 2012 - June 2013</p>
            </div>
            <div class="timeline-content">
              <h4>Fintrac Inc</h4>
              <p>
                An agriculture solutions contractor for developing countries that brought me on to work on some in-house projects. Worked
                with standard
                <mark>ASP.NET</mark> stack utilizing primarily
                <mark>C#</mark> and where I picked up most of my working web development experience. Worked on an internal CRM
                web app, a document repository system, and other miscellanious solo projects for the company. I also helped
                doing IT help desk tasks like fixing laptops/desktops, printer issues, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row resume-timeline">
      <div class="col-twelve resume-header">
        <h2>Education</h2>
      </div>
      <div class="col-twelve">
        <div class="timeline-wrap">
          <div class="timeline-block">
            <div class="timeline-ico">
              <FontAwesomeIcon icon="briefcase" />
            </div>
            <div class="timeline-header">
              <h3>Bachelor Degree</h3>
              <p>Sept 2009 - Dec 2011</p>
            </div>
            <div class="timeline-content">
              <h4>University of Maryland, Baltimore County</h4>
              <p>Majored in Information Systems, which is a program that is based around the whole ecosphere that comprises
                IT. Took programming to economic courses, even a few business ones too. It prepares students to do anything
                from development to network administration to project management. <br /> I also minored in Computer Science
                because my true love in IT is programming.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ResumeSection;