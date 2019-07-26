/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header.jsx"
import "./layout.css"
import LayoutContainer from "./layout-container.jsx"
import MotherChild from "./MotherChild"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import Cards from "./cards/Card"
import NewsSection from "./newsSection/NewsSection";

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
    <LayoutContainer>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <MotherChild />
      <Cards />
      <NewsSection />


      <footer>
        <p>
          Created with <FontAwesomeIcon icon={faHeart} color={"#c54874"} /> By
          Wajomba ©
        </p>
      </footer>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
