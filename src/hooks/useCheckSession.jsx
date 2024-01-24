import { useEffect, useContext, useState } from 'react';
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
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    
      
    useEffect(() => {
        axios.get('http://localhost:3001/api/check-session')
            .then(response => {
                if (response.data.authenticated) {
                    console.log(response.data.user);
                    setUser(response.data.user);
                    setIsLoggedIn(true);
                } else {
                    setUser(null);         
                }
            })
            .catch(() => {
                setUser(null);
            })
    }, [setUser, setIsLoggedIn]);

    return { user , isLoggedIn };
    
};

export default useCheckSession;
