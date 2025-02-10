import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './App.routes';

export function Router() {
    return(
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
    )

}