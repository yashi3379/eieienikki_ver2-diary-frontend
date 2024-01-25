// MyPage.jsx
import React,{useContext} from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const MyPage = () => {
    const { user } = useContext(AuthContext);
     
    return (
        <div>    
            <h1>マイページ</h1>
            <p>ユーザー名：{user.username}</p>
        </div>
    );
};

export default MyPage;
