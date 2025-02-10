import { useState } from "react";
import { CheckOutContainer, FinishedProductContainer, FormContainer } from "./styles";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "@context/CartContext";
import confetti from "canvas-confetti";
import { api } from "@services/api";

export function CheckOut() {
  const navigate = useNavigate();
  const { clearCart, totalPrice } = useCart();
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  const [cardNumber, setCardNumber] = useState("");
  const [dataValided, setDataValided] = useState("");
  const [secNumber, setSecNumber] = useState("");

  const triggerSideCannons = () => {
    confetti({
      particleCount: 100,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 1 }
    });
    confetti({
      particleCount: 100,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 1 }
    });
  };

  const handlePurchase = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("/user/checkout");
      console.log("Checkout response:", response.data);
      triggerSideCannons(); 
      clearCart(); 
      setPurchaseCompleted(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Checkout error:", error.response?.data || error);
      alert("Erro ao finalizar compra");
    }
  };
  

  if (purchaseCompleted) {
    return (
      <CheckOutContainer>
        <FinishedProductContainer>
          <h2>Parabéns por comprar conosco! 🎉</h2>
        </FinishedProductContainer>
      </CheckOutContainer>
    );
  }

  const isFormValid = cardNumber && dataValided && secNumber;

  return (
    <CheckOutContainer>
      <FinishedProductContainer>
        <span onClick={() => navigate("/")}>
          <FaArrowLeft /> Voltar
        </span>
        <h3>Método de pagamento</h3>
        <FormContainer onSubmit={handlePurchase}>
          <label htmlFor="cardNumber">Número do cartão</label>
          <input
            required
            type="number"
            id="cardNumber"
            placeholder="Exp: 000-000-000-000"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <label htmlFor="dataValided">Data de validade</label>
          <input
            required
            type="text"
            id="dataValided"
            placeholder="Exp: mês/ano"
            value={dataValided}
            onChange={(e) => setDataValided(e.target.value)}
          />
          <label htmlFor="secNumber">Cod. de Verificação</label>
          <input
            required
            type="number"
            id="secNumber"
            placeholder="Exp: 999"
            value={secNumber}
            onChange={(e) => setSecNumber(e.target.value)}
          />
          <button 
            type="submit" 
            disabled={!isFormValid}>
            Finalizar compra
          </button>
        </FormContainer>
        <span>Valor total: R$ {totalPrice.toFixed(2)}</span>
      </FinishedProductContainer>
    </CheckOutContainer>
  );
}
