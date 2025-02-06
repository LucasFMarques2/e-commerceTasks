import { ProductsContainer,  InformationContainer } from "./style";

  
// eslint-disable-next-line react/prop-types
export function Products({title, img, price, discount = 0}){
    let installments = 0;
    const originalPrice = price
    price = price * (1 - discount / 100);
    let divider = 0

    if(price > 100 && price < 200){
        divider = 4
        installments = price / divider
    }else{
        divider = 9
        installments = price / divider
    }

    return(
         <ProductsContainer>
            <img src={img} alt="" />
            <InformationContainer>
                <h3>{title}</h3>
                {discount > 0 ? (
                  <>
                    <span>de R${originalPrice}</span>
                    <strong> Por R${price}</strong>
                    <span>{discount}% de desconto</span>
                  </>
                ):(
                    <strong>Por R$ {price} </strong>
                )} 
                {price > 100 && <span>ou {divider}x de R$ {Math.ceil(installments)}</span>}
                <button>Comprar</button>
            </InformationContainer>
         </ProductsContainer>
    )
}