/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./common/Header"
import { Div, StyleReset, ThemeProvider } from "atomize"
import theme from "./common/theme"

import "../styles/scss/style.scss"

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
    <>
      <ThemeProvider theme={theme}>
        <StyleReset />
        <div id="luxy">
          <main>{children}</main>
        </div>
      </ThemeProvider>
    </>
  )
}

export default Layout
