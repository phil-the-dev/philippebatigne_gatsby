import PropTypes from "prop-types"
import React from "react"
import Menu from './menu'

const Header = ({ siteTitle }) => (
  <header>
    <Menu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
