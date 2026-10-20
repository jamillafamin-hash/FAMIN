import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/chickens'

const Checkout = () => {
  const { cart, getSubtotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    deliveryType: 'pickup',
    address: ''
  })
  const [errors, setErrors] = useState({})

  const subtotal = getSubtotal()
  const total = subtotal

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName) newErrors.fullName = 'Full name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.phone) newErrors.phone = 'Phone number is required'
    if (formData.deliveryType === 'delivery' && !formData.address) {
      newErrors.address = 'Address is required for delivery'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    const orderNumber = 'MH' + Date.now().toString().slice(-6)
    const order = {
      orderNumber,
      items: cart,
      subtotal,
      total,
      customer: formData
    }
    localStorage.setItem('maekha_last_order', JSON.stringify(order))
    clearCart()
    navigate('/order-confirmation')
  }

  return (
    <div className="checkout-page scrapbook-section">
      <div className="container">
        <h1 className="section-title">Checkout ♡</h1>
        <form onSubmit={handleSubmit} className="checkout-form scrapbook-card">
          <h2>Customer Information</h2>
          <div className="form-group">
            <label>Full Name *</label>
            <input type="text" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Phone Number *</label>
            <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <label>Pickup or Delivery</label>
            <select value={formData.deliveryType} onChange={(e) => setFormData({ ...formData, deliveryType: e.target.value })}>
              <option value="pickup">Pickup</option>
              <option value="delivery">Delivery</option>
            </select>
          </div>
          {formData.deliveryType === 'delivery' && (
            <div className="form-group">
              <label>Address *</label>
              <textarea value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
              {errors.address && <span className="error">{errors.address}</span>}
            </div>
          )}
          <div className="order-summary">
            <h2>Order Summary</h2>
            {cart.map((item) => (
              <div key={${item.id}-} className="summary-item">
                <span>{item.name} x {item.quantity}</span>
                <span>{formatPrice(item.selectedPrice * item.quantity)}</span>
              </div>
            ))}
            <div className="summary-total">
              <strong>Total: {formatPrice(total)}</strong>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-large">PLACE ORDER</button>
        </form>
      </div>
    </div>
  )
}

export default Checkout
