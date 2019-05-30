import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { StaticQuery, graphql, } from "gatsby";
library.add(faBriefcase);
library.add(faGraduationCap);

const JobComponent = (props) => (
  <div className="timeline-block">
    <div className="timeline-ico">
      <FontAwesomeIcon icon="briefcase" />
    </div>
    <div className="timeline-header">
      <h3>{props.position}</h3>
      <p>{props.duration}</p>
    </div>
    <div className="timeline-content">
      <h4>{props.location}</h4>
      <p dangerouslySetInnerHTML={{ __html: props.description }}>
      </p>
    </div>
  </div>
)

const Jobs = () => (
  <StaticQuery
    query={graphql`
    query {
      allMarkdownRemark(
        sort: { 
          order: DESC , 
          fields: [frontmatter___index] 
        },
        filter: {fileAbsolutePath: {regex: "/(\/jobs)/.*.md$/"}}
      ) {
        edges {
          node {
            id,
            html,
            frontmatter {
              position,
              duration,
              location
            }
          }
        }
      }
    }
  `}
    render={data => 
      data.allMarkdownRemark.edges.map(function (element, index) {
        let item = element.node.frontmatter;
        return (<JobComponent
          key={element.node.id}
          position={item.position}
          duration={item.duration}
          location={item.location}
          description={element.node.html} />)
      })
    }
  />
)

const ResumeSection = () => (
  <section id="resume" className="grey-section">
    <div className="row section-intro">
      <div className="col-twelve">
        <h5>Resume</h5>
        <h1>More of my credentials.</h1>
        <p className="lead"></p>
      </div>
    </div>
    <div className="row resume-timeline">
      <div className="col-twelve resume-header">
        <h2>Work Experience</h2>
      </div>
      <div className="col-twelve">
        <div className="timeline-wrap">
          <Jobs />
        </div>
      </div>
    </div>
    <div className="row resume-timeline">
      <div className="col-twelve resume-header">
        <h2>Education</h2>
      </div>
      <div className="col-twelve">
        <div className="timeline-wrap">
          <div className="timeline-block">
            <div className="timeline-ico">
              <FontAwesomeIcon icon="briefcase" />
            </div>
            <div className="timeline-header">
              <h3>Bachelor Degree</h3>
              <p>Sept 2009 - Dec 2011</p>
            </div>
            <div className="timeline-content">
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
);

export default ResumeSection;