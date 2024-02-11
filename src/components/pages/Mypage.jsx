// MyPage.jsx
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../providers/AuthProvider';
import { useGetAllDiaries } from '../../hooks/useGetAllDiaries';
import { Card } from '../atoms/Card';


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
        <div className='custom-bg w-full min-h-screen'>
            <div className='container mx-auto p-4'>
                <h2 className="text-2xl font-bold my-4">Hello, {user.username}!</h2>
                <div className="w-full">
                    <Link to="/create" className="text-lg text-blue-500 hover:text-blue-700 underline mb-4">日記を作成する</Link>
                    {/* <div className="md:grid md:grid-cols-1"> */}
                    {diaries.length > 0 ? (
                        diaries.map((diary) => (
                            <Card key={diary._id}>
                                <div className="block md:grid md:grid-cols-3 md:gap-4 p-4">
                                    <div className='pb-3 md:border-r md:pb-0'>
                                        <h3 className="text-lg font-semibold">{diary.title}</h3>
                                        <p className="text-gray-700 line-clamp-3 md:line-clamp-6">{diary.content}</p>
                                    </div>
                                    <div className="sm:border-y md:border-none md:px-4">
                                        <h3 className="text-md font-semibold">{diary.translate.title}</h3>
                                        <p className="text-gray-600 line-clamp-3 md:line-clamp-6 ">{diary.translate.content}</p>
                                    </div>
                                    <div className="py-4 md:p-0 md:border-l ">
                                        <img src={diary.image.cloudinaryURL} alt='自動生成された日記の画像' className="w-full h-auto " />
                                    </div>
                                </div>
                            </Card>
                        ))
                    ) : (
                        <p className=''>日記がまだありません</p>
                    )}
                </div>
            </div>
        </div >
    );
};

export default MyPage;
