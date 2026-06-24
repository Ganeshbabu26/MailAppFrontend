import "../styles/DashboardHeader.css";
import OptionsMenu from "../pages/Options";

function DashboardHeader({setOpen})
{
    return (
        <div className="dashboard-header">

            <button
                className={`menu-btn-fixed ${open ? 'open' : ''}`}
                onClick={() => setOpen(!open)}
                aria-label="Toggle Menu"
                >
                <span></span>
                <span></span>
                <span></span>
            </button>


            <h2>MyMail</h2>
            <OptionsMenu/>
        </div>
    );
}

export default DashboardHeader;