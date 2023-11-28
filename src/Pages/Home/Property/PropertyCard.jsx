
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useCart from "../../../hook/useCart";


const PropertyCard = ({ item }) => {
    const { name, recipe, image, price, _id, category } = item
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()
    const handleAddToWishlist = () => {
        if (user && user.email) {
            // console.log(home)
            const cartItem = {
                homeId: _id,
                email: user.enail,
                name,
                image,
                price
            }
            axiosSecure.post('/wishs', cartItem)
                .then(res => {
                    console.log(res.data)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} Added to Your Wishlist`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // refetch the chart
                    refetch()
                })
        }
        else {
            Swal.fire({
                title: "please login to add to this home?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    //   });
                    navigate('/login', { state: { from: location } })

                }
            });
        }

    }
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h3>category: {category}</h3>
                    <p>Location: {recipe}</p>

                    {/* card-actions justify-center */}
                    <div className="flex justify-evenly">
                        <h4 className="text-lg">Price:$ {price}</h4>
                        <Link>
                            <button className="btn bg-gradient-to-r from-purple-500 to-pink-500">Details</button>
                        </Link>


                    </div>
                    <button onClick={handleAddToWishlist} className="btn btn-success text-lg border-0 border-b-4">Add to Wishlist</button>

                </div>
            </div>
        </div>
    );
};

export default PropertyCard;