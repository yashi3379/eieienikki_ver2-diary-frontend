import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';



export const AuthContext = createContext({ user: null, setUser: null });

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isReady, setIsReady] = useState(false);


    useEffect(() => {
        console.log("---- useEffect ----")
        axios.get('http://localhost:3001/api/check-session')
            .then(response => {
                if (response.data.authenticated) {
                    setUser(response.data.user);
                } else {
                    setUser(null);
                }
                console.log("---- setUser ----")
                setIsReady(true);
                console.log(user);
            })
            .catch((error) => {
                console.error('Session check failed:', error);
                setUser(null);
                setIsReady(true);
            })
    },
        // eslint-disable-next-line 
        [setUser, setIsReady]);


    if (!isReady) {
        return null;
    }


    return (
        <AuthContext.Provider value={{user,setUser}}>
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
