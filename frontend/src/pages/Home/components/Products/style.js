import styled from "styled-components";

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20rem;
    cursor: pointer;
    min-height: 380px;
    justify-content: space-between;

    img {
        width: 100%;
        height: 200px; 
        object-fit: cover; 
        transition: transform 0.2s;
        border-radius: 8px;
    }

    img:hover {
        transform: scale(1.1);
    }

    div:hover {
        background: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    @media (max-width: 765px) {
        width: 100%;

        img {
            height: 150px; 
        }
    }
`;

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    line-height: 2.6rem;
    padding: 2rem;
    width: 100%;
    flex-grow: 1; 
    cursor: default;

    h3 {
        font-size: 1.4rem;
        font-weight: 400;
        text-transform: uppercase;
    }

    strong {
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.BLACK};
    }

    span {
        font-size: 1.2rem;
    }

    button {
        padding: 0.5rem 2rem 1rem;
        border: none;
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-weight: bold;
        border-radius: 8px;
        margin-top: auto; 
        cursor: pointer;
        transition: transform 0.3s;
    }

    button:hover {
        transform: scale(1.1);
    }

    @media (max-width: 765px) {
        width: 70%;
        padding: 0;
        margin-bottom: 5rem;

        h3 {
            font-size: 1.3rem;
        }

        strong {
            font-size: 1.8rem;
        }

        span {
            font-size: 1rem;
        }

        button {
            padding: 0.5rem 2rem 1rem;
        }
    }
`;
