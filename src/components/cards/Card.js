import React, { Fragment } from "react"
import PrimaryBtn from "../Button"
import styled from "styled-components"

import "./cards.scss"

const Cards = () => {
  return (
    <Fragment>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__card">
            <div className="cards__icon">
              <div className="cards__donations-image"></div>
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
              <div className="cards__child-image"></div>
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
              <div className="cards__volunteer-image"></div>
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
        <div className='cards__bars'>
            <div className='cards__bar-1 background-gradient'></div>
            <div className='cards__bar-2 background-gradient'></div>
            <div className='cards__bar-3 background-gradient'></div>

        </div>
      </div>
    </Fragment>
  )
}

export default Cards
