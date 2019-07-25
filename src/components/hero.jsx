import React from "react"
import "./hero.scss"
import styled from "styled-components"
import PrimaryBtn from "./Button"

const HeroHeaderText = styled.h1`
  font-size: 300%;
  font-weight: 800;
  color: #16344d;
`
const HeroHeaderDescription = styled.p`
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 30px;
`
const HeroTextGroup = styled.div`
  align-self: center;

  @media (max-width: 850px) {
    text-align: center;
  }
`

const HeroImage = styled.div`
  background: url(${props => props.image}) no-repeat right;
  background-size: 640px;

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

const Hero = () => {
  return (
    <div className="hero">
      <HeroTextGroup>
        <HeroHeaderText>
          A Child Is An <br />
          Uncut Diamond
        </HeroHeaderText>
        <HeroHeaderDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
          debitis similique liber
        </HeroHeaderDescription>
        <PrimaryBtn padding={19}>Learn More</PrimaryBtn>
      </HeroTextGroup>
      <HeroImage image={require("../images/photo.svg")}></HeroImage>
    </div>
  )
}

export default Hero
