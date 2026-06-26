import { useNavigate } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs"; // அல்லது BsPlusLg ஐப் பயன்படுத்தலாம்
import "../styles/ComposeButton.css";

function ComposeButton()
{
    const navigate = useNavigate();

    return (
        <button
            className="compose-btn"
            onClick={() => navigate("/compose")}
        >
            <BsPencilSquare className="compose-icon" />
        </button>
    );
}

export default ComposeButton;
