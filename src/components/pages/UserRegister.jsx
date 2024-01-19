import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const UserRegister = ()=> {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setUseremail] = useState('');

    const navigate = useNavigate();
  
    const handleRegister = async () => {
      try {
        const response = await axios.post('http://localhost:3001/api/register', { username,email,password });
        const user = response.data;
        console.log(user);
        //ユーザー登録後の処理
        navigate('/', { state: { user } }); // ページに移動し、ユーザー情報を渡す
      } catch (error) {
        if (error.response) {
            // サーバーがエラーレスポンスを返した場合
            console.log(error.response.data);
            console.log(error.response.status);
          } else if (error.request) {
            // リクエストが送信されたが、レスポンスがない場合
            console.log(error.request);
          } else {
            // リクエストを送信する前に発生したエラー
            console.log('Error', error.message);
          }
          console.log(error.config);
      }
    };
  
    return (
      <div>
        <h2>Register</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setUseremail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleRegister}>Register</button>
      </div>
    );
  }