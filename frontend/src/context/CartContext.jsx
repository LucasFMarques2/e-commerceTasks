import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const expiry = localStorage.getItem("cartExpiry");
    
    if (expiry && new Date().getTime() > Number(expiry)) {
      localStorage.removeItem("cart");
      localStorage.removeItem("cartExpiry");
      return [];
    }
    return savedCart;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems.map(item => ({
      ...item,
      price: Number(item.price)
    }))));
    
    const expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000;
    localStorage.setItem("cartExpiry", expiryTime);
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1, price: product.price }];
      });
  };
  

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
    localStorage.removeItem("cartExpiry");
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}