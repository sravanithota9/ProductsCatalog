import React from 'react';
import itemStyles from './Item.module.css';

const Item = ({ thumbnail, name, price, onClick }) => {

    return <div className="my-2 w-full sm:my-2 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/3 overflow-visible">
    <div data-testid="item" className="relative overflow-hidden shadow-md rounded-md cursor-pointer hover:shadow-xl transition ease duration-500" onClick={onClick}>
        <h6 className="absolute top-0 p-2 bg-yellow-500 bg-opacity-50 font-bold w-full rounded-md" aria-label="Product Name">{name}</h6>
        <img data-testid="itemThumb" src={thumbnail} alt={name} className="w-full rounded-md" />
        <span className={itemStyles.itemPrice} aria-label="Product Price">
            {
                price?.low ? `From $ ${price.low}` : `$ ${price}`
            }
        </span>
    </div>
    </div>
}

export default Item;