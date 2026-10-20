import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('maekha_cart')
      return saved ? JSON.parse(saved) : []
    } catch (e) {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('maekha_cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product, quantity, selectedPrice) => {
    const price = Number(selectedPrice)
    const min = Number(product.priceMin)
    const max = Number(product.priceMax)
    if (isNaN(price) || price < min || price > max) {
      throw new Error('Invalid selected price')
    }

    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id && item.selectedPrice === price)
      if (existing) {
        const newQty = existing.quantity + quantity
        if (product.stock && newQty > product.stock) {
          return prev
        }
        return prev.map((item) =>
          item.id === product.id && item.selectedPrice === price
            ? { ...item, quantity: newQty }
            : item
        )
      }
      if (product.stock && quantity > product.stock) {
        return prev
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        image: product.image,
        priceMin: product.priceMin,
        priceMax: product.priceMax,
        selectedPrice: price,
        quantity,
        stock: product.stock
      }]
    })
  }

  const updateQuantity = (id, selectedPrice, quantity) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.id === id && item.selectedPrice === selectedPrice) {
          if (item.stock && quantity > item.stock) {
            quantity = item.stock
          }
          if (quantity <= 0) {
            return item
          }
          return { ...item, quantity }
        }
        return item
      }).filter((item) => item.quantity > 0)
    })
  }

  const removeFromCart = (id, selectedPrice) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.selectedPrice === selectedPrice)))
  }

  const clearCart = () => {
    setCart([])
  }

  const getCartCount = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0)
  }

  const getSubtotal = () => {
    return cart.reduce((sum, item) => sum + (item.selectedPrice * item.quantity), 0)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getCartCount,
        getSubtotal
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
