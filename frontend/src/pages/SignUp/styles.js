import styled from "styled-components";


export const SignUpContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   background: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    padding: 5rem;
    gap: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.WHITE};

    input{
        padding: .7rem 1rem;
        border-radius: 8px;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    }
    
    input:focus{
        border: 1px solid ${({ theme }) => theme.COLORS.RED};
        outline: 1px solid ${({ theme }) => theme.COLORS.RED};
    }

    button{
        padding: 1rem 2rem;
        border-radius: 8px;
        border: none;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
        font-weight: bold;
        cursor: pointer;
        background-color: ${({ theme }) => theme.COLORS.RED};
        color: ${({ theme }) => theme.COLORS.WHITE};
        transition: .2s;
    }

    button:hover{
        transform: scale(0.9,1);
    }

    span{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        color: ${({theme})=> theme.COLORS.RED};
        transition: .2s;
    }

    span:hover{
        transform: scale(.9);
    }
`