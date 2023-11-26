

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center mt-8 mb-10 md:w-4/12 mx-auto">
            <p className="text-purple-600 italic mb-2 text-lg">---{subHeading}---</p>
            <h2 className="text-cyan-600 italic font-semibold text-3xl border-blue-500 border-y-2 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;