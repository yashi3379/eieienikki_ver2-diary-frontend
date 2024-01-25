// Login.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


import axios from 'axios';

//バックエンド側の処理
// app.post('/api/login', passport.authenticate('local'),async (req, res) => {
//     res.status(200).json({ message: "ログイン成功", user: req.user });
// });

const Login = () => {
    const navigate = useNavigate();
    const { setUser,setIsLoggedIn } = useContext(AuthContext);



    const handleClick = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        axios.post('http://localhost:3001/api/login', { username, password })
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    //userをcontextに保存
                    console.log(response.data);
                    setUser(response.data.user);
                    setIsLoggedIn(true);
                    navigate('/');
                } else {
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
            <label htmlFor="username">ユーザーネーム</label>
            <input type="text" id="username" name='username' />
            <label htmlFor="password">パスワード</label>
            <input type="password" id="password" name='password' />
            <button type="submit">ログイン</button>
        </form>
    );
};

export default Login;
