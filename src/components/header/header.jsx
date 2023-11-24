import React, { useContext } from "react"
import { Link } from "react-router-dom"
import CartIcon from "../cart-icon/cart-icon"
import SJLogo from "../../assets/ShellyJellyslogoSVG.svg"
import "./header.styles.scss"

const Header = () => {
  return (
    <div className="nav-menu-container">
      <nav className="nav-menu">
        <div className="logo">
          <Link to="/">
            <img src={SJLogo} alt="Shelly's Jellys Logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
        <CartIcon />
      </nav>
    </div>
  )
}

export default Header
