import React from 'react'

const ServicesSection = () => (
  <section id="services">
    <div class="overlay"></div>
    <div class="row section-intro">
      <div class="col-twelve">
        <h5>But wait...</h5>
        <h1>Why should you hire me?</h1>
        <p class="lead"></p>
      </div>
    </div>
    <div class="row services-content">
      <div id="owl-slider" class="owl-carousel services-list">
        <div class="service">
          <span class="icon"><i class="icon-book"></i></span>
          <div class="service-content">
            <h3>Fast Learner</h3>
            <p class="desc">
              I've picked up a load of languages, frameworks, and libraries and most of it was due to my job needing to something quickly. I have the proven ability to pick things up in a matter of a few short weeks and be able to hit the ground running. I enjoy picking up new languages and all because anything I've learned as made my skills with everything else stronger and helped me create more effective and efficient code. It helps me understand other's development styles they use when I have to read and modify their code.
            </p>
          </div>
        </div>
        <div class="service">
          <span class="icon"><i class="icon-cloud"></i></span>
          <div class="service-content">
            <h3>Forward Thinking</h3>
            <p class="desc">
              I am constantly thinking "Is this the right way to do this?" and I mean that in a way that I think with how technology has changed and evolved over the years, there may new ways of doing things that can make whatever I'm doing more efficient and secure. I want to make sure what I build gets built correctly and in a manner that'll stand the test of time, but that is also aligned with the project/client/job/budget at hand.
            </p>
          </div>
        </div>
        <div class="service">
          <span class="icon"><i class="icon-pencil"></i></span>
          <div class="service-content">
            <h3>Organized</h3>
            <p class="desc">
              Whenever I start coding, I write a lot. Notes about how things should be, shouldn't be, thought streams, literally anything that comes up so I can document any future questions that might arise again. I always try to keep a notebook handy at all times for any possible tasks or questions that might come up unexpectedly. I do all of this because I know how limited my mind can be at retaining such information but also to pass on to the next developer or manager in the off chance they need explanations or answers to things I've already worked out.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ServicesSection