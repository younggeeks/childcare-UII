import React from "react"
import "./mother-child.scss"
import styled from "styled-components"
import PrimaryBtn from "./Button"


const MCimage = styled.div`
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

export default class MotherChild extends React.Component {
  render() {
    return (
      <div className="mc-Container">
        <MCimage
          className="mc-image"
          image={require("../images/mother-child.svg")}
        ></MCimage>
        <div className="mc-content">
          <div className="mc-header">We're Helping Hand</div>
          <div className="mc-sub-header">on 80,000 children</div>
          <div className="mc-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>
          <PrimaryBtn padding={19}>Learn More</PrimaryBtn>
        </div>
      </div>
    )
  }
}
