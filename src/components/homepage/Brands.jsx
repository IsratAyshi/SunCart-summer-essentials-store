import { brandsFetch } from '@/lib/data';
import Image from 'next/image';
import React from 'react';


const brandCards = await brandsFetch();

const Brands = () => {
    return (
        <div className="bg-[#fffbf5] py-16 text-center">
            <p className="text-sm mb-6 uppercase font-bold">Top Curated Partnerships</p>

            <div className="flex flex-wrap justify-center items-center gap-12 text-2xl font-bold">
                {
                    brandCards.map((card) => (
                        <div key={card.id} className="relative border-2  border-gray-300 p-1 cursor-pointer shadow-[10px_3px_10px_rgb(245,230,211,0.8)] ">
                            <Image
                                src={card.image}
                                alt={card.brandName}
                                width={200}
                                height={200}
                                className='relative' />

                            <div className='absolute inset-0 bg-white/30'>
                            </div>

                            <p className='absolute z-10 top-12 left-15 tracking-widest'>{card.brandName}</p>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Brands;