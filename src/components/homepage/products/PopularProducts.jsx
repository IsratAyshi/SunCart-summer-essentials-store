import ProductCard from '@/components/shared/ProductCard';
import { productsFetch } from '@/lib/data';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Products = await productsFetch();

const PopularProducts = () => {
    return (
        <div className='bg-[#fffbf5]'>
            <div className='container mx-auto py-[80px]'>
                <div className='flex flex-wrap gap-4 justify-between items-center'>
                    <div>
                        <h2 className="text-3xl font-noto-serif ">Popular Essentials</h2>
                        <p className="mt-2 text-gray-600">Our most loved pieces for the perfect getaway.</p>
                    </div>

                    <div>
                        <Link href="/allProducts" className='text-[#FF7F50] font-semibold flex items-center gap-2 hover:underline'>View All Products<FaArrowRight /></Link>
                    </div>
                </div>

                <div className='mx-auto pt-10 grid grid-cols-1 md:grid-cols-3  gap-10'>
                    {
                        Products.slice(0, 3).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;