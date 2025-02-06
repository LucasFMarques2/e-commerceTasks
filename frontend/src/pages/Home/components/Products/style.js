import styled from "styled-components";


export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20rem;
    color: black;
    img{
        width: 100%;
    }

    cursor: pointer;
   
    div:hover{
        background: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    line-height: 2.6rem;
    padding: 2rem;
    width: 100%;
    cursor: default;

    h3{
        font-size: 1.4rem;
        font-weight: 400;
        text-transform: uppercase;
    }

    strong{
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.BLACK};
    }
    
    span{
        font-size: 1.2rem;
    }

    button{
        padding: 0.5rem 2rem 1rem;
        border: none;
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-weight: bold;
        border-radius: 8px;
        margin-top: 1rem;
        cursor: pointer;
        transition: transform .3s;
    }

    button:hover{
        transform: scale(1.1);
    }

   

`