import React from "react"
import styled from "styled-components"

const PrimaryBtn = styled.button`
  background: linear-gradient(
    to right,
    rgba(238, 72, 105, 1),
    rgba(167, 30, 160, 1)
  );
  color: white;
  font-weight: bold;
  font-size: 70%;
  cursor: pointer;
  border-radius: 7px;
  outline: none;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  padding: ${props => props.padding}px ${props => props.padding * 2}px;
  transition: 0.8s cubic-bezier(0.02, 0.8, 0.2, 1);

  &:active,
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 9px rgba(0, 0, 0, 0.35);
  }
`

export default PrimaryBtn
