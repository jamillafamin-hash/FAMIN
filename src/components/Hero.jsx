import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../data/chickens'

const Hero = () => {
  return (
    <section className="hero scrapbook-hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to CHICKEN NI DODONG ♡</h1>
          <h2 className="hero-subtitle">Find Your Perfect Feathered Friends!</h2>
          <p className="hero-desc">
            Discover beautiful chicken breeds for egg production, meat production, farming, and ornamental purposes.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="btn btn-primary">
              SHOP CHICKENS ♡
            </Link>
            <Link to="/shop" className="btn btn-outline">
              EXPLORE BREEDS ✦
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-chicken-deco">
            <span className="hero-icon">🐔</span>
            <span className="hero-stars">✦ ✿ ♡</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
