import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../providers/UserProvider';

//バックエンド側
// app.get('/api/check-session', (req, res) => {
//     if (req.isAuthenticated()) {
//         res.json({ authenticated: true, user: req.user });
//     } else {
//         res.json({ authenticated: false });
//     }
// });

//isLoggedinの状態を確認するためのカスタムフック
const useCheckSession = () => {
    const { user, setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3001/api/check-session')
            .then(response => {
                if (response.data.authenticated) {
                    setUser(response.data.user);
                    setIsLoggedIn(true);
                } else {
                    setUser(null);         
                }
            })
            .catch(() => {
                setUser(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [setUser, setIsLoggedIn]);

    return { user, loading, isLoggedIn };
};

export default useCheckSession;
