import { useCart } from "@context/CartContext"
import { CartContainer, ItemContainer, ItensContainer, DivisorContainer, TotalPriceContainer } from "./style"
import { FaRegTrashAlt, FaPlus, FaMinus, FaArrowRight } from "react-icons/fa"
import logo from "@assets/logo.svg"

// eslint-disable-next-line react/prop-types
export function ShopCart({ closeCart }) {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useCart()
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
                <span>{item.name}</span>
                <span>R$ {item.price.toFixed(2)}</span>
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
          <button>Comprar <FaArrowRight size={12} /></button>
        </TotalPriceContainer>
      )}
    </CartContainer>
  )
}
