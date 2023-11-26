import Marquee from "react-fast-marquee";


const Trusted = () => {
    return (
        <div>
            <h2 className="text-center text-4xl font-bold mb-20 mt-32 text-green-700 italic underline">Trusted by the worlds best</h2>
            <Marquee className="mb-16" pauseOnHover={true} speed={70}>
               <img className="mr-10" src='https://i.ibb.co/DVbw705/t1.png' alt="" />
               <img className="mr-10" src='https://i.ibb.co/vX5fLnV/t2.png' alt="" />
               <img className="mr-10" src='https://i.ibb.co/jMBJPjx/t3.png' alt="" />
               <img className="mr-10" src='https://i.ibb.co/yRT4VBv/t4.png' alt="" />
               <img className="mr-10" src='https://i.ibb.co/MshZRMb/t5.png' alt="" />
               <img className="mr-10" src='https://i.ibb.co/ZKyZGbJ/t6.png' alt="" />
            </Marquee>

        </div>
    );
};

export default Trusted;