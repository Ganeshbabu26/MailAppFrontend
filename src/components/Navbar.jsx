import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css"

export default function Navbar(){

    const navigate = useNavigate();

    return(

        <div className="navbar">

            <BsThreeDotsVertical
                size={25}
                className="three-dot"
                onClick={() => navigate("/options")}
            />

        </div>
    );
}