import { useForm } from "react-hook-form";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { FaHome } from "react-icons/fa";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddProperty = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        //  image upload to imgbb and then get an url
         const imageFile = { image: data.image[0] }
         const res = await axiosPublic.post(image_hosting_api, imageFile, {
             headers: {
                 'content-type': 'multipart/form-data'
             }
         });
         if (res.data.success) {
             // now send the menu item data to the server with the image url
             const menuItem = {
                 name: data.name,
                 category: data.category,
                 location: data.location,
                 price: parseFloat(data.price),
                 recipe: data.recipe,
                 image: res.data.data.display_url
             }
             
             const menuRes = await axiosSecure.post('/properties', menuItem);
             console.log(menuRes.data)
             if(menuRes.data.insertedId){
                 // show success popup
                 reset();
                 Swal.fire({
                     position: "top-end",
                     icon: "success",
                     title: `${data.category} is added to the property.`,
                     showConfirmButton: false,
                     timer: 1500
                   });
             }
         }
         console.log( 'with image url', res.data);
    }
    return (
        <div>
            <SectionTitle heading='Add A Property' subHeading="What's new !"></SectionTitle>

            <div className="bg-cyan-500 p-5 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="flex gap-6">
                        {/* category--title */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Property Title*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a Title</option>
                                <option value="houses">Houses</option>
                                <option value="office">Office</option>
                                <option value="villa">Villa</option>
                                <option value="bungalow">Bungalow</option>

                            </select>
                        </div>

                        {/* price--price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* agent name , email */}
                    <div className="flex gap-6">
                        <div className="form-control w-full my-3">
                            <label className="label">
                                <span className="label-text">Agent Name*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Agent Name"
                                {...register('name', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-3">
                            <label className="label">
                                <span className="label-text">Agent Email*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Agent Email"
                                {...register('email', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* location */}
                    <div className="form-control w-full my-3">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Location"
                                {...register('location', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                    {/* recipe details--description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Property Description</span>
                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="About Property"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Add Property <FaHome></FaHome>
                    </button>
                </form>
            </div>
        </div>

    );
};

export default AddProperty;