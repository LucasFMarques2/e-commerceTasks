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
import { useAuth } from "@context/useAuth";
import { useCart } from "@context/CartContext";
import { IoSearch, IoMenu } from "react-icons/io5";
import { FaRegUser,FaPowerOff } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom"; 
import logo from "@assets/logo.svg";

export function Header({ toggleCart, products }) {
  const { user, signOut } = useAuth()
  const { cartItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setCartCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
  }, [cartItems]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.length > 0) {
      const filteredResults = products.filter((product) =>
        product.titulo.toLowerCase().includes(query)
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

  const handleProductClick = (productId) => {
    navigate(`/produto/${productId}`);
  };

  return (
    <HeaderContainer>
      <IoMenu size={30} onClick={() => setIsOpen(!isOpen)} className="menu-icon" />
      <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
      
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
              <SearchItem key={product._id} onClick={() => handleProductClick(product._id)}>
                <img src={product.imgURL} alt={product.titulo} />
                <div>
                  <h4>{product.titulo}</h4>
                  <p>{product.descricao}</p>
                  <p>R$ {product.preco}</p>
                </div>
              </SearchItem>
            ))}
          </SearchResultsContainer>
        )}
      </InputContainer>

      <MenuContainer>
        
        {user ?
          <MenuItem className="account" onClick={signOut}> 
            <FaPowerOff/> Sair
          </MenuItem>
        : (
          <MenuItem className="account" onClick={()=> navigate('/login')}>
              <FaRegUser/> Minha conta 
           </MenuItem>
        )}
        <MenuItem onClick={toggleCart}>
          <TiShoppingCart size={22} />
          {cartCount > 99 ? <span>+99</span> : <span>{cartCount}</span>}
        </MenuItem>
      </MenuContainer>

      {isOpen && (
        <BurgerMenu>
            <BurgerContent>
            {user ?
            <MenuItem className="account" onClick={signOut}> 
              <FaPowerOff/> Sair
            </MenuItem>
          : (
            <MenuItem className="account" onClick={()=> navigate('/login')}>
                <FaRegUser/> Minha conta 
            </MenuItem>
          )}
          </BurgerContent>
        </BurgerMenu>
      )}
    </HeaderContainer>
  );
}
