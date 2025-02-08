import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../Components/Header'
import { ShopCart } from '@components/ShopCart'
import { Footer } from '@components/Footer'
import { LayoutContainer } from './styles'
import sapato1 from "@assets/sapato1.svg"
import sapato2 from "@assets/sapato2.svg"
import sapato3 from "@assets/sapato1.svg"
import cinto from "@assets/cinto.svg"
import sandalha from "@assets/sandatlha.svg"

const Produtos = [
  { id: 1, nome: "Sapato", descricao: "Sapato preto de couro listrado", preco: 120, desconto: 0, img: sapato1, category: "acessorio" },
  { id: 2, nome: "Sapato 2", descricao: "Sapato preto de couro listrado", preco: 120, desconto: 0, img: sapato2, category: "acessorio" },
  { id: 3, nome: "Sapato 3", descricao: "Sapato preto de couro listrado", preco: 120, desconto: 0, img: sapato3, category: "roupas" },
  { id: 4, nome: "Sandalha", descricao: "Sapato preto de couro listrado", preco: 120, desconto: 0, img: sandalha, category: "roupas" },
  { id: 5, nome: "Cinto", descricao: "Sapato preto de couro listrado", preco: 120, desconto: 0, img: cinto, category: "calcado" },
  { id: 6, nome: "Cinto", descricao: "Sapato preto de couro listrado", preco: 120, desconto: 0, img: cinto, category: "calcado" },
  { id: 7, nome: "Sapato", descricao: "Sapato preto de couro listrado", preco: 120, desconto: 0, img: sapato1, category: "acessorio" },
  { id: 8, nome: "Sapato 2", descricao: "Sapato preto de couro listrado", preco: 120, desconto: 0, img: sapato2, category: "acessorio" },
  { id: 9, nome: "Sapato 3", descricao: "Sapato preto de couro listrado", preco: 120, desconto: 0, img: sapato3, category: "roupas" },
  { id: 10, nome: "Sandalha", descricao: "Sapato preto de couro listrado", preco: 120, desconto: 0, img: sandalha, category: "roupas" },
  { id: 11, nome: "Cinto", descricao: "Sapato preto de couro listrado", preco: 120, desconto: 0, img: cinto, category: "calcado" },
  { id: 12, nome: "Cinto", descricao: "Sapato preto de couro listrado", preco: 120, desconto: 0, img: cinto, category: "calcado" }
]

export function DefaultLayout() {
    const [isCartOpen, setIsCartOpen] = useState(false)
    function toggleCart() {
      setIsCartOpen(!isCartOpen)
    }
  return (
    <LayoutContainer>
      <Header toggleCart={toggleCart} products={Produtos}/>
      {isCartOpen && <ShopCart closeCart={toggleCart} />}
      <Outlet />
    </LayoutContainer>
  )
}