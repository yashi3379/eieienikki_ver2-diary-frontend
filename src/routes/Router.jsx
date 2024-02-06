import React from 'react';
import {Routes,Route, BrowserRouter} from 'react-router-dom';


import { DefaultTemp } from '../components/templates/DefaultTemp';

import Mypage from '../components/pages/Mypage';
import UserRegister from '../components/pages/UserRegister';
import Login  from '../components/pages/Login';
import CreateDiary from '../components/pages/CreateDiary';
import { ServerError } from '../components/pages/errors/ServerError';




export const Router = () => {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<DefaultTemp><Mypage/></DefaultTemp>}  />
                <Route path ="/create" element={<DefaultTemp><CreateDiary/></DefaultTemp>} />
                <Route path="/register" element={ <DefaultTemp isPublic ><UserRegister/></DefaultTemp> } />
                <Route path="/login" element={ <DefaultTemp isPublic><Login/></DefaultTemp>} />
                <Route path="/500" element={<DefaultTemp isPublic ><ServerError/></DefaultTemp>} />
            </Routes>
        </BrowserRouter>
    )
}