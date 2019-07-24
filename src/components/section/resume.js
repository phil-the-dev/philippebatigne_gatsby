import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import Papa from 'papaparse';
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
      <JobDescription description={props.description} />

    </div>
    <div style={{ clear: 'both' }}></div>
  </div>
)

const JobDescription = ({ description }) => {
  let buzzed_description = description || "";

  // format for consultant gig
  const desc_regex = /(Informatica .*Tester|Windows Application Developer|Web Developer) at \D*: \w* [0-9]{4} - (\w* [0-9]{4}|Present)\b/g

  buzzed_description = buzzed_description.replace(desc_regex, (str) => { return '<br><br><em>' + str + '</em><br>'; })

  const buzz_words = [
    '.NET',
    '508 Compliance',
    '508 Compliant',
    'Agile',
    'ASP',
    'Bootstrap',
    'C#',
    'CSS',
    'DevExpress',
    'ExpressionEngine',
    'Foundation',
    'Git',
    'HTML',
    'Informatica',
    'Java',
    'Javascript',
    'jQuery',
    'Oracle',
    'Postgres',
    'Ruby on Rails',
    'SQL Server',
    'SQL',
    'Wordpress',
  ]



  buzz_words.forEach((buzz_word) => {
    buzzed_description = buzzed_description.replace(buzz_word, `<mark>${buzz_word}</mark>`)
  })


  return (
    <div dangerouslySetInnerHTML={{ __html: buzzed_description }}>
    </div>
  );
}


export class ResumeSection extends React.Component {
  constructor() {
    super();
    this.state = { jobs: [] }
  }

  componentDidMount() {
    const parent = this;
    const jobs_csv_url = `https://gist.githubusercontent.com/phil-the-dev/412136820defcdb87781f48005498524/raw/jobs.csv`
    Papa.parse(jobs_csv_url, {
      download: true,
      header: true,
      complete: function (results) {
        parent.setState({ jobs: results.data })
      }
    });
  }

  render() {
    const jobs = this.state.jobs;
    return (
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
              {jobs.map((job, index) => {
                if (job["Title"] === undefined) return;

                const duration = job['Started On'] + "-" + (job['Finished On'] || "Present")

                return <JobComponent
                  key={index}
                  position={job["Title"]}
                  description={job["Description"]}
                  duration={duration}
                  location={job["Company Name"]} />
              })}
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
    )
  }
}

export default ResumeSection;