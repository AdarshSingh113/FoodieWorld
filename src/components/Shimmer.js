import React from 'react';

const Shimmer = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24 mb-4"></div>
            <h2 className="text-xl text-gray-700 font-semibold">Loading...</h2>
        </div>
    );
};

export default Shimmer;
