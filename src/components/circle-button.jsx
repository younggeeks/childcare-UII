import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

const Button = styled.button`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: white;
  position: relative;
  outline: none;
  border: none;
  &::after {
    content: "";
    border-radius: 50%;
    width: 90px;
    height: 90px;
    position: absolute;
    top: -10px;
    left: -10px;
    background: transparent;
    border: 10px solid rgba(255, 255, 255, 0.5);

    /* border: 2px solid rgba(255, 255, 255, 0.4);
     */
  }
`
const CircleButton = () => {
  return (
    <Button>
      <FontAwesomeIcon icon={faPlay} color={"#c54874"} size="lg" />
    </Button>
  )
}

export default CircleButton
