import { Link, NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

// Imported the new clean line-art icons alongside your existing menu icons
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { LuInbox, LuSend, LuStar, LuTrash2, LuFileText } from "react-icons/lu";

function Sidebar({ open, setOpen }) {
    return (
        <>
            {/* Fixed hamburger button */}
            <button
                className="menu-btn-fixed"
                onClick={() => setOpen(!open)}
            >
                {open ? (
                    <IoClose size={30} />
                ) : (
                    <HiOutlineMenu size={30} />
                )}
            </button>

            <div className={`sidebar ${open ? "open" : "closed"}`}>
                <ul>
                    <li>
                        <LuInbox size={30} className="logo-icon" />
                        <NavLink to="/dashboard/inbox" onClick={() => setOpen(false)}>Inbox</NavLink>
                    </li>
                    <li>
                        <LuSend size={30} className="logo-icon" />
                        <NavLink to="/dashboard/sent" onClick={() => setOpen(false)}>Sent</NavLink>
                    </li>
                    <li>
                        <LuStar size={30} className="logo-icon" />
                        <NavLink to="/dashboard/starred" onClick={() => setOpen(false)}>Starred</NavLink>
                    </li>
                    <li>
                        <LuTrash2 size={30} className="logo-icon" />
                        <NavLink to="/dashboard/trash" onClick={() => setOpen(false)}>Trash</NavLink>
                    </li>
                    <li>
                        <LuFileText size={30} className="logo-icon" />
                        <NavLink to="/dashboard/draft" onClick={() => setOpen(false)}>Draft</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;