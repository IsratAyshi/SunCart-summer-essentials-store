import ProductCard from '@/components/shared/ProductCard';
import { productsFetch } from '@/lib/data';
import React from 'react';

export const metadata = {
    title: "Sunstede | All Products",

};

const Products = await productsFetch();

const AllProductsPage = () => {
    return (
        <div className='py-10 bg-[#fffbf5]/50'>
            <div className='container mx-auto p-10 '>
                <h1 className='text-3xl font-bold text-center font-noto-serif mb-10'>All Products</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        Products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProductsPage;