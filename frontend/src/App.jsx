import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/globa"
import { defaultTheme } from "./styles/themes/defaultTheme"

export function App(){
    return(
        <ThemeProvider theme={defaultTheme}>
            <h1>rotando</h1>
            <GlobalStyle/>
        </ThemeProvider>
    )
}