import { 
  HeaderContainer, 
  InputContainer, 
  MenuContainer, 
  MenuItem, 
  BurgerMenu, 
  BurgerContent, 
  SearchResultsContainer, 
  SearchItem 
} from "./styles";
import { useState, useEffect, useRef } from "react";
import { useCart } from "@context/CartContext";
import { IoSearch, IoMenu } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
// import { useNavigate } from "react-router-dom"; 
import logo from "@assets/logo.svg";

export function Header({ toggleCart, products }) {
  const { cartItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  // const navigate = useNavigate();

  useEffect(() => {
    setCartCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
  }, [cartItems]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  
    if (query.length > 0) {
      const filteredResults = products.filter((product) =>
        product.nome.toLowerCase().includes(query)
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <HeaderContainer>
      <IoMenu size={30} onClick={() => setIsOpen(!isOpen)} className="menu-icon" />
      <img src={logo} alt="Logo" className="logo" />
      
      <InputContainer ref={searchRef}>
        <input
          type="text"
          placeholder="Pesquise aqui"
          value={searchQuery}
          onChange={handleSearch}
        />
        <IoSearch size={20} />
        
        {searchResults.length > 0 && (
          <SearchResultsContainer>
            {searchResults.map((product) => (
              <SearchItem key={product.id} onClick={() => navigate(`/produto/${product.id}`)}>
                <img src={product.img} alt={product.nome} />
                <div>
                  <h4>{product.nome}</h4>
                  <p>R$ {product.preco.toFixed(2)}</p>
                </div>
              </SearchItem>
            ))}
          </SearchResultsContainer>
        )}
      </InputContainer>

      <MenuContainer>
        <MenuItem className="account">
          <FaRegUser size={20} /> Minha conta
        </MenuItem>
        <MenuItem onClick={toggleCart}>
          <TiShoppingCart size={22} />
          {cartCount > 99 ? <span>+99</span> : <span>{cartCount}</span>}
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
