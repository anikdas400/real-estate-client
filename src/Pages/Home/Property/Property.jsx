import { Helmet } from "react-helmet-async";
import Cover from "./Cover";
import imgC from "../../../assets/6.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useProperties from "../../../hook/useProperties";
import PropertyCard from "./PropertyCard";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";



const Property = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [properties] = useProperties()
    const houses = properties.filter(item => item.category === 'houses')
    const office = properties.filter(item => item.category === 'office')
    const villa = properties.filter(item => item.category === 'villa')
    const bungalow = properties.filter(item => item.category === 'bungalow')
    return (
        <div>
            <Helmet>
                <title>JCX Industries | Properties</title>
            </Helmet>
            <Cover img={imgC} title={'Our Properties'}></Cover>
            <SectionTitle subHeading={'Get some '}
                heading={'All Apartment Types'}
            ></SectionTitle>
            <Tabs className={'text-center mt-10 mb-10'} defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className={'flex gap-5 justify-center mb-10'}>
                    <Tab className={'text-xl font-bold hover:text-orange-500 hover:underline cursor-pointer'}>HOUSES</Tab>
                    <Tab className={'text-xl font-bold hover:text-orange-500 hover:underline cursor-pointer'}>OFFICE</Tab>
                    <Tab className={'text-xl font-bold hover:text-orange-500 hover:underline cursor-pointer'}>VILLA</Tab>
                    <Tab className={'text-xl font-bold hover:text-orange-500 hover:underline cursor-pointer'}>BUNGALOW</Tab>

                </TabList>
                <TabPanel>
                    <div>
                        <h2 className="text-2xl font-semibold border-b-4 mb-5 italic text-lime-600 w-2/12">Houses Types</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                        {
                            houses.map(item => <PropertyCard
                                key={item._id}
                                item={item}
                            ></PropertyCard>)
                        }
                    </div>
                    </div>

                </TabPanel>
                <TabPanel>
                    <div>
                    <h2 className="text-2xl font-semibold border-b-4 mb-5 italic text-purple-500 w-2/12">Office Types</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                        {
                            office.map(item => <PropertyCard
                                key={item._id}
                                item={item}
                            ></PropertyCard>)
                        }
                    </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                    <h2 className="text-2xl font-semibold border-b-4 mb-5 italic text-emerald-600 w-2/12">Villa Types</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                        {
                            villa.map(item => <PropertyCard
                                key={item._id}
                                item={item}
                            ></PropertyCard>)
                        }
                    </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                    <h2 className="text-2xl font-semibold border-b-4 mb-5 italic text-violet-700 w-2/12">Bungalow Types</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                        {
                            bungalow.map(item => <PropertyCard
                                key={item._id}
                                item={item}
                            ></PropertyCard>)
                        }
                    </div>
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Property;