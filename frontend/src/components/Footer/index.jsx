import { FooterContainer, ContactContainer, LocaleContainer } from "./styles";
import { IoMail } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa";

export function Footer() {
  return (
    <FooterContainer>
      <ContactContainer>
          <button>
             <a href="mailto:lucasfreitasm3@hotmail.com">
                <IoMail size={20} />
                ENTRE EM CONTATO
            </a>
          </button>
          <button>
            <a href="https://wa.me/5561991384322" target="_blank" rel="noopener noreferrer">
              <FaHeadphones size={30} />
               FALE COM NOSSO CONSULTOR ONLINE
           </a>
          </button>
      </ContactContainer>
      <LocaleContainer>
        <h4>Localização</h4>
        <span>Rua 8 avenida gelulio vargas - SP</span>
        <span>lucasfreitasm3@hotmail.com</span>
        <span>+55 61 99138-4322</span>
      </LocaleContainer>
    </FooterContainer>
  );
}
