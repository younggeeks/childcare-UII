import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CallToAction from "../components/call-to-action"
import MotherChild from "../components/MotherChild"
import Cards from "../components/cards/Card"
import NewsSection from "../components/newsSection/NewsSection";
import ManagementSection from '../components/managementSection/ManagementSection';
import Donation from '../components/donation/donation.component'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <CallToAction />
    <MotherChild />
    <Cards />
    <ManagementSection />
    <NewsSection />
    <Donation />
  </Layout>
)

export default IndexPage
