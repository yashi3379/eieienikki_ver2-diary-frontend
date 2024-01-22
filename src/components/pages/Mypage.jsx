// MyPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCheckSession from '../../hooks/useCheckSession';

const MyPage = () => {
    const { isLoggedIn, loading, user } = useCheckSession();
    const navigate = useNavigate();
    if (loading) {
        return <p>読み込み中...</p>;
    }

    if (!isLoggedIn) {
        return navigate('/login');
    }

    return (
        <div>
            <h1>マイページ</h1>
            <p>ようこそ、{user.name}さん</p>
        </div>
    );
};

export default MyPage;
