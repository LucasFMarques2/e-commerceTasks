import { useState, useEffect } from "react";
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { ShopCart } from "@components/ShopCart";
import { ProdutcConainer, ProductBox, ProductDetails, ProductImage, ProductButton } from './style';
import { useCart } from "@context/CartContext"
import { useParams, Link } from 'react-router-dom';
import { api } from "@services/api";
import { FaArrowLeft } from "react-icons/fa";

export function Product() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart } = useCart();
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`/products/${id}`);
        setProduto(response.data);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    }
    fetchProduct();
  }, [id]);

  if (!produto) {
    return <div> Carregando...</div>
    }

  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }

  const handleAddToCart = () => {
    const productToCart = {
      id: produto._id,
      name: produto.titulo,
      image: produto.imgURL,
      price: parseFloat(produto.preco.replace(",", ".")),
      quantity: 1
    };
    console.log(produto)
    addToCart(productToCart);
  };

  return (
    <ProdutcConainer>
      <Header toggleCart={toggleCart} products={produto} />
      {isCartOpen && <ShopCart closeCart={toggleCart} />}
      <Link to="/"><FaArrowLeft/> Voltar</Link>
      <h1>Detalhes do produto</h1>
      <ProductBox>
        <ProductImage src={produto.imgURL} alt={produto.titulo} />
        <ProductDetails>
          <strong>{produto.titulo}</strong>
          <p>{produto.descricao}</p>
          <span>Valor: R$ {produto.preco}</span>
          <ProductButton onClick={handleAddToCart}>Comprar</ProductButton>
        </ProductDetails>
      </ProductBox>
      <Footer />
    </ProdutcConainer>
  );
}
