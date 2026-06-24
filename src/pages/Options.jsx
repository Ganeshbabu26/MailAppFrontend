import { useState, useRef, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
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

    function handleLogout() {

        localStorage.removeItem("email");

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

                    <div className="menu-item">
                        👤 Profile
                    </div>

                    <div className="menu-item">
                        ⚙️ Settings
                    </div>

                    <div className="menu-item">
                        🌙 Dark Mode
                    </div>

                    <div
                        className="menu-item logout"
                        onClick={handleLogout}
                    >
                        🚪 Logout
                    </div>

                </div>
            )}

        </div>
    );
}