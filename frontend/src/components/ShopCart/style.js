import styled from "styled-components";


export const CartContainer = styled.aside`
    position: absolute;
    top: 0;
    right: 1rem;
    z-index: 2;
    height: 100%;

    display: flex;
    flex-direction: column;
    padding: 3rem;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-left: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
   
    div::-webkit-scrollbar-thumb{
        background: ${({ theme }) => theme.COLORS.BLACK};
        border-radius: 4px;
    }

    .Header{
        display: flex;
        justify-content: space-between;
        margin-bottom: 5rem;

        button{
            border: none;
            background: transparent;
            cursor: pointer;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    @media(max-width: 865px){

    }
`

export const ItensContainer = styled.div`
    padding: 1rem 2rem;
    margin-bottom: 2rem;
    overflow-y: auto;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    background-color: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

`

export const ItemContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};

    img{
      width: 10rem;
    }
`

export const DivisorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    span{
        font-weight: bold;
    }

    button{
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.RED};
        cursor: pointer;
        outline: none;
        transition: .1s;
        width: 1.7rem;
        align-self:center;
    }

    button:hover{
        transform: scale(1.1);
    }

    .AmountButton{
        display: flex;
        align-items: start;
        gap: 1rem;
        border-radius: 8px;
        font-size: 1.5rem;
        padding: 0.2rem 1rem;
        background-color: ${({ theme }) => theme.COLORS.GRAY_200};

        button{
            border: none;
            background: transparent;
            color: ${({ theme }) => theme.COLORS.BLACK};
            width: 100%;
        }
    }
`

export const TotalPriceContainer = styled.div`
    text-align: center;
    padding: 1.5rem 2rem;
    margin: 0 0 20rem 0;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    background-color: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    h2{
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    button{
        display: flex;
        align-items: center;
        justify-self: center;
        padding: 1rem 2rem;
        font-size: 1.6rem;
        
        gap: 1rem;
        
        border: none;
        border-radius: 8px;
        
        font-weight: bold;
        color: ${({ theme }) => theme.COLORS.WHITE};

        background: ${({ theme }) => theme.COLORS.BLACK};

        cursor: pointer;

        transition: transform .2s;

        svg{ 
            margin-top: .3rem;
        }
    }

    button:hover{
        transform: scale(0.9,1);
    }


`
