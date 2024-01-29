// MyPage.jsx
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../providers/AuthProvider';
import { useGetAllDiaries } from '../../hooks/useGetAllDiaries';


const MyPage = () => {
    const { user } = useContext(AuthContext);
    const [diaries, setDiaries] = useState([]);
    const { getAllDiaries } = useGetAllDiaries();
    useEffect(() => {
        const fetchDiaries = async () => {
            const diaries = await getAllDiaries();
            setDiaries(diaries);
        };
        fetchDiaries();// eslint-disable-next-line
    }, []);


    return (
        <div>
            <h1>マイページ</h1>
            <p>ユーザー名：{user.username}</p>
            <Link to="/create">日記を作成する</Link>
            <h2>日記一覧</h2>
            {diaries.length > 0 ? (
                diaries.map((diary) => (
                    <div key={diary._id}>
                        <h3>{diary.title}</h3>
                        <h3>{diary.translate.title}</h3>
                        <p>{diary.content}</p>
                        <p>{diary.translate.content}</p>
                        <img src={diary.image.cloudinaryURL} alt='自動生成された日記の画像' />
                    </div>
                ))
            ) : (
                <p>日記がありません</p>
            )}
        </div>
    );
};

export default MyPage;
