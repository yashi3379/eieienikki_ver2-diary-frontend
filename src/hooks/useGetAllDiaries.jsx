import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const useGetAllDiaries = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const userId = user._id;
    const getAllDiaries = async () => {
        try {
            const res = await axios.get(`http://localhost:3001/api/getDiary?userId=${userId}`);
            console.log(res.data);
            return res.data.diaries;  
        } catch (error) {
            console.error(error);
            navigate("/500");
        }
    };
    return {getAllDiaries};
}
