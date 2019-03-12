import React from "react"

const ContactSection = () => (
  <section id="contact">
    <div class="row section-intro">
      <div class="col-twelve">

        <h5>Contact</h5>
        <h1>I'd Love To Hear From You.</h1>

        <p class="lead">Want to have a chat about future possibilities? Want to connect on LinkedIn but want to email me directly first? Drop a line down below and let's talk!</p>
      </div>
    </div>
    <div class="row contact-form">
      <div class="col-twelve">
        <form name="contactForm" id="contactForm" method="post" netlify>
          <fieldset>
            <div class="form-field">
              <input name="contactName" type="text" id="contactName" placeholder="Name" value="" minlength="2" required="" />
            </div>
            <div class="form-field">
              <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" value="" required="" />
            </div>
            <div class="form-field">
              <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value="" />
            </div>
            <div class="form-field">
              <textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50" required=""></textarea>
            </div>
            <div class="form-field">
              <button class="submitform">Submit</button>
              <div id="submit-loader">
                <div class="text-loader">Sending...</div>
                <div class="s-loader">
                  <div class="bounce1"></div>
                  <div class="bounce2"></div>
                  <div class="bounce3"></div>
                </div>
              </div>
            </div>
          </fieldset>
        </form>

        <div id="message-warning"></div>
        <div id="message-success">
          <i class="fa fa-check"></i>Your message was sent, thank you!<br />
        </div>
      </div>
    </div>
  </section>
)
export default ContactSection;