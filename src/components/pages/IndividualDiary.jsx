import { useState, useEffect } from 'react';
import { useGetDiary } from '../../hooks/useGetDiary';
import { useParams } from 'react-router-dom';   


const IndividualDiary = () => {
    const { id } = useParams();
    const {getDiary} = useGetDiary();
    const [diary, setDiary] = useState(null);
    useEffect(() => {
        const fetchDiary = async () => {
            const diary = await getDiary(id);
            setDiary(diary);
        };
        fetchDiary();
        // eslint-disable-next-line
    }, [id]);



    return (
        <div className='custom-bg w-full min-h-screen'>
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mt-8">日記詳細</h1>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold">{diary?.title}</h2>
                    <p className="mt-4">{diary?.content}</p>
                </div>
            </div>
        </div>
        
    );
    }
export default IndividualDiary;

