import {Routes,Route, BrowserRouter} from 'react-router-dom';

import{Main} from '../components/templates/Main';
import { DefaultTemp } from '../components/templates/DefaultTemp';

import {Mypage} from '../components/pages/Mypage';
import{UserRegister} from '../components/pages/UserRegister';
import {Login} from '../components/pages/Login';
import { ServerError } from '../components/pages/errors/ServerError';



export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main><Mypage/></Main>} />
                <Route path="/register" element={<DefaultTemp><UserRegister/></DefaultTemp>} />
                <Route path="/login" element={<DefaultTemp><Login/></DefaultTemp>} />
                <Route path="/500" element={<DefaultTemp><ServerError/></DefaultTemp>} />
            </Routes>
        </BrowserRouter>
    )
}