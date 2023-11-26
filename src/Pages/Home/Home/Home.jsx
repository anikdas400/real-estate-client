import Banner from "../Banner/Banner";
import ExploreTypes from "../ExploreTypes/ExploreTypes";
import Info from "../Info/Info";
import Range from "../Range/Range";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Range></Range>
            <Info></Info>
            <ExploreTypes></ExploreTypes>
        </div>
    );
};

export default Home;