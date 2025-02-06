import { useState } from "react";
import { HeaderContainer, InputContainer, MenuContainer, MenuItem, BurgerMenu, BurgerContent } from "./styles";
import { IoSearch, IoMenu } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import logo from '@assets/logo.svg';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <HeaderContainer>
            <IoMenu size={30} onClick={() => setIsOpen(!isOpen)} className="menu-icon" />
            
            <img src={logo} alt="Logo" className="logo" />
            
            <InputContainer>
                <input type="text" placeholder="Pesquise aqui" />
                <IoSearch size={20} />
            </InputContainer>
            
            <MenuContainer >
               <MenuItem className="account">
                    <FaRegUser size={20} /> Minha conta
               </MenuItem>

                <MenuItem>
                    <TiShoppingCart size={22} />
                    <span>+99</span>
                </MenuItem>

            </MenuContainer>

            {isOpen && (
                <BurgerMenu>
                    <BurgerContent>
                        <MenuItem>
                             <FaRegUser size={20} /> Minha conta
                        </MenuItem>
                    </BurgerContent>
                </BurgerMenu>
            )}
        </HeaderContainer>
    );
}
