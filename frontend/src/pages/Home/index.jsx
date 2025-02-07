import { HomeContainer, ContentContainer,ProductsContainer, ProductItens } from "./styles";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { Products } from "./components/Products";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useState, useEffect } from "react";

import sapato1 from '@assets/sapato1.svg';
import sapato2 from '@assets/sapato2.svg';
import sapato3 from '@assets/sapato1.svg';
import cinto from '@assets/cinto.svg';
import sandalha from '@assets/sandatlha.svg';
import { ShopCart } from "@components/ShopCart";

const Produtos = [
    {
      id: 1,
      nome: 'Sapato',
      descricao: 'Sapato preto de couro listrado',
      preco: 120,
      desconto: 0,
      img: sapato1,
      category: "acessorio"
    },
    {
      id: 2,
      nome: 'Sapato 2',
      descricao: 'Sapato preto de couro listrado',
      preco: 120,
      desconto: 0,
      img: sapato2,
      category: "acessorio"
    },
    {
      id: 3,
      nome: 'Sapato 3',
      descricao: 'Sapato preto de couro listrado',
      preco: 120,
      desconto: 0,
      img: sapato3,
      category: "roupas"
    },
    {
      id: 4,
      nome: 'Sandalha',
      descricao: 'Sapato preto de couro listrado',
      preco: 120,
      desconto: 0,
      img: sandalha,
      category: "roupas"
    },
    {
      id: 5,
      nome: 'Cinto',
      descricao: 'Sapato preto de couro listrado',
      preco: 120,
      desconto: 0,
      img: cinto,
      category: "calcado"
    },
    {
      id: 6,
      nome: 'Cinto',
      descricao: 'Sapato preto de couro listrado',
      preco: 120,
      desconto: 0,
      img: cinto,
      category: "calcado"
    },
    {
      id: 7,
      nome: 'Sapato',
      descricao: 'Sapato preto de couro listrado',
      preco: 120,
      desconto: 0,
      img: sapato1,
      category: "acessorio"
    },
    {
      id: 8,
      nome: 'Sapato 2',
      descricao: 'Sapato preto de couro listrado',
      preco: 120,
      desconto: 0,
      img: sapato2,
      category: "acessorio"
    },
    {
      id: 9,
      nome: 'Sapato 3',
      descricao: 'Sapato preto de couro listrado',
      preco: 120,
      desconto: 0,
      img: sapato3,
      category: "roupas"
    },
    {
      id: 10,
      nome: 'Sandalha',
      descricao: 'Sapato preto de couro listrado',
      preco: 120,
      desconto: 0,
      img: sandalha,
      category: "roupas"
    },
    {
      id: 11,
      nome: 'Cinto',
      descricao: 'Sapato preto de couro listrado',
      preco: 120,
      desconto: 0,
      img: cinto,
      category: "calcado"
    },
    {
      id: 12,
      nome: 'Cinto',
      descricao: 'Sapato preto de couro listrado',
      preco: 120,
      desconto: 0,
      img: cinto,
      category: "calcado"
    }
];

export function Home() {
  const [slidePreView, setSliderPerView] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setSliderPerView(window.innerWidth < 750 ? 2 : 3);
      setIsMobile(window.innerWidth < 750);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const groupedProducts = Produtos.reduce((acc, produto) => {
    if (!acc[produto.category]) {
      acc[produto.category] = [];
    }
    acc[produto.category].push(produto);
    return acc;
  }, {});

  const categoryDisplayNames = {
    acessorio: "Acessórios",
    roupas: "Roupas",
    calcado: "Calçados"
  };

  const categoriesOrder = ["acessorio", "roupas", "calcado"];
  
  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <HomeContainer>
      <Header toggleCart={toggleCart} />
      {isCartOpen && <ShopCart closeCart={toggleCart} />}
      <ContentContainer>
      {categoriesOrder.map((category) => {
        const productsInCategory = groupedProducts[category] || [];
        return (
          <ProductsContainer key={category}>
            <h4>{categoryDisplayNames[category]}</h4>
            <ProductItens>
              <Swiper 
                slidesPerView={slidePreView} 
                pagination={isMobile ? { clickable: true } : false}
                navigation={!isMobile ? { clickable: true } : false}
                modules={[Navigation, Pagination]}
              >
                {productsInCategory.map((produto) => (
                  <SwiperSlide key={produto.id} className="swiperSlider">
                    <Products
                      img={produto.img}
                      title={produto.nome}
                      price={produto.preco}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </ProductItens>
          </ProductsContainer>
        );
      })}
      </ContentContainer>
      <Footer/>
    </HomeContainer>
  );
}
