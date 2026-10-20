import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/chickens'
import ChickenImage from './ChickenImage'

const ChickenCard = ({ chicken }) => {
  const { addToCart } = useCart()
  const [selectedPrice, setSelectedPrice] = useState(chicken.priceMin)
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    try {
      addToCart(chicken, quantity, selectedPrice)
    } catch (e) {
      alert('Invalid price selection')
    }
  }

  return (
    <div className="chicken-card scrapbook-card">
      <div className="chicken-card-image">
        <ChickenImage src={chicken.image} alt={chicken.name} />
      </div>
      <div className="chicken-card-content">
        <h3 className="chicken-card-title">{chicken.name} ♡</h3>
        <p className="chicken-card-origin">{chicken.origin}</p>
        <p className="chicken-card-age">Age: {chicken.ageMonths} months</p>
        <p className="chicken-card-price">
          {formatPrice(chicken.priceMin)} - {formatPrice(chicken.priceMax)}
        </p>
        <p className="chicken-card-desc">{chicken.description.substring(0, 100)}...</p>
        <p className="chicken-card-availability">✦ {chicken.availability}</p>
        <div className="chicken-card-actions">
          <Link to={/chicken/} className="btn btn-outline">
            VIEW DETAILS
          </Link>
          <button onClick={handleAddToCart} className="btn btn-primary">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChickenCard
