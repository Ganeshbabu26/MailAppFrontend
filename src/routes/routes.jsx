import {BrowserRouter,Routes,Route}
from "react-router-dom";
import { Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import FrontPage from "../pages/FrontPage";
import DashboardLayout from "../layouts/DashboardLayout";
import InboxPage from "../pages/Dashboard/InboxPage";
import SentPage from "../pages/Dashboard/SentPage"
import TrashPage from "../pages/Dashboard/TrashPage";
import StarredPage from "../pages/Dashboard/StarredPage";
import ComposePage from "../pages/ComposePage";
import Sidebar from "../components/Sidebar";
import Options from "../pages/Options";
import Navbar from "../components/Navbar";
import OptionsMenu from "../pages/Options";
import PrivateRoute from "../components/PrivateRoute";
import MailPage from "../components/MailPage";
import DraftPage from "../pages/Dashboard/DraftPage";
import ProfilePage from "../pages/ProfilePage";

export default function AppRoutes()
{
    return(
        <BrowserRouter>

    <Routes>

        {/* <Route path="/" element={<FrontPage/>}/> */}


        <Route
            path="/"
            element={
            localStorage.getItem("email")
            ? <Navigate to="/dashboard/inbox" />
            : <FrontPage />
            }
        />

        <Route path="/login" element={<LoginPage/>}/>

        <Route path="/register" element={<RegisterPage/>}/>

        <Route path="/compose" element={<ComposePage/>}/>

        <Route path="/options" element={<Options/>}/>

        <Route path="/navbar" element={<Navbar/>}/>

        <Route path="/mail/:id" element={<MailPage/>}/>

        <Route path="/profile" element={<ProfilePage/>}/>

        <Route
            path="/dashboard"
            element={        
            <PrivateRoute>
                <DashboardLayout/>
            </PrivateRoute>
            }
        >
            <Route path="inbox" element={<InboxPage/>}/>
            <Route path="sent" element={<SentPage/>}/>
            <Route path="trash" element={<TrashPage/>}/>
            <Route path="starred" element={<StarredPage/>}/>
            <Route path="draft" element={<DraftPage />} />
            

        </Route>

    </Routes>

</BrowserRouter>
    );
}