import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("session", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@shop.com:user", JSON.stringify(user));
      localStorage.setItem("@shop.com:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });

      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const cartItems = JSON.parse(storedCart);
        if (cartItems.length > 0) {
          const wishlistItems = cartItems.map(item => ({
            productId: item.id, 
            quantity: item.quantity
          }));
            await api.put("/user/wishlist", { items: wishlistItems });
           localStorage.removeItem("cart");
          localStorage.removeItem("cartExpiry");
      }
    }
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível logar");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@shop.com:token");
    localStorage.removeItem("@shop.com:user");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@shop.com:token");
    const user = localStorage.getItem("@shop.com:user");
  
    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };