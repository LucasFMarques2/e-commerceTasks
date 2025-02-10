import styled from "styled-components";

export const ProdutcConainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;  
  justify-content: space-between;
  align-items: center;

  a{
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.BLACK};
  }
`;

export const ProductBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  border-radius: 0.8rem; 
  padding: 2rem;
  width: 60rem;
  gap: 4rem;
  margin-top: -5rem;

  @media (max-width: 1200px) {
    width: 50%;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    margin-top: 0;
    gap: 1rem;
    padding: 1.2rem;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 2rem;
  flex: 1;
  height: 20rem;
  border-left: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};

  span{
   font-weight: bold;
  }

  @media (max-width: 768px) {
   text-align: center;
    border-left: none;
    padding: 1rem;
    gap: 2rem;
  }
`;

export const ProductImage = styled.img`
  width: 20rem;
  height: auto;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductButton = styled.button`
  padding: 1rem;
  background-color:${({ theme }) => theme.COLORS.BLACK};
  color: white;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: background-color 0.3s;
  transition: 0.2s;

  &:hover {
    transform: scale(0.9,1);
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
  }
`;
