import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = product => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = id => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const increaseQuantity = id => {
    setCartItems(prevItems => prevItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
  }

  const decreaseQuantity = id => {
    setCartItems(prevItems =>
      prevItems.map(item => item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 } : item).filter(item => item.quantity > 0)
    )
  }

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext)
}
