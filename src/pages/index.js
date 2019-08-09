import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CallToAction from "../components/call-to-action"
import MotherChild from "../components/MotherChild"
import Cards from "../components/cards/Card"
import NewsSection from "../components/newsSection/NewsSection"
import ManagementSection from "../components/managementSection/ManagementSection"
import Donation from "../components/donation/donation.component"
import Footer from "../components/Footer/footer.component"
import LatestCampaign from '../components/LatestCampaign';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <CallToAction />
    <MotherChild />
    <Cards />
    <LatestCampaign/>
    <ManagementSection />
    <NewsSection />
    <Donation />
    <Footer />
  </Layout>
)

export default IndexPage
