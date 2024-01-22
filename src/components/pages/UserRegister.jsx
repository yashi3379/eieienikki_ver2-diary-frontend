// UserRegister.jsx
import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../providers/UserProvider';
import useCheckSession from '../../hooks/useCheckSession';
import axios from 'axios';

//バックエンド側の処理
// app.post('/api/register', async (req, res) => {
//   try {
//       const { email, password } = req.body;
//       const newUser = new User({ email });
//       const registeredUser = await User.register(newUser, password);
//       req.login(registeredUser, err => {
//           if (err) return res.status(500).json({ message: "ログインエラー" });
//           res.status(200).json({ message: "登録成功", user: req.user });
//       });
//   } catch (e) {
//       res.status(400).json({ message: e.message });
//   }
// }
// );

const UserRegister = () => {
    const { isLoggedIn, loading } = useCheckSession();
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate(); 

    if (loading) {
        return <p>読み込み中...</p>;
    }

    if (isLoggedIn) {
        return navigate('/');
    }

    const handleClick = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        axios.post('http://localhost:3001/api/register', { username,email, password })
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    //userをcontextに保存
                   setUser(response.data.user);
                    navigate('/');
                }else{
                    navigate('/register');
                }
            })
            .catch(error => {
                console.log(error);
                navigate('/500');
            });
        

    }

    return (
        <form onSubmit={(e) => handleClick(e)}>
            <label htmlFor="username">ユーザ名</label>
            <input type="text" id="username" name='username'/>
            <label htmlFor="email">メールアドレス</label>
            <input type="email" id="email" name='email'/>
            <label htmlFor="password">パスワード</label>
            <input type="password" id="password" name='password' />
            <button type="submit">登録</button>
        </form>
    );
};

export default UserRegister;
