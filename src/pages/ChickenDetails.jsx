import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { getChickenById, formatPrice } from '../data/chickens'
import ChickenImage from '../components/ChickenImage'

const ChickenDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const chicken = getChickenById(id)
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedPrice, setSelectedPrice] = useState(chicken ? chicken.priceMin : 0)

  if (!chicken) {
    return (
      <div className="container scrapbook-section">
        <h2>Chicken not found</h2>
        <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    try {
      addToCart(chicken, quantity, selectedPrice)
      alert('Added to cart!')
    } catch (e) {
      alert('Invalid price selection')
    }
  }

  return (
    <div className="chicken-details scrapbook-section">
      <div className="container details-container">
        <Link to="/shop" className="back-link">← Back to Shop</Link>
        <div className="details-grid">
          <div className="details-image">
            <ChickenImage src={chicken.image} alt={chicken.name} />
          </div>
          <div className="details-content">
            <h1 className="details-title">{chicken.name} ♡</h1>
            <p className="details-origin"><strong>Origin:</strong> {chicken.origin}</p>
            <p className="details-age"><strong>Age:</strong> {chicken.ageMonths} months</p>
            <p className="details-price">
              <strong>Price range:</strong> {formatPrice(chicken.priceMin)} - {formatPrice(chicken.priceMax)}
            </p>
            <p className="details-desc"><strong>Description:</strong> {chicken.description}</p>
            <p className="details-purpose"><strong>Purpose:</strong> {chicken.purpose.join(', ')}</p>
            <p className="details-char"><strong>Characteristics:</strong> {chicken.characteristics.join(', ')}</p>
            <p className="details-availability"><strong>Availability:</strong> ✦ {chicken.availability}</p>
            <p className="details-stock"><strong>Sample stock:</strong> {chicken.stock}</p>
            <div className="details-price-selector">
              <label>Select unit price: </label>
              <select value={selectedPrice} onChange={(e) => setSelectedPrice(Number(e.target.value))}>
                <option value={chicken.priceMin}>{formatPrice(chicken.priceMin)}</option>
                <option value={chicken.priceMax}>{formatPrice(chicken.priceMax)}</option>
              </select>
            </div>
            <div className="details-qty">
              <label>Quantity: </label>
              <input
                type="number"
                min="1"
                max={chicken.stock}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>
            <button onClick={handleAddToCart} className="btn btn-primary btn-large">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChickenDetails
