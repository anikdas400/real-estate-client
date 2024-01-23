
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useCart from "../../../hook/useCart";


const PropertyCard = ({ item }) => {
    const { name, recipe, image, price, _id, category,} = item
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()
    const handleAddToWishlist = food => {
        if (user && user.email) {
            console.log(food, user.email)
            // console.log(home)
            const cartItem = {
                homeId: _id,
                email: user.email,
                name,
                image,
                price,
                
            }
            console.log(user.email)
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${category} Added to Your Wishlist`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch the chart
                        refetch()
                    }
                    
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
        <div className="">
            <div className="card card-compact cursor-pointer group  bg-base-100 shadow-xl h-[550px]">
                <figure className=" overflow-hidden hover:rounded-tr-3xl hover:rounded-bl-3xl"><img className=" h-full w-full object-cover rounded-tl-3xl rounded-br-3xl group-hover:scale-105 transition" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h3 className="card-title">Title: {category}</h3>
                    <div className="flex gap-2">
                    <h2 className="text-lg">Agent: <span className="text-teal-600">{name}</span></h2>
                    <p className="text-lg">Location: <span className="text-lime-600">{item.location}</span> </p>
                    </div>
                    
                    <p className="text-base"> <span className="font-semibold">Description:</span>{recipe}</p>

                    {/* card-actions justify-center */}
                    <div className="flex justify-evenly">
                        <h4 className="text-lg">Price: $<span className="text-sky-500 font-semibold">{price}</span> </h4>
                        <Link>
                            <button className="btn bg-gradient-to-r from-purple-500 to-pink-500">Details</button>
                        </Link>


                    </div>
                    
                    <button onClick={() => handleAddToWishlist()} className="btn btn-success text-lg border-0 border-b-4">Add to Wishlist</button>

                    
                    

                </div>
            </div>
        </div>
    );
};

export default PropertyCard;