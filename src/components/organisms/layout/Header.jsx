import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    const logout = async () => {
        try {
            await axios.post("http://localhost:3001/api/logout");
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <header className="header">
            <p>header 2024 Yeah!英絵日記</p>
            <button onClick={logout}>ログアウト</button>
        </header>
    );
    }