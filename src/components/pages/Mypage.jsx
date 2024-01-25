// MyPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCheckSession from '../../hooks/useCheckSession';
import { useEffect } from 'react';




const MyPage = () => {
    const navigate = useNavigate();
    const { user, isLoggedIn } = useCheckSession();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    // user が undefined の場合をチェック
    if (!user) {
        return <p>読み込み中</p>;
    }
    


    return (
        <div>
            <h1>マイページ</h1>
            <p>ようこそ、{user.username}さん</p>
        </div>
    );
};

export default MyPage;
