import { useNavigate } from "react-router-dom";
import "../styles/ComposeButton.css";

function ComposeButton()
{
    const navigate = useNavigate();

    return (
        <button
            className="compose-btn"
            onClick={() => navigate("/compose")}
        >
            + Compose
        </button>
    );
}

export default ComposeButton;