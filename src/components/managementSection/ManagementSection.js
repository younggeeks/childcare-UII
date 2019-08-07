import React from "react"
import Team from "./Team"
import "./managementSection.scss"
import CEO from "../../images/myAvatar.svg"

const managementSection = () => {
  return (
    <div className="management__section">
      <div className="management__content">
        <div className="management__top">
          <Team />
        </div>
        <div className="management__ascii">
          <span>&#34;</span>
        </div>
        <div className="management__info">
          <span className="management__say">What people say?</span>
          <span className="management__lorem">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old
          </span>

          {/* CEO section */}
          <div className="management__ceo-container">
            <div className="management__ceo">
              <div className="management__ceo-img-container">
                <img className="management__ceo-img" src={CEO} alt="" />
              </div>
              <div className="management__ceo-info">
                <span className="management__ceo-name">Oliver Oli</span>
                <span className="management__ceo-title">CEO</span>
              </div>
            </div>
          </div>
          <div className="management__icons-container">
            <div className="management__icons">
              <div className="management__horizontal"></div>
              <img className="management__ceo-img" src={CEO} alt="" />
              <img className="management__ceo-img-bg" src={CEO} alt="" />
              <img className="management__ceo-img" src={CEO} alt="" />
              <div className="management__horizontal"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default managementSection
