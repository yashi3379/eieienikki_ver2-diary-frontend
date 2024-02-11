import React, { useContext } from 'react';
import { useNavigate,useLocation, Link } from 'react-router-dom';
import axios from 'axios';

import { AuthContext } from '../../providers/AuthProvider';





const CreateDiary = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const message = location.state ? location.state.message : null;

    const onCreateDiary = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.content.value;
        const userId = user._id;
        axios.post('http://localhost:3001/api/CreateDiary', { userId, title, content })
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    navigate('/');
                } else {
                    navigate('/create');
                }
            })
            .catch(error => {
                if (error.response.status === 401) {
                    navigate('/create', { state: { message: '日記の作成に失敗しました' } });
                    return;
                }
                console.log(error);
                navigate('/500');

            });


    }

    return (
        <div className='custom-bg w-full min-h-screen'>
            <h1 className="text-3xl font-bold mb-4 text-center mt-3">日記作成</h1>
            <h2 className="text-2xl font-bold my-4 text-center">Hello, {user.username}!</h2>
            <form onSubmit={(e) => onCreateDiary(e)} className="form-container">
                {message && <p className="form-message">{message}</p>}
                <div className='mb-4'>
                    <label htmlFor="title" className='form-label'>タイトル</label>
                    <input type="text" id="title" name='title' minLength={5} className='form-input'/>

                </div>
                <div mb-4>
                    <label htmlFor="content" className='form-label'>内容</label>
                    <textarea name="content" id="content" cols="50" rows="4"
                        minLength={20} maxLength={200} required className='form-textarea'></textarea>
                </div>

                <button type="submit" className="form-button">日記を追加する!</button>
            </form>
            <Link to="/" className="text-lg text-blue-500 hover:text-blue-700 underline mb-4 text-center block w-full">Mypageに戻る</Link>
        </div>
    );
}

export default CreateDiary;