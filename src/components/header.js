import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from './menu'

const Header = ({ siteTitle }) => (
  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>

  <header>
    <div className="row">

      <div class="top-bar">
        <a class="menu-toggle" href="#" onClick={() => { }}><span>Menu</span></a>

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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
