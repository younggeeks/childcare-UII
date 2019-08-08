import React from "react"

import { CTAGroup } from "../call-to-action"
import Button from "../Button"
import "./donation.scss"

const Donation = () => {
  return (
    <CTAGroup>
      <div className="donation">
        <span className="donation__text">Make a donation</span>
        <Button padding={19}>Donate now</Button>
      </div>
    </CTAGroup>
  )
}

export default Donation
