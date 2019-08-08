import React, { Fragment } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

import "./footer.scss"
const Footer = () => {
  return (
    <Fragment>
      <div className="footer__container-top">
        <div className="footer__content">
          <span className="footer__content-header">Childcare</span>
          <div className="footer__address">
            <span>Githurai 45, Nairobi</span>
            <span>wajomba@gmail.com</span>
            <span>+254 0987654321</span>
          </div>
        </div>
      </div>

      <div className="footer__container-bottom">
        <div className="footer__bottom">
          <div className="footer__stamp">
            Created with <FontAwesomeIcon icon={faHeart} color={"#c54874"} /> By
            Wajomba ©. All Rights Reserved
          </div>
          <div className="footer__links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Our Causes</Link>
              </li>
              <li>
                <Link to="/">Shop</Link>
              </li>
              <li>
                <Link to="/">Portfolio</Link>
              </li>
              <li>
                <Link to="/">Blogs</Link>
              </li>
              <li>
                <Link to="/">Pages</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer
