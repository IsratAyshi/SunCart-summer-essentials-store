import React from 'react';

const MainLoading = () => {
    return (
        <div className='h-[80vh] bg-[#FFFBF5] flex justify-center items-center flex-col space-y-4'>
            <h1 className='text-2xl font-bold'>Loading Page...</h1>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default MainLoading;