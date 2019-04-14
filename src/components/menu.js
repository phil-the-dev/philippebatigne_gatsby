import React from 'react'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    }
  }

  menuClick(event) {
    this.setState(state => ({
      isMenuOpen: !this.state.isMenuOpen
    }))
    event.preventDefault();
  }

  linkClick() {
    this.setState(state => ({
      isMenuOpen: false
    }))
  }

  render() {
    let menuToggleClass = "menu-toggle " + (this.state.isMenuOpen ? 'is-clicked' : '');
    return (
      <div className="row">
        <div className="top-bar">
          <a className={menuToggleClass} href="#" onClick={(e) => this.menuClick(e)}>
            <span>Menu</span>
          </a>
          <nav id="main-nav-wrap">
            <SlideDown className={'my-dropdown-slidedown'} closed={!this.state.isMenuOpen}>
              <ul className="main-navigation">
                <li className="current">
                  <AnchorLink onClick={() => this.linkClick()} href='#intro'>Home</AnchorLink>
                </li>
                <li><AnchorLink onClick={() => this.linkClick()} href='#about'>About</AnchorLink></li>
                <li><AnchorLink onClick={() => this.linkClick()} href='#services'>Why Me?</AnchorLink></li>
                <li><AnchorLink onClick={() => this.linkClick()} href='#resume'>Resume</AnchorLink></li>
                <li><AnchorLink onClick={() => this.linkClick()} href='#portfolio'>Portfolio</AnchorLink></li>
                <li><AnchorLink onClick={() => this.linkClick()} href='#contact'>Contact</AnchorLink></li>
              </ul>
            </SlideDown>
          </nav>

        </div>
      </div >
    );
  }
}