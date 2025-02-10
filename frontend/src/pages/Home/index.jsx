import { useState, useEffect } from "react"
import { HomeContainer, ContentContainer, ProductsContainer as ProdContainer, ProductItens } from "./styles"
import { Header } from "@components/Header"
import { Footer } from "@components/Footer"
import { Products } from "./components/Products"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { ShopCart } from "@components/ShopCart"
import { api } from "@services/api"

export function Home() {
  const [slidePreView, setSliderPerView] = useState(3)
  const [isMobile, setIsMobile] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [produtos, setPordutos] = useState([])

  useEffect(()=>{
    async function fetchProducts() {
      const response = await api.get('/products')
      setPordutos(response.data)
    }
    fetchProducts()
  },[])

  useEffect(() => {
    function handleResize() {
      setSliderPerView(window.innerWidth < 750 ? 2 : 3)
      setIsMobile(window.innerWidth < 750)
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const groupedProducts = produtos.reduce((acc, produto) => {
    if (!acc[produto.categoria]) {
      acc[produto.categoria] = [];
    }
    acc[produto.categoria].push({
      ...produto,
      preco: parseFloat(produto.preco.replace(",", ".")), 
      desconto: parseFloat(produto.desconto) || 0 
    });
    return acc;
  }, {});
  

  const categoryDisplayNames = { acessorio: "Acessórios", roupa: "Roupas", calcado: "Calçados" }
  const categoriesOrder = ["roupa", "calcado", "acessorio"]

  function toggleCart() {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <HomeContainer>
      <Header toggleCart={toggleCart} products={produtos} />
      {isCartOpen && <ShopCart closeCart={toggleCart} />}
      <ContentContainer>
        {categoriesOrder.map(category => {
          const productsInCategory = groupedProducts[category] || []
          return (
            <ProdContainer key={category}>
              <h4>{categoryDisplayNames[category]}</h4>
              <ProductItens>
                <Swiper 
                   slidesPerView={slidePreView} pagination={isMobile ? { clickable: true } : false} navigation={!isMobile ? { clickable: true } : false} modules={[Navigation, Pagination]}>
                  {productsInCategory.map(produto => (
                    <SwiperSlide key={produto._id} className="swiperSlider">
                      <Products 
                       id={produto._id}
                       img={produto.imgURL} 
                       title={produto.titulo} 
                       price={produto.preco} 
                       />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </ProductItens>
            </ProdContainer>
          )
        })}
      </ContentContainer>
      <Footer />
    </HomeContainer>
  )
}
