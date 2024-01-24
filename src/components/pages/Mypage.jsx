// MyPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCheckSession from '../../hooks/useCheckSession';




const MyPage = () => {
    const navigate = useNavigate();
    const { user, isLoggedIn} = useCheckSession();


    if (!isLoggedIn) {
        return navigate('/login');
    }
    return (
        <div>
            <h1>マイページ</h1>
            <p>ようこそ、{user.username}さん</p>
        </div>
    );
};

export default MyPage;
