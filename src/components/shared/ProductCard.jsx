import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import star from '@/assets/star.png';

const ProductCard = ({ product }) => {
    return (
        <div className="card shadow-sm max-w-[400px]">
            <figure className="relative">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className='w-full h-auto'
                />
                <button className="btn btn-sm btn-circle absolute top-3 right-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                </button>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product.name}
                </h2>
                <p>Brand: {product.brand}</p>

                <div className="flex justify-between items-center h-full">

                    <div className='flex gap-1.5 items-center justify-center'>
                        <Image
                            src={star}
                            width={15}
                            height={15}
                            alt="star"
                        />
                        {product.rating}
                    </div>

                    <div>
                        <p className="text-lg font-semibold">${product.price}</p>
                    </div>
                </div>

                <Link href={`/products/${product.id}`} className="btn rounded-none bg-[#f5e6d3]/50 border border-[#f5e6d3]">View Details</Link>
            </div>
        </div>
    );
};

export default ProductCard;