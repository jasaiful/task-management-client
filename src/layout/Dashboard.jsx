import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {

    return (
        <div className="flex my-5">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen rounded-2xl border-gray-400 border-r-8 rounded-r-3xl bg-teal-100">
                <ul className="menu p-4">
                    <h2>Julfiker Ali</h2>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/dashboard/userHome" className="font-semibold">
                            <FaHome /> User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addTask" className="font-semibold">
                            <FaHome /> Add a New Task
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/" className="font-semibold">
                            <FaHome /> Home
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
//     return (
//         <div>
//             <h2>This is DashBoard</h2>
//             <Link to={"/dashboard/addTask"}> <button className="btn bg-teal-600 text-white">Add New Task</button> </Link>
//         </div>
//     );
// };