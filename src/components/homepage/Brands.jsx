import Image from 'next/image';
import React from 'react';


const brandCards = [
    {
        "id": 1,
        "brandName": "AURA",
        "tagline": "Premium skincare essentials for sunny days",
        "image": "https://images.unsplash.com/photo-1556228578-8c89e6adf883?fit=crop&w=1200&h=700&q=80",
        "category": "Skincare"
    },
    {
        "id": 2,
        "brandName": "BLOOM",
        "tagline": "Lightweight summer outfits with breathable comfort",
        "image": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?fit=crop&w=1200&h=700&q=80",
        "category": "Summer Fashion"
    },
    {
        "id": 3,
        "brandName": "SOL",
        "tagline": "Stylish beach bags and breezy summer hats for your perfect seaside look",
        "image": "https://images.unsplash.com/photo-1758900561440-4014bdd78c10?q=80&w=1151&auto=format&fit=crop&w=1200&h=700&q=80",
        "category": "Summer Fashion"
    },
    {
        "id": 4,
        "brandName": "DRIFT",
        "tagline": "Beach-ready accessories for travel and relaxation",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?fit=crop&w=1200&h=700&q=80",
        "category": "Beach Accessories"
    }
]

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