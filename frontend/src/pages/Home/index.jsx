import { HomeContainer } from "./styles";
import { Header } from "@components/header";
import { Products } from "./components/Products";
import sapato1 from '@assets/sapato1.svg'
import sapato2 from '@assets/sapato2.svg'
import sapato3 from '@assets/sapato1.svg'
import cinto from '@assets/cinto.svg'
import sandalha from '@assets/sandatlha.svg'

const Produtos = [
    {
      id: 1,
      nome: 'Sapato',
      descricao: 'Sapato preto de couro listrado',
      preco: 120,
      desconto: 0,
      img: sapato1
    },
    {
      id: 2,
      nome: 'Sapato 2',
      descricao: 'Sapato preto de couro listrado',
      preco: 120,
      desconto: 0,
      img: sapato2
    },
    {
        id: 3,
        nome: 'Sapato 3',
        descricao: 'Sapato preto de couro listrado',
        preco: 120,
        desconto: 0,
        img: sapato3
    },
    {
        id: 4,
        nome: 'Sandalha',
        descricao: 'Sapato preto de couro listrado',
        preco: 120,
        desconto: 0,
        img: sandalha,
    },
    {
        id: 5,
        nome: 'Cinto',
        descricao: 'Sapato preto de couro listrado',
        preco: 120,
        desconto: 0,
        img: cinto
    }
    
  ];

export function Home(){
    return(
        <HomeContainer>
            <Header/>
            <h1>Home</h1>
            <Products
                title="sapato"
                price={250}
                img={sapato1}
            />
             <Products
                title="sapato"
                discount={10}
                price={200}
                img={sapato2}
            />
            <Products
                title="sapato"
                price={100}
                img={sapato2}
            />
        </HomeContainer>
    )
}