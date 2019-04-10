import React from 'react'
import Collapse from '@kunukn/react-collapse'

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
    let isOpen = this.state.isClicked;
    return (
      <div className="row">
        <div class="top-bar">

          <a class={menuToggleClass} href="#" onClick={() => this.menuClick()}>
            <span>Menu</span>
          </a>

          <div class="logo">
            <a href="index.html">Home</a>
          </div>

          <nav id="main-nav-wrap">
            <Collapse isOpen={this.state.isClicked}>
              <ul class="main-navigation">
                <li class="current"><a class="smoothscroll" href="#intro" title="">Home</a></li>
                <li><a class="smoothscroll" href="#about" title="">About</a></li>
                <li><a class="smoothscroll" href="#services" title="">Why Me?</a></li>
                <li><a class="smoothscroll" href="#resume" title="">Resume</a></li>
                <li><a class="smoothscroll" href="#portfolio" title="">Portfolio</a></li>
                <li><a class="smoothscroll" href="#contact" title="">Contact</a></li>
              </ul>
            </Collapse>
          </nav>
        </div>
      </div >
    );
  }
}