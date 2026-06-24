import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ComposeButton from "../components/ComposeButton";
import DashboardHeader from "../components/DashboardHeader";
import Navbar from "../components/Navbar";
import { useState } from "react";

function DashboardLayout()
{
    const [open,setOpen] = useState(false);

    return (
        <>
            <DashboardHeader setOpen={setOpen}/>
            <Sidebar
                open={open}
                setOpen={setOpen}
            />


            <ComposeButton/>

            <div className={`content ${open ? "shift" : ""}`}>
                <Outlet/>
            </div>
        </>
    );
}

export default DashboardLayout;