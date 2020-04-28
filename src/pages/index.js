import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/common/Header"
import HomePage from "./HomePage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <HomePage />
  </Layout>
)

export default IndexPage
