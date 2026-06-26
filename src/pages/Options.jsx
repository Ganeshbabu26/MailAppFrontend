import { useState, useRef, useEffect } from "react";
import { 
    BsThreeDotsVertical, 
    BsPerson,       // Profile ஐகான்
    BsGear,         // Settings ஐகான்
    BsMoon,         // Dark Mode ஐகான்
    BsBoxArrowRight // Logout ஐகான்
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../styles/Options.css";

export default function OptionsMenu() {

    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {

        function handleClickOutside(event) {

            if (
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setOpen(false);
            }

        }

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

    }, []);

    function handleLogout() 
    {

        localStorage.removeItem("email");
        localStorage.removeItem("token");

        navigate("/");
    }

    return (
        <div className="menu-container" ref={menuRef}>

            <BsThreeDotsVertical
                className="three-dot"
                onClick={() => setOpen(!open)}
            />

            {open && (
                <div className="menu">

                    <div
                        className="menu-item"
                        onClick={() => navigate("/profile")}
                    >
                        <BsPerson className="menu-icon" /> Profile
                    </div>

                    <div className="menu-item">
                        <BsGear className="menu-icon" /> Settings
                    </div>

                    <div className="menu-item">
                        <BsMoon className="menu-icon" /> Dark Mode
                    </div>

                    <div
                        className="menu-item logout"
                        onClick={handleLogout}
                    >
                        <BsBoxArrowRight className="menu-icon" /> Logout
                    </div>

                </div>
            )}

        </div>
    );
}
