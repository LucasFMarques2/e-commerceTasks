import { SignUpContainer, FormContainer } from "./styles"
import { useState } from "react";
import { api } from "@services/api";
import { FaArrowLeft } from "react-icons/fa";
import logo from '@assets/logo.svg'
import { useNavigate } from "react-router-dom";

export function SignUp(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignUp(event) {
        event.preventDefault()
        if (!nome || !email || !password) {
          return alert("Preencha todos os campos!");
        }
        api.post("/user", { nome, email, password })
        .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/login");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

    const navigate = useNavigate()
    return(
        <SignUpContainer>
            <FormContainer onSubmit={handleSignUp}>
                <img src={logo} alt="" />
                <input 
                  type="text" 
                  placeholder="Nome" 
                  id="name" 
                  onChange={(e) => setNome(e.target.value)}
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  id="email" 
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                  type="password" 
                  placeholder="Password" 
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Entrar</button>
                <span onClick={() => navigate('/login')}><FaArrowLeft size={12} />Voltar</span>
            </FormContainer>
        </SignUpContainer>
    )
}