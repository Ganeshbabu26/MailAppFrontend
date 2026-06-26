import { useNavigate } from "react-router-dom";
import "../styles/ProfilePage.css";

import {
    IoArrowBack,
    IoPersonCircle
} from "react-icons/io5";

export default function ProfilePage()
{
    const navigate = useNavigate();

    const email =
        localStorage.getItem("email");

    function handleLogout()
    {
        localStorage.removeItem("email");
        localStorage.removeItem("token");

        navigate("/");
    }

    return (
        <div className="profile-page">

            <IoArrowBack
                className="back-btn"
                size={28}
                onClick={() => navigate(-1)}
            />

            <div className="profile-card">

                <IoPersonCircle
                    className="profile-avatar"
                    size={120}
                />

                <h2>
                    My Profile
                </h2>

                <div className="profile-info">

                    <div className="info-box">
                        <span className="label">
                            Email
                        </span>

                        <span className="value">
                            {email}
                        </span>
                    </div>

                    <div className="info-box">
                        <span className="label">
                            Account Type
                        </span>

                        <span className="value">
                            Standard User
                        </span>
                    </div>

                    <div className="info-box">
                        <span className="label">
                            Status
                        </span>

                        <span className="status">
                            Active
                        </span>
                    </div>

                </div>

                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

        </div>
    );
}