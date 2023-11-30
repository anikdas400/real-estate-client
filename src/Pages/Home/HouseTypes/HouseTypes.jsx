import { Link } from "react-router-dom";


const HouseTypes = ({ item }) => {
    const { name, recipe, image, category, price } = item
    return (
        <div>

            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>


                
                <div className="card-body">
                <h3 className="card-title">Title: {category}</h3>
                    
                <div className="flex gap-2">
                    <h2 className="text-lg">Agent: <span className="text-teal-600">{name}</span></h2>
                    <p className="text-lg">Location: <span className="text-lime-600">{item.location}</span> </p>
                    </div>
                    
                    <p className="text-base"> <span className="font-semibold">Description: </span>{recipe}</p>
                    {/* card-actions justify-center */}
                    <div className="flex justify-evenly">
                        <h4 className="text-lg">Price: $<span className="text-sky-500 font-semibold">{price}</span> </h4>
                        <Link>
                            <button className="btn bg-gradient-to-r from-purple-500 to-pink-500">Details</button>
                        </Link>


                    </div>

                </div>


            </div>
        </div>
    );
};

export default HouseTypes;