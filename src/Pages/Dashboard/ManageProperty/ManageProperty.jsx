import { Link } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useProperties from "../../../hook/useProperties";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";


const ManageProperty = () => {
    const [property, , refetch] = useProperties()
    const axiosSecure = useAxiosSecure();
    const handleDeleteProperty = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/properties/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.category} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }
    return (
        <div>
            <SectionTitle heading='Manage Properties' subHeading='Properties'></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr className="text-base">
                                <th>
                                    #
                                </th>
                                <th>Property Image</th>
                                <th>Property Title</th>
                                <th>Agent name</th>
                                <th>location</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className="text-base">
                            {
                                property.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask rounded-lg w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.category}
                                    </td>

                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.location}
                                    </td>
                                    <td className="">${item.price}</td>
                                    <td>
                                        <Link to={`/dashboard/updateProperty/${item._id}`}>
                                            <button
                                                className="btn btn-ghost btn-md bg-lime-600">
                                                <FaEdit className="text-white 
                                        "></FaEdit>
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteProperty(item)}
                                            className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageProperty;