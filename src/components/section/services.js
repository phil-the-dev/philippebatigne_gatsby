import React from 'react';
// import Swiper from 'react-id-swiper';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';

const owlOptions = {
  nav: false,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    700: {
      items: 2,
      nav: true
    },
    960: {
      items: 3,
      nav: false
    }
  },

}
const params = {
  slidesPerView: 3,
  // spaceBetween: 30,
  slidesPerGroup: 3,
  breakpoints: {
    699: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    959: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  loopFillGroupWithBlank: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  noSwiping: true,
};

const ServicesSection = () => (
  <section id="services">
    <div className="overlay"></div>
    <div className="row section-intro">
      <div className="col-twelve">
        <h5>But wait...</h5>
        <h1>Why should you hire me?</h1>
        <p className="lead"></p>
      </div>
    </div>
    <div className="row services-content services-list">
      <Swiper {...params}>
        <div className="service">
          <span className="icon"><i className="icon-book"></i></span>
          <div className="service-content">
            <h3>Fast Learner</h3>
            <p className="desc">
              I've picked up a load of languages, frameworks, and libraries and most of it was due to my job needing to something quickly. I have the proven ability to pick things up in a matter of a few short weeks and be able to hit the ground running. I enjoy picking up new languages and all because anything I've learned as made my skills with everything else stronger and helped me create more effective and efficient code. It helps me understand other's development styles they use when I have to read and modify their code.
            </p>
          </div>
        </div>
        <div className="service">
          <span className="icon"><i className="icon-cloud"></i></span>
          <div className="service-content">
            <h3>Forward Thinking</h3>
            <p className="desc">
              I am constantly thinking "Is this the right way to do this?" and I mean that in a way that I think with how technology has changed and evolved over the years, there may new ways of doing things that can make whatever I'm doing more efficient and secure. I want to make sure what I build gets built correctly and in a manner that'll stand the test of time, but that is also aligned with the project/client/job/budget at hand.
            </p>
          </div>
        </div>
        <div className="service">
          <span className="icon"><i className="icon-pencil"></i></span>
          <div className="service-content">
            <h3>Organized</h3>
            <p className="desc">
              Whenever I start coding, I write a lot. Notes about how things should be, shouldn't be, thought streams, literally anything that comes up so I can document any future questions that might arise again. I always try to keep a notebook handy at all times for any possible tasks or questions that might come up unexpectedly. I do all of this because I know how limited my mind can be at retaining such information but also to pass on to the next developer or manager in the off chance they need explanations or answers to things I've already worked out.
            </p>
          </div>
        </div>
      </Swiper>
      {/* </div> */}
    </div>
  
  </section >
)

export default ServicesSection