import { FaHome, FaTasks } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import ToDo from "../pages/Dashboard/toDo";
import OnGoing from "../pages/Dashboard/onGoing";
import CompletedTasks from "../pages/Dashboard/CompletedTasks";



const Dashboard = () => {
    const { user } = useAuth();
    return (
        <div className="flex my-5">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen rounded-2xl border-gray-400 border-r-8 rounded-r-3xl bg-teal-100">
                <ul className="menu p-4">
                    <h2 className="text-2xl">Hi, <br /> Welcome! <span className='font-bold'> <br />
                        {user?.photoURL && (
                            <img src={user.photoURL} alt="User" className="w-32 h-32 rounded-3xl" />
                        )}
                        {
                            user?.displayName ? user.displayName : 'Back'
                        }
                    </span>
                    </h2>
                    <div className="divider"></div>
                    <li>
                        <Link to="/dashboard" className="font-semibold">Dashboard</Link></li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/" className="font-semibold">
                            <FaHome /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addTask" className="font-semibold">
                            <FaTasks /> Add a New Task
                        </NavLink>
                    </li>

                </ul>
            </div>
            {/* dashboard content */}
           <div className="md:flex">
           <dir className="w-64 p-2 text-center mx-10 max-h-fit rounded-2xl bg-yellow-100">
                <ToDo></ToDo>
            </dir>
            <dir className="w-64 p-2 text-center mx-10 max-h-fit rounded-2xl bg-pink-100">
                <OnGoing></OnGoing>
            </dir>
            <dir className="w-64 p-2 text-center mx-10 max-h-fit rounded-2xl bg-green-100">
                <CompletedTasks></CompletedTasks>
            </dir>
            <div className="flex-1 p-8">
                <Outlet />
            </div>
           </div>
        </div>
    );
};

export default Dashboard;