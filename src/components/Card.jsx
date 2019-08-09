import React from "react"

import Button from "./Button"
import ProgressCircle from "./ProgressCircle"

import "./card.scss"

export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="grid-content image-content">
          <div className="bg-img"></div>
        </div>
        <div className="grid-content">
          <div className="grid-donation">
            <div className="grid-donation__item">
              <div className="item left-item">
                <div className="text">Goal</div>{" "}
                <div className="amount">$20,000</div>
              </div>
              <div className="item middle-item">
                <div className="text">Raised</div>{" "}
                <div className="amount">$7000</div>
              </div>
              <div className="item right-item">
                <Button className="btn-donate">Donate</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-content">
          <div className="card-grid">
            <div className="grid-item__text">
              <div className="grid-item__text__header">
                Building Schools for poor children
              </div>
              <div className="grid-item__text__content">
                Contraly to modern belief, lorem Ipsum isn't simply random text
              </div>
            </div>
            <div className="grid-item__percentage">
              <ProgressCircle height={140} strokeWidth={12} progress={30} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
