import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../provider/AuthProvider";

const NavBar = () => {
    const { user, userSignOut } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogOut = () => {
        userSignOut()
            .then(() => { })
            .catch(error => console.log(error));
            navigate('/')
    }

    const navItems = <>
        <li><Link to="/" className="hover:bg-white font-semibold">Home</Link></li>
        <li><Link to="/dashboard/addTask" className="hover:bg-white font-semibold">Add Tasks</Link></li>
        <li><Link to="/dashboard" className="hover:bg-white font-semibold">Dashboard</Link></li>
        <li><Link to="/signUp" className="hover:bg-white font-semibold">Sign up</Link></li>

       
    </>

    return (
        <>
            <div className="navbar w-full border-gray-400 border-b-8 rounded-b-3xl px-2 bg-teal-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu bg-teal-100 menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <img src={logo} alt="logo" />
                    <Link to="/" className="btn-ghost btn invisible md:visible text-2xl">Task Vista</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <button onClick={handleLogOut}>
                                <p> <span className="font-bold">Logged In:</span> {user?.email}</p>
                                <span className="btn btn-sm btn-outline">Logout</span>
                            </button>
                            : <Link to='/login'>
                                <button className="btn btn-sm btn-outline"> Login </button>
                            </Link>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;