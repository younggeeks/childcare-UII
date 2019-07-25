import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CallToAction from "../components/call-to-action"
import Cards from "../components/cards/Card";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <CallToAction />
  </Layout>
)

export default IndexPage
