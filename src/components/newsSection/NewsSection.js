import PrimaryBtn from "../Button"
import React from "react"

import pic from "../../images/tst.jpg"
import "./newsSection.scss"

const NewsSection = () => {
  return (
    <div className="news-section">
      <div className="news-section__blog">
        Blog <div className="news-section__blog-bar"></div>
      </div>
      <div className="news-section__title">Here is our latest news</div>

      {/* cards */}
      <div className="news-section__card">
        <img className="news-section__image" src={pic} alt="" />
        <div className="news-section__card-container">
          <div className="news-section__title2">
            The best <br /> apps to your next trip
          </div>
          <div className="news-section__description">
            Contraly to popular belief, Lorem Ipsum is not simply
          </div>
          <PrimaryBtn padding={19}>Learn More</PrimaryBtn>
        </div>
      </div>
    </div>
  )
}

export default NewsSection
