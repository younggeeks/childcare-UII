import React from "react"
import styled from "styled-components"
import LayoutContainer from "./layout-container"
import CircleButton from "./circle-button"

export const CTAGroup = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  background: linear-gradient(
    to right,
    rgba(238, 72, 105, 1),
    rgba(167, 30, 160, 1)
  );
  height: 230px;
  display: flex;
  color: rgba(255, 255, 255, 1);
`
const CTAText = styled.p`
  font-size: 120%;
  font-weight: 500;
`

export const CTAHeader = styled.h1`
  font-size: 300%;
  margin: 0;
  padding: 0;
`

const CTAContents = styled.div`
  width: 76%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const CallToAction = () => {
  return (
    <CTAGroup>
      <CTAContents>
        <div className="cta-text">
          <CTAHeader>
            Together To <br /> 
            Help The World Better
          </CTAHeader>
          <CTAText>please help us change lives arouond the world.</CTAText>
        </div>
        <CircleButton />
      </CTAContents>
    </CTAGroup>
  )
}

export default CallToAction
