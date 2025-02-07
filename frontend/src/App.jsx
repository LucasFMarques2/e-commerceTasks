import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/globa"
import { defaultTheme } from "./styles/themes/defaultTheme"
import { register } from 'swiper/element/bundle'
import { Home } from "@pages/Home"

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export function App(){
    return(
        <ThemeProvider theme={defaultTheme}>
            <Home/>
            <GlobalStyle/>
        </ThemeProvider>
    )
}