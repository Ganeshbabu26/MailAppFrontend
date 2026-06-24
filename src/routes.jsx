import {BrowserRouter,Routes,Route}
from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FrontPage from "./pages/FrontPage";

export default function AppRoutes()
{
    return(
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<FrontPage/>}
                />
                <Route
                    path="/login"
                    element={<LoginPage/>}
                />

                <Route
                    path="/register"
                    element={<RegisterPage/>}
                />

            </Routes>

        </BrowserRouter>
    );
}