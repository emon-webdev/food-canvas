import React from 'react';

const Menuitem = ({ item }) => {
    const { name, image, price, recipe } = item
    return (
        <div className='flex items-center space-x-4'>
            <img className='w-[100px] h-[100px] rounded-full' src={image} alt="" srcset="" />
            <div>
                <h3>{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-400'>{price}</p>
        </div>
    );
};

export default Menuitem;