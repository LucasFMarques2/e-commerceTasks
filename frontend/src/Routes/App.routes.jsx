import { Routes, Route} from 'react-router-dom'
import { Home } from '@pages/Home'
import { Product } from '@pages/Product'

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/produto' element={<Product/>}/>
        </Routes>
    )
}