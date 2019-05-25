import React from "react"
import Masonry from 'react-masonry-component';
import Img from "gatsby-image";
import { StaticQuery, graphql, } from "gatsby";
import $ from 'jquery'
import 'magnific-popup';

const imagesLoadedOptions = {
  itemSelector: '.folio-item',
  resize: true
}


export class FolioItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showDialog: false }
  }

  toggleDialog() {
    this.setState(state => ({
      showDialog: !state.showDialog
    }))
  }

  render() {
    let { imgSrc, imgAlt, id, title } = this.props;
    return (
      <>
        <div className="bgrid folio-item">
          <div className="item-wrap">
            <Img fluid={imgSrc} alt={imgAlt} />
            <div className="overlay" onClick={() => this.toggleDialog()}>
              <div className="folio-item-table">
                <div className="folio-item-cell">
                  <h3 className="folio-title">{title}</h3>
                </div>
              </div>
            </div>
          </div>

          <Dialog open={this.state.showDialog} onClose={() => this.toggleDialog()}>
            <div className="media">
              <Img fluid={imgSrc} alt={imgAlt} />
            </div>
            <div className="description-box">
              <h4>Con Kraken</h4>
              <p>
                My buddies and I go out to cons to get our comic books signed but the whole ordeal is a mess, from trying to carry exactly
                what we need, to knowing who cancelled last minute, to ordering who we want to meet on the convention floor.
                My web app scrapes comic-con sites, aggrigate who is going/who is no longer going, and allows users to mark
                which guests that they want to see.
              </p>
              <div className="categories">Web Development, Foundation, Ruby on Rails</div>
            </div>
            <div className="link-box">
              <a href="http://www.conkraken.com" target="_blank">Visit Site</a>
              <a onClick={() => this.toggleDialog()} className="popup-modal-dismiss">Close</a>
            </div>
          </Dialog>
        </div>
      </>
    );
  }
}

const PortfolioItems = () => (
  <StaticQuery
    query={graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, 
        fields: [frontmatter___title] },
        filter: {fileAbsolutePath: {regex: "/(\/portfolio)/.*.md$/"}}
      ) {
        edges {
          node {
            id,
            frontmatter {
              title,
              window_id,
              image {
                childImageSharp {
                  resize(width: 1500, height: 1500) {
                    src
                  }
                  fluid(maxWidth: 786) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
    `}
    render={data =>
      data.allMarkdownRemark.edges.map(function (element, index) {
        let item = element.node.frontmatter;
        return (<FolioItem
          key={element.node.id}
          imgSrc={item.image.childImageSharp.fluid}
          imgAlt={item.title}
          id={item.window_id}
          title={item.title} />)
      })
    }
  />
)

const PortfolioSection = (props) => {
  return (
    <section id="portfolio">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Portfolio</h5>
          <h1>Projects I'm not completely ashamed of showing or talking about</h1>
          <p className="lead"></p>
        </div>
      </div>
      <div className="row portfolio-content">
        <div className="col-twelve">
          <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
            <Masonry imagesLoadedOptions={imagesLoadedOptions}>
              <PortfolioItems />
            </Masonry>
            <div id="watchandchill" className="popup-modal slider mfp-hide">
              <div className="media">
                <img src="images/watchandchill.gif" alt="" />
              </div>
              <div className="description-box">
                <h4>WatchAndChill.com</h4>
                <p>Small project to solve the simple question of the streaming age: "What do you want to watch?" A quick little
                app to pull up a randomly generated movie.</p>
                <div className="alert-box ss-error">
                  <p>
                    Since the development of this project, which had plans for more features, the developers of the api that I used have chosen
                    to start charging for it's usage that far exceeds my budget and thus killed this project until I can find
                    a suitable replacement api.
                </p>
                </div>
                <div className="categories">Web Development, Foundation, Ruby on Rails, REST, Guidebox API</div>
              </div>

              <div className="link-box">
                <a href="javascript:void(0);">Project No Longer Exists</a>
                <a href="#" className="popup-modal-dismiss">Close</a>
              </div>
            </div>

            <div id="comicbook" className="popup-modal slider mfp-hide">
              <div className="media">
                <img src="images/conkraken-top.png" alt="" />
              </div>
              <div className="description-box">
                <h4>Con Kraken</h4>
                <p>
                  My buddies and I go out to cons to get our comic books signed but the whole ordeal is a mess, from trying to carry exactly
                  what we need, to knowing who cancelled last minute, to ordering who we want to meet on the convention floor.
                  My web app scrapes comic-con sites, aggrigate who is going/who is no longer going, and allows users to mark
                  which guests that they want to see.
              </p>
                <div className="categories">Web Development, Foundation, Ruby on Rails</div>
              </div>
              <div className="link-box">
                <a href="http://www.conkraken.com" target="_blank">Visit Site</a>
                <a href="#" className="popup-modal-dismiss">Close</a>
              </div>
            </div>

            <div id="vanburen" className="popup-modal slider mfp-hide">
              <div className="media">
                <img src="images/sites/vanburen.PNG" alt="" />
              </div>

              <div className="description-box">
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

                <div className="categories">Web Development, Foundation, HTML, CSS</div>
              </div>

              <div className="link-box">
                <a href="http://www.1202vanburen.com">Visit Site</a>
                <a href="#" className="popup-modal-dismiss">Close</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection;

class Dialog extends React.Component {
  componentWillReceiveProps(newProps) {
    if (this.props.open !== newProps.open) {
      this.toggleDialog(newProps);
    }
  }
  render() {
    return (
      <div ref="mfpRoot" className="popup-modal slider mfp-hide">
        {this.props.children}
      </div>
    );
  }

  toggleDialog(props) {
    if (props.open) {
      $.magnificPopup.open({
        items: {
          src: $(this.refs.mfpRoot),
        },
        type: 'inline',
        fixedContentPos: true,
        showCloseBtn: false,
        mainClass: 'mfp-fade',
        removalDelay: 300
      });
    } else {
      $.magnificPopup.close();
    }
  }
}