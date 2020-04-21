import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Ganzensport from "../images/ganzensport.svg"

const Header = ({ siteTitle }) => (
  <header className="text-center flex items-center justify-center">
    <h1>
      <Link
        to="/"
      >
        <img src={Ganzensport} alt={siteTitle} className="h-32" />
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
