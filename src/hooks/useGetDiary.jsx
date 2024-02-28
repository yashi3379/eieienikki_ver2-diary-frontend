import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const useGetDiary = () => {
    const navigate = useNavigate();
    const getDiary = async (id) => {
        console.log(id);
        try {
            const res = await axios.get(`http://localhost:3001/api/getDiary/${id}`);
            console.log(res.data);
            return res.data.diary;
        } catch (error) {
            console.error(error);
            navigate("/500");
        }
    };
    return { getDiary };
}
