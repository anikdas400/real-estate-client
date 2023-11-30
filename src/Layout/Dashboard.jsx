import { FaBookmark,FaBuilding, FaCalendar, FaHome, FaList, FaPhone, FaRev, FaShoppingCart, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { BsFillBuildingsFill } from "react-icons/bs";
// import {  } from "react-icons/fa";
import useCart from "../hook/useCart";
import useAdmin from "../hook/useAdmin";
import useAgent from "../hook/useAgent";


const Dashboard = () => {
    const [cart] = useCart()
    const [isAdmin] = useAdmin()
    const [isAgent] = useAgent()
    
    return (
        <div className="flex">
            {/* isAdmin dashboard side bar */}
            <div className="w-64 min-h-screen bg-emerald-300 p-4">
                <div className="ml-6">
                    <h2 className="text-xl font-bold text-yellow-300">JCX</h2>
                    <h3 className="text-lg font-semibold">Real Estate Industries</h3>
                </div>
                <ul className="menu">
                    {
                        isAdmin ? <>
                        {/* Admin dashboard */}
                        <li>
                        <NavLink to='/dashboard/adminHome'><FaHome></FaHome> Admin Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addProperty'><FaBuilding /> Add Property</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageProperty'><BsFillBuildingsFill /> Manage Properties</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/Bookings'><FaRev></FaRev>Manage Bookings</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/users'><FaUsers></FaUsers> Manage Users</NavLink>
                    </li>
                    
                        </> 
                        :
                        <>
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
                        </> &&
                        isAgent ?<>
                        {/* Agent dashboard */}
                        <li>
                        <NavLink to='/dashboard/AgentHome'><FaHome></FaHome> Agent Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addProperty'><FaBuilding />Add Property</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageProperty'><BsFillBuildingsFill /> My Added Properties</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/Bookings'><FaRev></FaRev>Manage Bookings</NavLink>
                    </li>
                    
                        </>:<>
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
                        </>

                    }

                    {/* shared navlink */}
                    <div className="divider divider-info">OR</div>

                    <li>
                        <NavLink to='/dashboard/userHome'><FaHome></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/userHome'><FaPhone></FaPhone> Contact</NavLink>
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