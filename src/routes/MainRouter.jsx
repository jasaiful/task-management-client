import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SignUP from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/signUp",
                element: <SignUP></SignUP>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
        ]
    }
])

export default MainRouter;