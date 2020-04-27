/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="font-barlow antialiased bg-blue-900 min-h-vh">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer className="max-w-6xl mx-auto p-10 text-white text-center">
        <span>© {new Date().getFullYear()}, Wes Oudshoorn</span>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
