import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';



export const AuthContext = createContext({ isLoggedIn: false, user: null, setUser: null });

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        console.log("---- useEffect ----")
        axios.get('http://localhost:3001/api/check-session')
            .then(response => {
                if (response.data.authenticated) {
                    setUser(response.data.user);
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                    setUser(null);
                }
            })
            .catch((error) => {
                console.error('Session check failed:', error);
                setIsLoggedIn(false);
                setUser(null);
            })
    },
        // eslint-disable-next-line 
        [setUser, setIsLoggedIn]);




    return (
        <AuthContext.Provider value={{ isLoggedIn, user, setUser,setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};



//バックエンド側
// app.get('/api/check-session', (req, res) => {
//     if (req.isAuthenticated()) {
//         res.json({ authenticated: true, user: req.user });
//     } else {
//         res.json({ authenticated: false });
//     }
// });

//isLoggedinの状態を確認するためのカスタムフック
