/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { StyleReset, ThemeProvider } from "atomize"
import theme from "./common/theme"

import "../styles/scss/style.scss"

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyleReset />
        <div>
          <main>{children}</main>
        </div>
      </ThemeProvider>
    </>
  )
}

export default Layout
