// Login.jsx
import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';



import axios from 'axios';

//バックエンド側の処理
// app.post('/api/login', passport.authenticate('local'),async (req, res) => {
//     res.status(200).json({ message: "ログイン成功", user: req.user });
// });

const Login = () => {
    const location = useLocation();
    const message = location.state ? location.state.message : null;
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);



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
                    navigate('/');
                } else {
                    navigate('/login');
                }
            })
            .catch(error => {
                if (error.response.status === 401) {
                    navigate('/login', { state: { message: 'ユーザー名またはパスワードが違います' } });
                    return;
                }
                console.log(error);
                navigate('/500');
            });


    }

    return (
        <div className='custom-bg w-full min-h-screen'>
            <div className='flex flex-col items-center justify-center mx-aut'>
                <h1 className="text-3xl font-bold mb-4">ログイン</h1>
                <form onSubmit={(e) => handleClick(e)} className="form-container">
                    {message && <p className="form-message">{message}</p>}
                    <div className="mb-4">
                        <label htmlFor="username" className="form-label">ユーザーネーム</label>
                        <input type="text" id="username" name='username' className="form-input" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="form-label">パスワード</label>
                        <input type="password" id="password" name='password' className="form-input" />
                    </div>
                    <button type="submit" className="form-button">ログイン</button>
                </form>
                <Link to="/register" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">新規登録はこちら</Link>
            </div>
        </div>

    );
};

export default Login;
