import Banner from "../Banner/Banner";
import ExploreTypes from "../ExploreTypes/ExploreTypes";
import Info from "../Info/Info";
import Range from "../Range/Range";
import Reviews from "../Review/Reviews";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Range></Range>
            <Info></Info>
            <ExploreTypes></ExploreTypes>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;