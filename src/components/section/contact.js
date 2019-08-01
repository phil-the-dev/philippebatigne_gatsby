import React from "react"

const ContactSection = () => (
  <section id="contact">
    <div className="row section-intro">
      <div className="col-twelve">

        <h5>Contact</h5>
        <h1>I'd Love To Hear From You.</h1>

        <p className="lead">Want to have a chat about future possibilities? Want to connect on LinkedIn but want to email me directly first? Drop a line down below and let's talk!</p>
      </div>
    </div>
    <div className="row contact-form">
      <div className="col-twelve">
        <form name="contactForm" id="contactForm" method="post" netlify-honeypot="bot-field" netlify="true">
          <fieldset>
            <div style={{ display: 'none' }}>
              <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </div>
            <div className="form-field">
              <input name="contactName" type="text" id="contactName" placeholder="Name" minLength="2" required="" />
            </div>
            <div className="form-field">
              <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" required="" />
            </div>
            <div className="form-field">
              <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" />
            </div>
            <div className="form-field">
              <textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50" required=""></textarea>
            </div>
            <div className="form-field">
              <button className="submitform">Submit</button>
              <div id="submit-loader">
                <div className="text-loader">Sending...</div>
                <div className="s-loader">
                  <div className="bounce1"></div>
                  <div className="bounce2"></div>
                  <div className="bounce3"></div>
                </div>
              </div>
            </div>
          </fieldset>
        </form>

        <div id="message-warning"></div>
        <div id="message-success">
          <i className="fa fa-check"></i>Your message was sent, thank you!<br />
        </div>
      </div>
    </div>
  </section>
)
export default ContactSection;