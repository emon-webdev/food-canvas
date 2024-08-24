import React from 'react';
import FoodCard from '../../components/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-4'>
            {
                items.map(item => <FoodCard
                    key={item.id}
                    item={item}
                />)
            }
        </div>
    );
};

export default OrderTab;