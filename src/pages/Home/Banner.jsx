import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="w-full my-5">
            <div className="relative hero w-full">
                <img className="w-full max-h-screen" src="https://i.ibb.co/MZYLNwr/image.png" alt="img" />
                <div className="absolute rounded-xl flex items-center justify-end h-full hero-overlay bg-opacity-50 ">
                    <div className="text-white space text-right pr-6">
                        <h1 className="text-6xl font-extrabold mb-4">Task Vista</h1>
                        <p className="text-xl font-semibold">Simplify Your Task, Achieve More!</p>
                        <p className="italic text-2xl my-5">a creation of <span className="font-bold">SCC Technovision Inc.</span> </p>
                        <Link to={"/login"}> <button className="btn  bg-teal-600 text-white">Let's Explore</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;