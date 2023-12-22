import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer mt-5 border-gray-400 border-t-8 rounded-t-3xl footer-center p-10 bg-teal-100">
            <aside>
                <Link to='/'><img className="rounded-xl" src={logo} alt="" /></Link>
                <header className="text-4xl font-bold">Task Vista</header>
                <p className="italic text-xl">a creation of <span className="font-bold text-pink-600">SCC Technovision Inc.</span> </p>
                <p>
                    House: 48, Road: 11/A, Dhanmondi, Dhaka-1209
                </p>
                <br />
                <p>Copyright © 2019 - All right reserved</p>
            </aside>
            <nav>
                <div className="grid text-3xl grid-flow-col gap-4">
                    <Link to="https://www.linkedin.com" className="text-blue-800"><FaLinkedin /></Link>
                    <Link to="https://www.facebook.com" className="text-blue-900"><FaFacebook /></Link>
                    <Link to="https://twitter.com"><FaTwitter className="text-blue-500"></FaTwitter></Link>
                    <Link to="https://www.youtube.com/"><FaYoutube className="text-red-500"></FaYoutube></Link>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;