import { 
    CartContainer, 
    ItemContainer, 
    ItensContainer, 
    DivisorContainer,
    TotalPriceContainer
} from "./style";
import { FaRegTrashAlt , FaPlus, FaMinus, FaArrowRight } from "react-icons/fa";
import sapato from '@assets/sapato1.svg'
import logo from '@assets/logo.svg'


// eslint-disable-next-line react/prop-types
export function ShopCart({ closeCart }){
    return(
        <CartContainer>
            <div className="Header">
                <img src={logo} alt="" />
                <button onClick={closeCart}>X</button>
            </div>
            <ItensContainer>
              <ItemContainer>
                <img src={sapato} alt="" />
                  <DivisorContainer>
                    <span>Sapato preto</span>
                    <span>R$ 259,90</span>
                  </DivisorContainer>
                  <DivisorContainer>
                     <button><FaRegTrashAlt /></button>
                       <span className="AmountButton">
                        <button><FaMinus size={12}/></button>
                        <span>1</span>
                        <button><FaPlus size={12}/></button>
                       </span>
                    </DivisorContainer>
              </ItemContainer>
              <ItemContainer>
                <img src={sapato} alt="" />
                  <DivisorContainer>
                    <span>Sapato preto</span>
                    <span>R$ 259,90</span>
                  </DivisorContainer>
                  <DivisorContainer>
                     <button><FaRegTrashAlt /></button>
                       <span className="AmountButton">
                        <button><FaMinus size={12}/></button>
                        <span>1</span>
                        <button><FaPlus size={12}/></button>
                       </span>
                    </DivisorContainer>
              </ItemContainer>
            </ItensContainer>
            <TotalPriceContainer>
                <h2>Subtotal: R$ 800,99</h2>
                <button>Comprar <FaArrowRight size={12} /> </button>
            </TotalPriceContainer>
        </CartContainer>
    )
}