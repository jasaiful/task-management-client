import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer mt-5 footer-center p-10 bg-base-200">
            <aside>
                <Link to='/'><img className="rounded-xl" src={logo} alt="" /></Link>
                <header className="text-4xl font-bold">Task Vista</header>
                <p className="italic">Providing reliable job placement services since 2019</p>
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