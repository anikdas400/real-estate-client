import { FaShoppingCart } from "react-icons/fa";
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
                    <h2 className="text-xl font-bold">JCX</h2>
                    <h3 className="text-lg font-semibold">Real Estate Industries</h3>
                </div>
                <ul className="menu">
                <li>
                        <NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart> My Cart ({cart.length})</NavLink>
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