import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


export const Mypage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state ? location.state.user : null;
    const [content, setContent] = useState('');
    const [diaryEntries, setDiaryEntries] = useState([]);
    const [logedIn, setLogedIn] = useState(false);

    console.log(user);

    const handlePostDiary = async () => {
        try {
            await axios.post('http://localhost:3001/api/diary', { content });
            // 日記を投稿した後に必要な処理を追加
            // 例: データを再取得して表示する
            fetchDiaryEntries();
        } catch (err) {
            console.error(err);
        }
    };

    const fetchDiaryEntries = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/diary');
            const diaryEntries = response.data;
            if (diaryEntries.length > 0) {
                setDiaryEntries(diaryEntries);        
            } else {
                setDiaryEntries([]);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const IsLogedIn = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/check-session');
            const data = response.data;
            if (data.loggedIn === true) {
                setLogedIn(true);
            } else {
                setLogedIn(false);
                navigate('/login');
            }
            //loggedInとusernameとemailが帰ってくる
        } catch (err) {
            console.error(err);
            navigate('/500');
        }
    }



useEffect(() => {
    // コンポーネントがマウントされた時に一度だけ実行
    IsLogedIn();
    fetchDiaryEntries();
    console.log('useEffectされました');
    console.log(user);
}, []); // 空の依存配列を指定して、コンポーネントがマウントされた時に一度だけ実行

return (
    <div>
        <h1>Yeah！英絵日記</h1>
        <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        <button onClick={handlePostDiary}>投稿する</button>

        <h2>日記一覧</h2>
        <ul>
            {diaryEntries.map((entry) => (
                <li key={entry._id}>{entry.content}</li>
            ))}
        </ul>
    </div>
);
}


