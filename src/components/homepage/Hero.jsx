"use client";
import React from 'react';
import summerBanner from '@/assets/SummerBanner.png';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import { animated, useSpring } from '@react-spring/web'

const Hero = () => {

    const headingAnimation = useSpring({
        from: { opacity: 0, transform: "translateY(-30px)" },
        to: { opacity: 1, transform: "translateY(0px)" },
        delay: 100,
    });

    const floatAnimation = useSpring({
        from: { transform: "translateY(0px)" },
        to: { transform: "translateY(-6px)" },
        config: { duration: 600 },
        loop: { reverse: true }, // bounces up and down forever
    });

    return (
        <div
            className="relative hero h-[70vh] flex items-center"
            style={{
                backgroundImage: `url(${summerBanner.src})`,
                backgroundPosition: "top"
            }}
        >

            <div className="absolute inset-0 bg-white/30"></div>

            <div className="relative max-w-[1440px]">
                <div className="flex flex-col gap-7 px-8">

                    <animated.h1 style={headingAnimation} className="text-5xl text-black font-noto-serif">Sun-Drenched Style</animated.h1>

                    <p className="max-w-md text-gray-700">
                        Embrace the warmth of the season with our curated coastal collection.  Designed for the golden hours and the endless summer spirit.
                    </p>

                    <animated.div
                        style={floatAnimation}>
                        <Link href="/allProducts">
                            <button
                                className="bg-[#FF7F50] px-6 py-3 text-black flex items-center gap-2 cursor-pointer">
                                SHOP THE COLLECTION <IoIosArrowForward className='text-xl' />
                            </button>
                        </Link>
                    </animated.div>
                </div>
            </div>


        </div>
    );
};

export default Hero;