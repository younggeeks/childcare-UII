import React from "react"

import NewsSectionCard from "./NewsSectionCard"
import PrimaryBtn from "../Button"
import children from "../../images/children.png"
import girl from '../../images/girl.png'
import worried from '../../images/worried.png'

import "./newsSection.scss"


const NewsSection = () => {
  return (
    <div className="news-section">
      <div className="news-section__blog">
        Blog <div className="news-section__blog-bar"></div>
      </div>
      <div className="news-section__title">Here is our latest news</div>

      {/* cards */}
      <div className="news-section__cards">
        <NewsSectionCard
          image={children}
          title1="The best"
          title2="apps to your next trip"
        />
        <NewsSectionCard
          image={girl}
          title1="Highlights but"
          title2="I must explain to you"
        />
        <NewsSectionCard
          image={worried}
          title1="On the"
          title2="other hand"
        />
      </div>
      <div className="news-section__view-all">
          <PrimaryBtn padding={19} className="news-section__btn-width">View all</PrimaryBtn>
      </div>
    </div>
  )
}

export default NewsSection
