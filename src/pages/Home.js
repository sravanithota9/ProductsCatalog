import React, { useState } from 'react';
import ProductDialog from '../components/ProductDialog/ProductDialog';
import ProductList from '../components/ProductList/ProductList';
import useProducts from '../hooks/useProducts';

const Home = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const { products, selectedProduct, setSelectedProduct } = useProducts();
    const handleSelect = (product) => {
        setDialogOpen(true)
        setSelectedProduct(product)
    }

    return <>
        <h1 className="text-3xl mb-4 font-bold self-start">Products</h1>
        <ProductDialog open={dialogOpen} product={selectedProduct} onClose={() => setDialogOpen(false)} />
        <div className="flex">
            <ProductList onSelect={handleSelect} products={products} />
        </div>
    </>
}

export default Home;