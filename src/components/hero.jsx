import React from "react"
import "./hero.scss"
import styled from "styled-components"
import PrimaryBtn from "./Button"

const HeroHeaderText = styled.h1`
  font-size: 300%;
  font-weight: 800;
`
const HeroHeaderDescription = styled.p`
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 30px;
`
const HeroTextGroup = styled.div`
  align-self: center;
`

const HeroImage = styled.div`
  background: url(${props => props.image}) no-repeat right;
  background-size: contain;
  background-size: 340px;
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
