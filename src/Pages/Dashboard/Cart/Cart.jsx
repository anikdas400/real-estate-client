import useAxiosSecure from "../../../hook/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hook/useCart";
import Swal from "sweetalert2";


const Cart = () => {
    const [cart, refatch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure()

    const handleDelete = id =>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/wishs/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refatch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Wish Property has been deleted.",
                                icon: "success"
                            });
                        }
                    }
                    )
            }
        });


    }
    return (
        <div>
           <div className="flex justify-evenly">
                <h2 className="text-3xl font-semibold">Total orders: {cart.length}</h2>
                <h3 className="text-3xl font-semibold">Total price: ${totalPrice}</h3>
                <button className="btn btn-secondary text-2xl font-semibold">pay</button>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-xl text-black font-bold bg-orange-300">
                            <th>
                                #
                            </th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td className="text-lg">
                                    {item.name}

                                </td>
                                <td className="text-lg">${item.price}</td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Cart;