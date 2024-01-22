// Login.jsx
import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext} from '../../providers/UserProvider';

import useCheckSession from '../../hooks/useCheckSession';
import axios from 'axios';

//バックエンド側の処理
// app.post('/api/login', passport.authenticate('local'),async (req, res) => {
//     res.status(200).json({ message: "ログイン成功", user: req.user });
// });

const Login = () => {
    const navigate = useNavigate();
    const { isLoggedIn, loading } = useCheckSession();
    const { setUser } = useContext(UserContext);

    if (loading) {
        return <p>読み込み中...</p>;
    }

    if (isLoggedIn) {
        return navigate('/');
    }

    const handleClick = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        axios.post('http://localhost:3001/api/login', { email, password })
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    //userをcontextに保存
                    setUser(response.data.user);
                    navigate('/');
                }else{
                    navigate('/login');
                }
            })
            .catch(error => {
                console.log(error);
                navigate('/500');
            });
        

    }

    return (
        <form onSubmit={(e) => handleClick(e)}>
            <label htmlFor="email">メールアドレス</label>
            <input type="email" id="email" name='email'/>
            <label htmlFor="password">パスワード</label>
            <input type="password" id="password" name='password' />
            <button type="submit">ログイン</button>
        </form>
    );
};

export default Login;
