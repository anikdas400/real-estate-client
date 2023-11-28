import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaHome } from "react-icons/fa";
import useCart from "../../hook/useCart";




const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
  const [cart]= useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }
    const navOption = <>
        <li><Link to='/' className="text-xl">Home</Link></li>
        <li><Link to='property' className="text-xl">All Properties</Link></li>
        <li><Link to='/dashbord' className="text-xl">Dashboard</Link></li>
        <li><Link to='/dashboard/cart' className="text-xl">
           
                Wishlist <FaHome></FaHome>
                <div className="badge badge-secondary">+{cart.length}</div>
            
        </Link></li>
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
                    <h2 className="text-xl font-semibold italic text-cyan-700">JCX Industries</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <span>{user?.displayName}</span>

                        <img className="w-12 h-12 rounded-full mr-3 ml-2" src={user?.photoURL} alt="" />
                        <button onClick={handleLogOut} className="btn btn-outline btn-secondary">LogOut</button>
                    </> : <>
                        <Link to='login' className="btn btn-primary font-semibold text-lg btn-outline">Login</Link>
                    </>
                }


            </div>
        </div>
    );
};

export default NavBar;