import React from "react"

import Card from "./Card"
import ListItem from "./ListItem"
import Button from './Button'

import "./latest-campaign.scss"

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
