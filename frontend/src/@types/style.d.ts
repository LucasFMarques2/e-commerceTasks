import 'styled-components'
import { defaultTheme } from '../styles/themes/defaultTheme'

type ThemeType = typeof defaultTheme

declare module 'styled-componets'{
    export interface DefaultTheme extends ThemeType {}
}