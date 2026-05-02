import { getProductDetailsById } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import star from '@/assets/star.png';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const product = await getProductDetailsById(id);
    return {
        title: product.name,
        description: product.description
    }
}

const ProductDetailsPage = async ({ params }) => {

    const { id } = await params;

    const product = await getProductDetailsById(id);

    return (
        <div className='bg-[#fffbf5]'>
            <div className='py-10 container mx-auto '>
                <div className='px-15 mb-5'>
                    <Link href={'/products'} className='text-lg font-semibold underline text-[#FF7F50] flex items-center gap-2'><FaArrowLeft /> Go to All Products</Link>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 p-10 rounded-xl border border-[#FF7F50]'>
                    <div>
                        <p className='mb-2 text-sm text-gray-500'>All Products / {product.category} / {product.name}</p>
                        <figure className="rounded-xl overflow-hidden">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={400}
                                height={400}
                                className='w-full h-auto'
                            />
                        </figure>
                    </div>

                    <div className='flex flex-col justify-between'>
                        <div className='space-y-3'>
                            <h1 className="text-3xl font-bold ">{product.name}</h1>

                            <p className="text-xl text-gray-600">From: <span className='font-semibold tracking-wide'>{product.brand}</span></p>

                            <div className='flex gap-1.5 items-center '>

                                <Image
                                    src={star}
                                    width={15}
                                    height={15}
                                    alt="star"
                                />
                                <Image
                                    src={star}
                                    width={15}
                                    height={15}
                                    alt="star"
                                />
                                <Image
                                    src={star}
                                    width={15}
                                    height={15}
                                    alt="star"
                                />
                                <Image
                                    src={star}
                                    width={15}
                                    height={15}
                                    alt="star"
                                />
                                <Image
                                    src={star}
                                    width={15}
                                    height={15}
                                    alt="star"
                                />
                                <span className="text-lg">{product.rating}</span>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold">$ {Number(product.price).toFixed(2)}</p>
                            </div>

                            <p className="text-gray-600 max-w-lg">{product.description}</p>

                            <div className="badge badge-outline border-[#FF7F50] text-[#FF7F50] font-semibold p-6 rounded-2xl">Category: {product.category}</div>

                            <p className="text-gray-600">Available Stock: <span className='font-semibold'>{product.stock} pieces</span> (only)</p>

                            <div>

                            </div>

                        </div>

                        <div className='flex items-center gap-4 mt-5'>
                            <button className="btn bg-[#FF7F50] text-white flex-8 py-6">Add To Cart</button>

                            <button className="btn btn-square flex-1 py-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.5em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;