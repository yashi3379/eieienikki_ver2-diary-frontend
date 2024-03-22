import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import toplogo from "../../images/topLogo_ver3.png";

export const Header = () => {
    const navigate = useNavigate();
    const { setUser,user } = useContext(AuthContext);
    const logout = async () => {
        try {
            await axios.post("http://localhost:3001/api/logout")
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    //userをcontextに保存
                    setUser(null);
                    navigate("/login");
                } else {
                    navigate("/500");
                }
            })
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <header className="bg-yellow-300 px-2 flex justify-between items-center ">
            
            <img src={toplogo} alt="toplogo" className="image-style" />
            {user ? (
                <button onClick={logout} className="delite-button">
                    ログアウト
                </button>
            ) : (
                <div>
                    <button onClick={() => navigate("/login")} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mr-2">
                        ログイン
                    </button>
                    <button onClick={() => navigate("/register")} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">
                        新規登録
                    </button>
                </div>
            )}
            
        </header>
    );
    };