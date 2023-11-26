import { Helmet } from "react-helmet-async";
import Cover from "./Cover";
import imgC from "../../../assets/6.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useProperties from "../../../hook/useProperties";
import PropertyCard from "./PropertyCard";



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
            <Tabs className={'text-center mt-10 mb-10'} defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>HOUSES</Tab>
                    <Tab>OFFICE</Tab>
                    <Tab>VILLA</Tab>
                    <Tab>BUNGALOW</Tab>
                    
                </TabList>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                        {
                            houses.map(item =><PropertyCard
                                key={item._id}
                                item={item}
                            ></PropertyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                    {
                            office.map(item =><PropertyCard
                                key={item._id}
                                item={item}
                            ></PropertyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                    {
                            villa.map(item =><PropertyCard
                                key={item._id}
                                item={item}
                            ></PropertyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                    {
                            bungalow.map(item =><PropertyCard
                                key={item._id}
                                item={item}
                            ></PropertyCard>)
                        }
                    </div>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default Property;