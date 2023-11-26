import { Link } from "react-router-dom";


const NavBar = () => {
    const navOption = <>
        <li><Link to='/' className="text-xl">Home</Link></li>
        <li><Link to='property' className="text-xl">All Properties</Link></li>
        <li><a>Dashboard</a></li>
    </>
    return (
        <div className="navbar fixed bg-opacity-40 max-w-screen-xl z-20 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOption}
                    </ul>
                </div>
                <div className="text-center">
                <img className="w-44" src="https://i.ibb.co/55F6yKW/images.png" alt="" />
                <h2 className="text-xl font-semibold italic text-lime-500">JCX Industries</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default NavBar;