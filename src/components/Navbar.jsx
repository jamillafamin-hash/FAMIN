import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const { getCartCount } = useCart()
  return (
    <nav className="navbar scrapbook-nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="nav-logo-icon">🐔</span>
          <span className="nav-logo-text">CHICKEN NI DODONG</span>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/shop" className="nav-link">Shop Chickens</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link cart-link">
              <span className="cart-icon">🛒</span>
              <span className="cart-badge">{getCartCount()}</span>
            </Link>
          </li>
        </ul>
        <button className="nav-toggle" aria-label="Menu">
          ☰
        </button>
      </div>
    </nav>
  )
}

export default Navbar
