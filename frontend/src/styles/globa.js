import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root{
        font-size: 62.5%;
    }

    ::-webkit-scrollbar {
        width: .6rem;
    } 
    ::-webkit-scrollbar-thumb{
        background: ${({ theme }) => theme.COLORS.RED};
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
        background: transparent; 
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
     }

     body{
        height: 100vh;
        width: 100%;
        background: ${({ theme }) => theme.COLORS.WHITE};
     }

     body, input, textArea, button{
        font: 400 1.6rem Lato, sans-serif;
     }

`