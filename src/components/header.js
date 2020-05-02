import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Ganzensport from "../images/g.svg"

const Header = ({ siteTitle }) => (
  <header className="flex items-center justify-between py-4 bg-orange-600 px-6 lg:px-10 text-white">
    <h1>
      <Link
        to="/"
        className="w-12 h-12 block rounded-lg bg-orange-800 flex items-center justify-center"
      >
        <img src={Ganzensport} alt={siteTitle} className="h-8" />
      </Link>
    </h1>
    <ul className="flex">
      <li><a href="mailto:wes@overlab.com" className="p-4">Contact</a></li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
