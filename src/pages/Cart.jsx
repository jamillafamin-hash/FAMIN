import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/chickens'

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getSubtotal } = useCart()

  if (cart.length === 0) {
    return (
      <div className="cart-page scrapbook-section">
        <div className="container">
          <h1 className="section-title">Your Cart ♡</h1>
          <p className="empty-cart">Your cart is empty.</p>
          <Link to="/shop" className="btn btn-primary">SHOP NOW</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page scrapbook-section">
      <div className="container">
        <h1 className="section-title">Your Cart ♡</h1>
        <div className="cart-items">
          {cart.map((item) => (
            <div key={${item.id}-} className="cart-item scrapbook-card">
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>Unit price: {formatPrice(item.selectedPrice)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Item total: {formatPrice(item.selectedPrice * item.quantity)}</p>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => updateQuantity(item.id, item.selectedPrice, item.quantity - 1)} className="btn btn-outline">-</button>
                <button onClick={() => updateQuantity(item.id, item.selectedPrice, item.quantity + 1)} className="btn btn-outline">+</button>
                <button onClick={() => removeFromCart(item.id, item.selectedPrice)} className="btn btn-outline">Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h2>Subtotal: {formatPrice(getSubtotal())}</h2>
          <Link to="/checkout" className="btn btn-primary btn-large">PROCEED TO CHECKOUT</Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
