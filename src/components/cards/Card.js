import React, { Fragment } from "react"
import PrimaryBtn from "../Button"
import childImage from "../../images/baby-boy.svg"
import volunteersImage from "../../images/volunteers.svg"
import handImage from "../../images/donation.svg"

import "./cards.scss"

const Cards = () => {
  return (
    <Fragment>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__card">
            <div className="cards__icon">
              <img className="cards__image" src={handImage} alt="" />
            </div>
            <div className="cards__title">Send Donation</div>
            <div className="cards__description">
              see how you can make a difference in families lives with just $6 a
              month.
            </div>
            <PrimaryBtn padding={19} className="cards__btn">
              Learn More
            </PrimaryBtn>
          </div>
          <div className="cards__vertical"></div>

          {/*  */}
          <div className="cards__card">
            <div className="cards__icon">
              <img className="cards__image" src={childImage} alt="" />
            </div>
            <div className="cards__title">Save The Child</div>
            <div className="cards__description">
              see how you can make a difference in families lives with just $6 a
              month.
            </div>
            <PrimaryBtn padding={19} className="cards__btn">
              Learn More
            </PrimaryBtn>
          </div>
          <div className="cards__vertical"></div>

          {/*  */}
          <div className="cards__card">
            <div className="cards__icon">
              <img className="cards__image" src={volunteersImage} alt="" />
            </div>
            <div className="cards__title">Become Volunteer</div>
            <div className="cards__description">
              see how you can make a difference in families lives with just $6 a
              month.
            </div>
            <PrimaryBtn padding={19} className="cards__btn">
              Learn More
            </PrimaryBtn>
          </div>
        </div>
        <div className="cards__bars">
          <div className="cards__bar-1 background-gradient"></div>
          <div className="cards__bar-2 background-gradient"></div>
          <div className="cards__bar-3 background-gradient"></div>
        </div>
      </div>
    </Fragment>
  )
}

export default Cards
