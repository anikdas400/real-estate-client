import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import HouseTypes from "../HouseTypes/HouseTypes";


const ExploreTypes = () => {

    const [house,setHouse]=useState([])
    useEffect(() => {
        fetch('properties.json')
        .then(res => res.json())
        .then(data=>{
            const house = data.filter(item=>item.category === 'houses') 
            setHouse(house)
        })
    },[])
    return (
        <section>
            <SectionTitle subHeading={'Get some '}
        heading={'Explore Apartment Types'}></SectionTitle>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mb-10 space-y-4">
            {
                house.map(item=><HouseTypes
                     key={item._id}
                     item={item}
                     ></HouseTypes>)
            }
            
            </div>
            
        </section>
    );
};

export default ExploreTypes;