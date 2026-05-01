import Image from 'next/image';
import React from 'react';
import SkincareTipImg from '@/assets/SkincareTip.png';
import HydrationImg from '@/assets/HydrationTip.png';
import { FaArrowRight } from 'react-icons/fa';

const CareTips = () => {
    return (
        <div className="bg-[#F5E6D3] py-20">
            <div className="container mx-auto px-8">
                <h2 className="text-3xl font-noto-serif text-center">
                    Summer Care Guide
                </h2>
                <p className="mt-2 text-gray-600 text-center">Expert tips to ensure your summer is as effortless and healthy as it is beautiful.</p>

                <div className="grid lg:grid-cols-2 gap-15 mt-10">

                    <div className="bg-white p-6 flex flex-wrap gap-4 shadow">

                        <Image
                            src={SkincareTipImg}
                            alt="Care Tip 1"
                            width={300}
                            height={300}
                            className="flex-1 max-w-[200px] max-h-[250px]" />


                        <div className="flex-1 space-y-2">
                            <p className="text-sm text-[#FF7F50] badge badge-outline">WELLNESS</p>

                            <h3 className="text-3xl font-bold font-noto-serif">Sunkissed Skincare</h3>

                            <p className="mt-2 text-gray-600 max-w-sm">
                                Learn how to maintain that golden
                                glow while protecting your skin's vital
                                barrier with our artisanal minerals.
                            </p>

                            <h3 className='text-[#6C2000] font-bold flex items-center gap-2 cursor-pointer'>Read More <FaArrowRight /></h3>
                        </div>
                    </div>

                    <div className="bg-white p-6 flex flex-wrap gap-4 shadow">
                        <Image
                            src={HydrationImg}
                            alt="Care Tip 2"
                            width={300}
                            height={300}
                            className="flex-1 max-w-[200px] max-h-[250px]" />

                        <div className='flex-1 space-y-2'>
                            <p className="text-sm text-[#FF7F50] badge badge-outline">RITUAL</p>

                            <h3 className="text-3xl font-bold font-noto-serif">Stay Hydrated</h3>

                            <p className=" text-gray-600 max-w-sm">
                                Elevate your daily hydration with
                                infused recipes and the benefits of proper water intake during peak heat.
                            </p>

                            <h3 className='text-[#6C2000] font-bold flex items-center gap-2 cursor-pointer'>Read More <FaArrowRight /></h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CareTips;