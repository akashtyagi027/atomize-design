import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/common/Header"
import HomePage from "./HomePage"
import Footer from "../components/common/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage />
    <Footer />
  </Layout>
)

export default IndexPage
