import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="w-full">
            <div className="relative hero w-full">
                <img className="w-full max-h-screen" src="https://i.ibb.co/MZYLNwr/image.png" alt="img" />
                <div className="absolute rounded-xl flex items-center justify-end h-full hero-overlay bg-opacity-60 ">
                    <div className="text-white space text-right pr-6">
                        <h1 className="text-4xl font-extrabold mb-4">Task Vista</h1>
                        <p className="text-lg mb-6">Simplify Your Task, Achieve More!</p>
                        <Link> <button className="btn btn-secondary">Let's Explore</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;