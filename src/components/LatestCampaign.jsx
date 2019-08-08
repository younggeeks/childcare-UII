import React from "react"

import styled from "styled-components"
import PrimaryBtn from "./Button"
import Card from "./Card"
import ListItem from "./ListItem"
import Button from './Button'

import "./latest-campaign.scss"

const LCimage = styled.div`
  background: url(${props => props.image}) no-repeat right;
  background-size: 401px;

  @media (max-width: 1400px) {
    background-size: 500px;
  }
  @media (max-width: 1230px) {
    background-size: 350px;
  }
  @media (max-width: 990px) {
    background-size: 250px;
  }
  @media (max-width: 850px) {
    display: none;
  }
`

export default class LatestCampaign extends React.Component {
  render() {
    return (
      <div className="latest-campaign-content">
        <div className="lc-header">campaign <div className="news-section__blog-bar"></div></div>
        <div className="lc-title">Here is our latest campaign</div>
        <div className="wrapper">
          <div className="lc-card">
            <Card />
          </div>
          <div className="lc-list">
            <ListItem progress={30} selected={true} />
            <ListItem progress={60} />
            <ListItem progress={20} />
          </div>
        </div>
        <div className="viewAll">
          <Button className="btn-view-all">View All</Button>
        </div>
      </div>
    )
  }
}
