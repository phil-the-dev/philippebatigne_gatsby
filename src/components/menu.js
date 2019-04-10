import React from 'react'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

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
                <li className="current"><a className="smoothscroll" href="#intro" title="">Home</a></li>
                <li><a className="smoothscroll" href="#about" title="">About</a></li>
                <li><a className="smoothscroll" href="#services" title="">Why Me?</a></li>
                <li><a className="smoothscroll" href="#resume" title="">Resume</a></li>
                <li><a className="smoothscroll" href="#portfolio" title="">Portfolio</a></li>
                <li><a className="smoothscroll" href="#contact" title="">Contact</a></li>
              </ul>
            </SlideDown>
          </nav>

        </div>
      </div >
    );
  }
}