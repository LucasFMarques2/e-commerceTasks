import { useCart } from "@context/CartContext"
import { useAuth } from "@context/useAuth"
import { CartContainer, ItemContainer, ItensContainer, DivisorContainer, TotalPriceContainer } from "./style"
import { FaRegTrashAlt, FaPlus, FaMinus, FaArrowRight } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import logo from "@assets/logo.svg"
import { api } from "@services/api"

export function ShopCart({ closeCart }) {
  const navigate = useNavigate()
  const { 
        cartItems, 
        removeFromCart, 
        increaseQuantity, 
        decreaseQuantity, 
        totalPrice 
  } = useCart()
  const { user } = useAuth();

  async function transferCartToWishlist() {
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
  }

  const handlePurchase = async () => {
    if (!user) {
      navigate('/login');
      return;
    }else{
      navigate('/checkout')
      transferCartToWishlist()
      return;
    }

  };

  
  return (
    <CartContainer>
      <div className="Header">
        <img src={logo} alt="" />
        <button onClick={closeCart}>X</button>
      </div>
      <ItensContainer>
        {cartItems.length === 0
          ? <p>Seu carrinho está vazio.</p>
          : cartItems.map(item => (
            <ItemContainer key={item.id}>
              <img src={item.image} alt={item.name} />
              <DivisorContainer>
                <p>{item.name}</p>
                <p>R$ {item.price.toFixed(2)}</p>
              </DivisorContainer>
              <DivisorContainer>
                <button onClick={() => removeFromCart(item.id)}>
                  <FaRegTrashAlt />
                </button>
                <span className="AmountButton">
                  <button onClick={() => decreaseQuantity(item.id)}>
                    <FaMinus size={12} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>
                    <FaPlus size={12} />
                  </button>
                </span>
              </DivisorContainer>
            </ItemContainer>
          ))
        }
      </ItensContainer>
      {cartItems.length > 0 && (
        <TotalPriceContainer>
          <h2>Subtotal: R$ {totalPrice.toFixed(2)}</h2>
          <button onClick={handlePurchase}>Comprar <FaArrowRight size={12} /></button>
        </TotalPriceContainer>
      )}
    </CartContainer>
  )
}
