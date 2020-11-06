import React from 'react';
import Item from '../Item/Item';

const ProductList = ({ onSelect, products=[] }) => {

    return <div className="flex flex-wrap overflow-hidden mx-2 sm:-mx-2 md:-mx-3 lg:-mx-3 xl:-mx-3" data-testid="productList" aria-label="Product List">
        {
            products.map(product => <Item 
                key={product.id} 
                name={product.name} 
                thumbnail={product.hero.href} 
                price={product.price?.selling || product.priceRange?.selling} 
                onClick={() => onSelect(product)} 
            />)
        }
    </div>
}

export default ProductList;