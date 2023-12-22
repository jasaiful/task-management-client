import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SignUP from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import AddNewTask from "../pages/Dashboard/AddNewTask";
import Dashboard from "../layout/Dashboard";
import UserHome from "../pages/Dashboard/UserHome";

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
            }
        ]
    },

    {
        path: "/dashboard",
        element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
        children: [
            {
                path: "userHome",
                element: <UserHome></UserHome>
            },
            {
                path: "addTask",
                element: <AddNewTask></AddNewTask>
            }
        ]
    },

])

export default MainRouter;