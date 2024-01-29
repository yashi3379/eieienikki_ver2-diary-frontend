import React,{useContext} from 'react';
import {Routes,Route, BrowserRouter,Navigate} from 'react-router-dom';

import{Main} from '../components/templates/Main';
import { DefaultTemp } from '../components/templates/DefaultTemp';

import Mypage from '../components/pages/Mypage';
import UserRegister from '../components/pages/UserRegister';
import Login  from '../components/pages/Login';
import { ServerError } from '../components/pages/errors/ServerError';
import { AuthContext } from '../providers/AuthProvider';
import CreateDiary from '../components/pages/CreateDiary';




export const Router = () => {
    const { user,isLoggedIn } = useContext(AuthContext);
    console.log(user);
    console.log(isLoggedIn);
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isLoggedIn && (user !== undefined || user !== null) ? <Main><Mypage/></Main> : <Navigate to="/login"/>} />
                <Route path ="/create" element={isLoggedIn && (user !== undefined || user !== null) ? <DefaultTemp><CreateDiary/></DefaultTemp> : <Navigate to="/login"/>} />
                <Route path="/register" element={!isLoggedIn || (user === undefined || user === null)  ? <DefaultTemp><UserRegister/></DefaultTemp> : <Navigate to="/"/>} />
                <Route path="/login" element={!isLoggedIn || (user === undefined || user === null) ? <DefaultTemp><Login/></DefaultTemp> : <Navigate to="/"/>} />
                <Route path="/500" element={<DefaultTemp><ServerError/></DefaultTemp>} />
            </Routes>
        </BrowserRouter>
    )
}