import { useForm } from "react-hook-form";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { FaHome } from "react-icons/fa";


const AddProperty = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
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