import { useState, useEffect } from "react"
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import { ShopCart } from "@components/ShopCart"
import  { ProdutcConainer } from './style'


export function Product(){
      const [isCartOpen, setIsCartOpen] = useState(false)
    
      function toggleCart() {
        setIsCartOpen(!isCartOpen)
      }
      
    return(
        <ProdutcConainer>
            <Header toggleCart={toggleCart} />
            {isCartOpen && <ShopCart closeCart={toggleCart} />}
            <h1>Pagina de produtos</h1>
            <Footer/>
        </ProdutcConainer>
    )
}