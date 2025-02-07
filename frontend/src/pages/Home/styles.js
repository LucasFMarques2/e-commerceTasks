import styled from "styled-components";

export const HomeContainer = styled.div`
   height: 100vh;
`

export const ProductsContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 50%;
   margin: 10rem auto;
   
   h4{
     display: block;
     position: relative;
     font-size: 1.6rem;
     margin-left: 2rem;
     margin-bottom: 6rem;
   }

   h4::after{
     content: '';
     display: block;
     width: 6rem;
     height: 0.4rem; 
     background-color: ${({ theme}) => theme.COLORS.GRAY_300}; 
     position: absolute;
     bottom: -1rem; 
     left: 0;
   }

   @media(max-width: 865px){
      width: 90%;
   }
`

export const ProductItens = styled.div`
   .swiperSlider{
      display: flex;
      justify-content: center;
   }

   .swiper-pagination-bullet {
    background: black !important;
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme}) => theme.COLORS.RED} !important;
    opacity: 1;
  }

  .swiper-button-next,
  .swiper-button-prev {
   color: ${({ theme}) => theme.COLORS.RED} !important;
   margin: 0 -1rem;
    &::after {
      font-size: 2.4rem; 
    }
    
  }

   @media(max-width: 865px){
      .swiperSlider{
        padding:  0;
      }
   }
`
