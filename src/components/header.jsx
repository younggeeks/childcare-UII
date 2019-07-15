import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faEnvelope,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons"
import PrimaryBtn from "./Button"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
      <div className="header__top">
        <h1 style={{ margin: 0 }}>
          <Link className="title" to="/">
            ChildCare
          </Link>
        </h1>

        <ul>
          <li>
            <FontAwesomeIcon icon={faPhone} /> +254 799 663 861
          </li>

          <li>
            <FontAwesomeIcon icon={faEnvelope} /> githinji@andela.com
          </li>

          <li>
            <FontAwesomeIcon icon={faShoppingCart} />
          </li>
        </ul>
      </div>
    </div>

    <div className="header header__bottom">
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
      <PrimaryBtn padding={13}>Cancel</PrimaryBtn>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
