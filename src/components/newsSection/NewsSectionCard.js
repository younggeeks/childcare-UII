import React from "react"

import PrimaryBtn from "../Button"
import shareIcon from "../../images/share.svg"

const NewsSectionCard = (props) => {
  return (
    <div className="news-section__card">
        <img className="news-section__image" src={props.image} alt="" />
        <div className="news-section__card-container">
          <div className="news-section__padding">
            <div className="news-section__title2">
              {props.title1} <br /> {props.title2}
            </div>
            <div className="news-section__date-container">
              <div className="news-section__date background-gradient">
                Oct - 27
              </div>
              <div className="news-section__date background-gradient">
                Child
              </div>
              <img
                className="news-section__share-image"
                src={shareIcon}
                alt=""
              />
            </div>
            <div className="news-section__description">
              Contraly to popular belief, Lorem Ipsum is not simply
            </div>
            <PrimaryBtn padding={19} className="news-section__btn-width">Learn More</PrimaryBtn>
          </div>
        </div>
      </div>
  )
}

export default NewsSectionCard
