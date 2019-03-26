import React from "react"
import Masonry from 'react-masonry-component';
const imagesLoadedOptions = {
  itemSelector: '.folio-item',
  resize: true
}

const FolioItem = ({imgSrc, imgAlt, id, title}) => (
  <div class="bgrid folio-item">
    <div class="item-wrap">
      <img src={imgSrc} alt={imgAlt} />
      <a href={"#"+id} class="overlay">
        <div class="folio-item-table">
          <div class="folio-item-cell">
            <h3 class="folio-title">{title}</h3>
          </div>
        </div>
      </a>
    </div>
  </div>
)

const PortfolioSection = () => (
  <section id="portfolio">
    <div class="row section-intro">
      <div class="col-twelve">
        <h5>Portfolio</h5>
        <h1>Projects I'm not completely ashamed of showing or talking about</h1>
        <p class="lead"></p>
      </div>
    </div>
    <div class="row portfolio-content">
      <div class="col-twelve">
        <div id="folio-wrapper" class="block-1-2 block-mob-full stack">
        <Masonry imagesLoadedOption={imagesLoadedOptions}>
          <FolioItem imgSrc='images/watchandchill.gif' imgAlt='WatchAndChill.com' id="watchandchill" title="WatchAndChill.com" />
          <FolioItem imgSrc='images/conkraken.png' imgAlt='Coming Soon' id="comicbook" title="Con Kraken" />
          <FolioItem imgSrc='images/sites/vanburen.PNG' imgAlt='' id="vanburen" title="Van Buren" />
        </Masonry>
          <div id="watchandchill" class="popup-modal slider mfp-hide">
            <div class="media">
              <img src="images/watchandchill.gif" alt="" />
            </div>
            <div class="description-box">
              <h4>WatchAndChill.com</h4>
              <p>Small project to solve the simple question of the streaming age: "What do you want to watch?" A quick little
                app to pull up a randomly generated movie.</p>
              <div class="alert-box ss-error">
                <p>
                  Since the development of this project, which had plans for more features, the developers of the api that I used have chosen
                  to start charging for it's usage that far exceeds my budget and thus killed this project until I can find
                  a suitable replacement api.
                </p>
              </div>
              <div class="categories">Web Development, Foundation, Ruby on Rails, REST, Guidebox API</div>
            </div>

            <div class="link-box">
              <a href="javascript:void(0);">Project No Longer Exists</a>
              <a href="#" class="popup-modal-dismiss">Close</a>
            </div>
          </div>

          <div id="comicbook" class="popup-modal slider mfp-hide">
            <div class="media">
              <img src="images/conkraken-top.png" alt="" />
            </div>
            <div class="description-box">
              <h4>Con Kraken</h4>
              <p>
                My buddies and I go out to cons to get our comic books signed but the whole ordeal is a mess, from trying to carry exactly
                what we need, to knowing who cancelled last minute, to ordering who we want to meet on the convention floor.
                My web app scrapes comic-con sites, aggrigate who is going/who is no longer going, and allows users to mark
                which guests that they want to see.
              </p>
              <div class="categories">Web Development, Foundation, Ruby on Rails</div>
            </div>
            <div class="link-box">
              <a href="http://www.conkraken.com" target="_blank">Visit Site</a>
              <a href="#" class="popup-modal-dismiss">Close</a>
            </div>
          </div>

          <div id="vanburen" class="popup-modal slider mfp-hide">
            <div class="media">
              <img src="images/sites/vanburen.PNG" alt="" />
            </div>

            <div class="description-box">
              <h4>Van Buren</h4>
              <small>AirBNB house rental</small>
              <p>
                My parents recently renovated a house to be used as an airbnb. They wanted a website that could be easily shared around outside
                of the airbnb site. I designed and developed the whole site using Foundation so it would be responsive and
                work well on mobile. I also suggested adding in a second page, What's around, for the potential guests to
                know what are some local places to go to eat or parks to visit. For usability, I also made sure that all
                phone numbers are tappable so pulling it up on your phone, which most people are likely to do, you can quickly
                make calls.
              </p>

              <div class="categories">Web Development, Foundation, HTML, CSS</div>
            </div>

            <div class="link-box">
              <a href="http://www.1202vanburen.com">Visit Site</a>
              <a href="#" class="popup-modal-dismiss">Close</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default PortfolioSection;