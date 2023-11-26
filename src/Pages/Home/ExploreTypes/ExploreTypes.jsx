
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import HouseTypes from "../HouseTypes/HouseTypes";
import useProperties from "../../../hook/useProperties";
import { Link } from "react-router-dom";


const ExploreTypes = () => {


    const [properties] = useProperties()
    const house = properties.filter(item => item.category === 'houses')
    const villa = properties.filter(item => item.category === 'villa')
    // useEffect(() => {
    //     fetch('properties.json')
    //     .then(res => res.json())
    //     .then(data=>{
    //         const house = data.filter(item=>item.category === 'houses') 
    //         setProperties(house)
    //     })
    // },[])
    return (
        <section>
            <SectionTitle subHeading={'Get some '}
                heading={'Explore Apartment Types'}>

            </SectionTitle>
            <h2 className="text-3xl text-center mb-5 mt-5 font-semibold italic  text-orange-400 border-b-4 w-2/12">House Types</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mb-10 space-y-4">
                {
                    house.map(item => <HouseTypes
                        key={item._id}
                        item={item}
                    ></HouseTypes>)
                }

            </div>

            <h2 className="text-3xl text-center mb-5 mt-5 font-semibold italic  text-orange-400 border-b-4 w-2/12 ">Villa Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mb-10 space-y-4">

                {

                    villa.map(item => <HouseTypes
                        key={item._id}
                        item={item}
                    ></HouseTypes>)
                }

            </div>
            <div className="text-center">
                <button className="btn mt-8 btn-warning btn-outline  w-2/4 text-lg border-0 border-b-4"><Link to='property'>View All Types</Link> </button>
            </div>


        </section>
    );
};

export default ExploreTypes;