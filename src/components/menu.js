import React from 'react'

class Menu extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      isClicked: false,
    }
  }

  render() {
    let menuToggleClass = this.state.isClicked ? '' : 'is-clicked';
    return (
      <div className="row">
        <div class="top-bar">

          <a class={"menu-toggle" + menuToggleClass} href="#" onClick={() => { }}><span>Menu</span></a>

          <div class="logo">
            <a href="index.html">Home</a>
          </div>

          <nav id="main-nav-wrap">
            <ul class="main-navigation">
              <li class="current"><a class="smoothscroll" href="#intro" title="">Home</a></li>
              <li><a class="smoothscroll" href="#about" title="">About</a></li>
              <li><a class="smoothscroll" href="#services" title="">Why Me?</a></li>
              <li><a class="smoothscroll" href="#resume" title="">Resume</a></li>
              <li><a class="smoothscroll" href="#portfolio" title="">Portfolio</a></li>
              <li><a class="smoothscroll" href="#contact" title="">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}