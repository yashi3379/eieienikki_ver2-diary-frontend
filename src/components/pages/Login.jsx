import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();


    const handleLogin = async () => {
    
        try {
            const response = await axios.post('http://localhost:3001/api/login', { email, password });
            console.log(response);
            const user = response.data;
            // ログイン後の処理
            navigate('/', { state: { user } }); // / ページに移動し、ユーザー情報を渡す
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );


}