import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext({ user: null, setUser: null });

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const checkSession = async () => {
            console.log("---- useEffect ----")
            try {
                const response = await axios.get('http://localhost:3001/api/check-session');
                if (response.data.authenticated) {
                    setUser(response.data.user);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error('Session check failed:', error);
                setUser(null);
            } finally {
                setIsReady(true);
            }
        };
        checkSession();
    }, [setUser, setIsReady]);

    if (!isReady) {
        return <p>ローディング中...</p>;
    }

    return (
        <AuthContext.Provider value={{ user, setUser }}>
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
