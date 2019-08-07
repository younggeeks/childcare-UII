import React from "react"

import Button from '../Button'
import "./team.scss"
const Team = () => {
  return (
    <div className="team__container">
      <div>
        <div className="news-section__blog">
          Team <div className="news-section__blog-bar"></div>
        </div>
        <div className="news-section__title">Want to part of the team</div>
        <div className='news-section__description'>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC
        </div>
        <div>
            <input className='team__email' type='text' placeholder='enter email' />
            <Button className='team__btn'>Send</Button>
        </div>
      </div>
      <div className="team__img"></div>
    </div>
  )
}

export default Team
