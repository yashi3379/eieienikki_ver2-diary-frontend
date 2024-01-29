import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { AuthContext } from '../../providers/AuthProvider';



const CreateDiary = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onCreateDiary = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.content.value;
        const userId = user._id;
        axios.post('http://localhost:3001/api/CreateDiary', { userId, title,content })
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    navigate('/');
                }else{
                    navigate('/create');
                }
            })
            .catch(error => {
                console.log(error);
                navigate('/500');
            });
        

    }
    
    return (
        <div>
            <h1>日記作成</h1>
            <p>ユーザー名：{user.username}</p>
            <form onSubmit={(e) => onCreateDiary(e)}>
                <label htmlFor="title">タイトル</label>
                <input type="text" id="title" name='title' minLength={5} />
                <label htmlFor="content">内容</label>
                <textarea name="content" id="content" cols="50" rows="4"
                minLength={20} maxLength={200} required></textarea>
                <button type="submit">日記を追加する!</button>
            </form>
        </div>
    );
}

export default CreateDiary;