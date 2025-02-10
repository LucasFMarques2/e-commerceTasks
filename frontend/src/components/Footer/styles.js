import styled from "styled-components";

export const FooterContainer = styled.footer`
    position: relative;
    z-index: 3;
    width: 100%;
    height: 19rem;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 2rem;
    @media(max-width: 865px){
      display: flex;
      justify-content: center;
    }
`

export const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;

    > button{
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }

    a{
      display: flex;
        padding: 1rem 1em;
        width: 25rem;
        justify-content: center;
        align-items: center;

        gap: 1rem;
        font-size: 1.4rem;
        font-weight: bold;
        color: ${({ theme}) => theme.COLORS.BLACK};
    }

    > button:hover{
        opacity: 0.9;
    }

    @media(max-width: 865px){
      flex-direction: column;
      gap: 1rem;
      button{
        width: 15rem;
        font-size: 1rem;
      }
    }
`

export const LocaleContainer = styled.div`
    display:flex;
    flex-direction: column;
    line-height: 2rem;
    margin-left: 10%;

    h4{
     display: block;
     position: relative;
     font-size: 1.6rem;
     margin-bottom: 1rem;
   }

   h4::after{
     content: '';
     display: block;
     width: 6rem;
     height: 0.4rem; 
     background-color: ${({ theme}) => theme.COLORS.WHITE}; 
     position: absolute;
     bottom: -1rem; 
     left: 0;
   }

   span:nth-child(2){
    margin-top: 1rem;
   }

   @media(max-width: 865px){
      h4{
        font-size: 1.5rem;
        margin-top: 1.5rem;
      }

      span{
        font-size: 1.1rem;
      }
    }
`