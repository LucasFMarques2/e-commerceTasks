import { useNavigate } from "react-router-dom";
import { useAuth } from "@context/useAuth";
import { useState, useEffect } from "react";
import { LoginContainer, FormContainer } from "./styles";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useCart } from "@context/CartContext";
import logo from '@assets/logo.svg';

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const { signIn, user } = useAuth();
  const { cartItems } = useCart()
  const navigate = useNavigate();

  async function handleSignIn(event) {
    event.preventDefault();
    setLoading(true);

    try {
      await signIn({ email, password }); 
    } catch (error) {
      console.error("Erro no login:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user) {
      if (cartItems.length > 0) {
        navigate('/checkout');
      } else {
        navigate('/');
      }
    }
  }, [user, cartItems, navigate]);

  return (
    <LoginContainer>
      <FormContainer onSubmit={handleSignIn}> 
        <span onClick={() => navigate('/')}><FaArrowLeft /> Voltar</span>
        <img src={logo} alt="" />
        <input
          type="email"
          placeholder="Email"
          id="email"
          required
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          required
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}> 
          {loading ? "Entrando..." : "Entrar"}
        </button>
        <span onClick={() => navigate('/cadastrar')}>Criar conta<FaArrowRight size={12} /></span>
      </FormContainer>
    </LoginContainer>
  );
}
