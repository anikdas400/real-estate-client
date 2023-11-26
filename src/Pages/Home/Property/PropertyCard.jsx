

const PropertyCard = ({item}) => {
    const {name,recipe,image,price,_id,category}=item
    return (
        <div>
             <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h3>category: {category}</h3>
                    <p>Location: {recipe}</p>
                    <h4>Price:$ {price}</h4>
                    {/* card-actions justify-center */}
                    <div className="text-center">
                        <button className="btn btn-accent btn-outline  w-2/4 text-lg border-0 border-b-4">Details</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PropertyCard;