import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import ExploreTypes from "../ExploreTypes/ExploreTypes";
import Info from "../Info/Info";
import Range from "../Range/Range";
import Reviews from "../Review/Reviews";
import Trusted from "../Trusted/Trusted";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>JCX Industries | Home</title>               
            </Helmet>
            <Banner></Banner>
            <Range></Range>
            <Info></Info>
            <ExploreTypes></ExploreTypes>
            <Trusted></Trusted>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;