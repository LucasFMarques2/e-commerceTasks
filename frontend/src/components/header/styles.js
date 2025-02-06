import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 1.5rem 2rem;
    width: 100%;
    position: relative;

    .menu-icon {
        display: none;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        justify-content: space-between;
        margin-bottom: 10rem;

        img{
           position: absolute;
           left: 40%;
        }
        .menu-icon {
            display: block;
        }
    }
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
    width: 50%;
    justify-content: space-between;

    input {
        padding: .4rem;
        border: none;
        width: 100%;
    }

    input:focus {
        outline: none;
    }

    @media (max-width: 768px) {
        position: absolute;
        bottom: -50px;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        
        input{
            font-size: 2rem;
        }
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;


    @media (max-width: 768px) {
        position: absolute;
        right: 2rem;
        top: 1.5rem;
       
        .account{
            display: none;
        }
    }
`;

export const MenuItem = styled.button`
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
        color: ${({ theme }) => theme.COLORS.BLACK};
    }

    span {
        font-size: 1rem;
        font-weight: bold;
        background: ${({ theme }) => theme.COLORS.RED};
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        box-sizing: content-box;
        padding: .3rem;
    }

    @media (max-width: 768px) {
        span{
            padding: .5rem;
        }
    }
`;

export const BurgerMenu = styled.div`
    position: absolute;
    top: 7.0rem;
    left: 0;
    width: 100%;
    background: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BurgerContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    align-items: center;
`;
