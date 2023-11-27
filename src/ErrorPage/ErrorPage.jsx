import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="mt-64 text-center">
            <h2 className="text-4xl mb-5 font-semibold">OPPS !!!</h2>
            <h3 className="text-5xl mb-7 font-bold"><span className="text-red-700">404</span> ERROR</h3>
            <button className="btn btn-warning font-medium"><Link to='/'>Go Back</Link></button>
        </div>
    );
};

export default ErrorPage;