import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/globa"
import { defaultTheme } from "./styles/themes/defaultTheme"
import { Home } from "@pages/Home"

export function App(){
    return(
        <ThemeProvider theme={defaultTheme}>
            <Home/>
            <GlobalStyle/>
        </ThemeProvider>
    )
}