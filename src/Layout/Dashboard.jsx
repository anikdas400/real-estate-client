import { FaBookmark, FaCalendar, FaHome, FaRev, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hook/useCart";


const Dashboard = () => {
    const [cart] = useCart()
    // const [isAdmin] = useAdmin()
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-emerald-300 p-4">
                <div className="ml-6">
                    <h2 className="text-xl font-bold text-yellow-300">JCX</h2>
                    <h3 className="text-lg font-semibold">Real Estate Industries</h3>
                </div>
                <ul className="menu">
                    <li>
                        <NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart>My Wishlist ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'><FaRev></FaRev>Add a Review</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'><FaBookmark></FaBookmark> My Bookings</NavLink>
                    </li>

                    <div className="divider divider-info">OR</div>

                    <li>
                        <NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home</NavLink>
                    </li>

                </ul>

            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8 bg-slate-400">

                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default Dashboard;