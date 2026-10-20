import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../data/chickens'

const OrderConfirmation = () => {
  const [order, setOrder] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('maekha_last_order')
    if (saved) {
      setOrder(JSON.parse(saved))
    }
  }, [])

  if (!order) {
    return (
      <div className="container scrapbook-section">
        <h2>No order found</h2>
        <Link to="/shop" className="btn btn-primary">Shop Now</Link>
      </div>
    )
  }

  return (
    <div className="order-confirmation scrapbook-section">
      <div className="container scrapbook-card">
        <h1 className="section-title">Order Confirmed! ♡</h1>
        <p className="success-message">Thank you for your order. This is a demo order.</p>
        <h2>Order Number: {order.orderNumber}</h2>
        <div className="confirmed-items">
          {order.items.map((item, idx) => (
            <div key={idx} className="confirmed-item">
              <span>{item.name} x {item.quantity}</span>
              <span>{formatPrice(item.selectedPrice * item.quantity)}</span>
            </div>
          ))}
        </div>
        <h2>Total: {formatPrice(order.total)}</h2>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </div>
  )
}

export default OrderConfirmation
