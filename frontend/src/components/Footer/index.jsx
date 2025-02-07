import { FooterContainer, ContactContainer, LocaleContainer } from "./styles";
import { IoMail} from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa";

export function Footer(){
    return(
        <FooterContainer>
            <ContactContainer>
                <button><IoMail size={20}/>ENTRE EM CONTATO</button>
                <button><FaHeadphones size={30}/>FALE COM NOSSO CONSULTOR ONLINE</button>
            </ContactContainer>
            <LocaleContainer>
                <h4>Localização</h4>
                <span>Rua 8 avenida gelulio vargas - SP</span>
                <span>lucasfreitasm3@hotmail.com</span>
                <span>+55 61 99138-4322</span>
            </LocaleContainer>
        </FooterContainer>
    )
}