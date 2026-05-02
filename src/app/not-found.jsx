
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-screen bg-[#FFFBF5] flex justify-center items-center flex-col space-y-4'>
            <h2 className='text-5xl font-bold'>404</h2>
            <p className='text-2xl text-[#FF7F50] font-bold'>Page Not Found</p>
            <p className="text-gray-600">
                The page you’re looking for doesn’t exist or may have been moved.
            </p>

            <Link href="/"><button className='btn bg-[#FF7F50] text-white'>Back to Home</button></Link>
        </div>
    );
};

export default NotFound;