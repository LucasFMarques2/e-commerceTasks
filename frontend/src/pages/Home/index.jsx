import { HomeContainer } from "./styles";
import { Header } from "@components/header";

export function Home(){
    return(
        <HomeContainer>
            <Header/>
            <h1>Home</h1>
        </HomeContainer>
    )
}