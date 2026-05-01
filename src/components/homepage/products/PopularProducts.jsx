import ProductCard from '@/components/shared/ProductCard';
import { productsFetch } from '@/lib/data';
import React from 'react';

const Products = await productsFetch();

const PopularProducts = () => {
    return (
        <div>
            {
                Products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    );
};

export default PopularProducts;