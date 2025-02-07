import { HomeContainer, ProductsContainer,  ProductItens } from "./styles";
import { Header } from "@components/header";
import { Products } from "./components/Products";
import { Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import { useState, useEffect } from "react";

import sapato1 from '@assets/sapato1.svg'
import sapato2 from '@assets/sapato2.svg'
import sapato3 from '@assets/sapato1.svg'
import cinto from '@assets/cinto.svg'
import sandalha from '@assets/sandatlha.svg'

const Produtos = [
    {
      id: 1,
      nome: 'Sapato',
      descricao: 'Sapato preto de couro listrado',
      preco: 120,
      desconto: 0,
      img: sapato1
    },
    {
      id: 2,
      nome: 'Sapato 2',
      descricao: 'Sapato preto de couro listrado',
      preco: 120,
      desconto: 0,
      img: sapato2
    },
    {
        id: 3,
        nome: 'Sapato 3',
        descricao: 'Sapato preto de couro listrado',
        preco: 120,
        desconto: 0,
        img: sapato3
    },
    {
        id: 4,
        nome: 'Sandalha',
        descricao: 'Sapato preto de couro listrado',
        preco: 120,
        desconto: 0,
        img: sandalha,
    },
    {
        id: 5,
        nome: 'Cinto',
        descricao: 'Sapato preto de couro listrado',
        preco: 120,
        desconto: 0,
        img: cinto
    }
    
  ];

export function Home(){
    const [slidePreView, setSliderPerView] = useState(3)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setSliderPerView(window.innerWidth < 750 ? 2 : 3);
            setIsMobile(window.innerWidth < 750 ? true : false);
        }
    
        window.addEventListener("resize", handleResize);
        handleResize();
    
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <HomeContainer>
          <Header/>
          <ProductsContainer>
            <h4>Mais vendidos</h4>
            <ProductItens>
              <Swiper 
                slidesPerView={slidePreView} 
                pagination={isMobile && { clickable: true }}
                navigation={!isMobile && { clickable: true }}
                modules={[Navigation, Pagination]}
              >
                {Produtos.map((produto) => (
                  <SwiperSlide key={produto.id}  className="swiperSlider" >
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
        </HomeContainer>
    )
}