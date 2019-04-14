import React from 'react'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Menu extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      isClicked: false,
    }
  }

  menuClick() {
    this.setState(state => ({
      isClicked: !this.state.isClicked
    }))
  }

  render() {
    let menuToggleClass = "menu-toggle " + (this.state.isClicked ? 'is-clicked' : '');
    return (
      <div className="row">
        <div className="top-bar">
          <a className={menuToggleClass} href="#" onClick={() => this.menuClick()}>
            <span>Menu</span>
          </a>
          <nav id="main-nav-wrap">
            <SlideDown className={'my-dropdown-slidedown'} closed={!this.state.isClicked}>
              <ul className="main-navigation">
                <li className="current">
                  <AnchorLink href='#intro'>Home</AnchorLink>
                </li>
                <li><AnchorLink href='#about'>About</AnchorLink></li>
                <li><AnchorLink href='#services'>Why Me?</AnchorLink></li>
                <li><AnchorLink href='#resume'>Resume</AnchorLink></li>
                <li><AnchorLink href='#portfolio'>Portfolio</AnchorLink></li>
                <li><AnchorLink href='#contact'>Contact</AnchorLink></li>
              </ul>
            </SlideDown>
          </nav>

        </div>
      </div >
    );
  }
}