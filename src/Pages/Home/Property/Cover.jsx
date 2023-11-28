import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}


        >
            <div className="mt-32">
                <div className="bg-black text-white w-10/12 mx-auto  px-20 py-24 rounded-xl bg-opacity-50 text-center">
                    <h2 className="text-5xl font-semibold mb-5">{title}</h2>
                    <p className="text-base font-medium italic">Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar.</p>
                </div>
            </div>

            


            <div style={{ height: '200px' }} />
        </Parallax>
    );
};

export default Cover;