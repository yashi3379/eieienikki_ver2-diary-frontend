import React from 'react';
import { Link } from 'react-router-dom';

export const ServerError = () => {
    return (
    
            <div >
                <h2>500エラー</h2>
                <p>大変申し訳ございません。サーバーエラーが発生しました。</p>
                <Link to="/login">ログイン画面へ戻る</Link>
            </div>
    );
}

