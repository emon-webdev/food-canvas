import React from 'react';
import { Link } from 'react-router-dom';
import Menuitem from '../Shared/Menuitem/Menuitem';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                {items?.map(item => <Menuitem
                    key={item._id}
                    item={item}
                />)}
            </div>

            <Link to={`/order/${title}`} className=''>
                <button className="btn btn-outline mt-8 mx-a text-center">Order now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;