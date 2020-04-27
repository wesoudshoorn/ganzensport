import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Ganzensport from "../images/g.svg"

const Header = ({ siteTitle }) => (
  <header className="flex items-center justify-center p-8 bg-orange-600 ">
    <h1>
      <Link
        to="/"
        className="w-16 h-16 block rounded-lg bg-orange-800 flex items-center justify-center"
      >
        <img src={Ganzensport} alt={siteTitle} className="h-10" />
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
