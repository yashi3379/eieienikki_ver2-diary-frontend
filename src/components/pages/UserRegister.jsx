// UserRegister.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';

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
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleClick = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    axios.post('http://localhost:3001/api/register', { username, email, password })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          //userをcontextに保存
          setUser(response.data.user);
          navigate('/');
        } else {
          navigate('/register');
        }
      })
      .catch(error => {
        console.log(error);
        navigate('/500');
      });


  }

  return (
    <div className='custom-bg w-full min-h-screen'>
      <form onSubmit={(e) => handleClick(e)} className="form-container">
        <div className="mb-4">
          <label htmlFor="username" className="form-label">ユーザ名</label>
          <input type="text" id="username" name='username' className="form-input" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="form-label">メールアドレス</label>
          <input type="email" id="email" name='email' className="form-input" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="form-label">パスワード</label>
          <input type="password" id="password" name='password' className="form-input" />
        </div>
        <button type="submit" className="form-button">登録</button>
      </form>
    </div>
  );
};

export default UserRegister;
