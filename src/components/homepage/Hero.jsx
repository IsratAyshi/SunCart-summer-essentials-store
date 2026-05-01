import React from 'react';
import summerBanner from '@/assets/SummerBanner.png';

const Hero = () => {
    return (
        <div
            className="relative hero h-[70vh] flex items-center"
            style={{
                backgroundImage: `url(${summerBanner.src})`,
            }}
        >

            <div className="absolute inset-0 bg-white/30"></div>

            <div className="relative max-w-[1440px]">
                <div className="flex flex-col gap-7 px-8">

                    <h1 className="text-5xl text-black font-noto-serif">Sun-Drenched Style</h1>

                    <p className="max-w-md text-gray-700">
                        Embrace the warmth of the season with our curated coastal collection.  Designed for the golden hours and the endless summer spirit.
                    </p>

                    <div>
                        <button className="bg-[#FF7F50] px-6 py-3 text-black">SHOP THE COLLECTION</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Hero;