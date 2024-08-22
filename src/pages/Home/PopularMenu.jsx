import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import useMenu from '../../hooks/useMenu';
import Menuitem from '../Shared/Menuitem/Menuitem';
const PopularMenu = () => {
    const [menu, loading] = useMenu();
    const popular = menu.filter(item => item.category === "popular")
    return (
        <div className='py-8'>
            <SectionTitle
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}
            />
            <div className='py-6'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                    {popular.map(item => <Menuitem
                        key={item._id}
                        item={item}
                    />)}
                </div>
            </div>
        </div>
    );
};

export default PopularMenu;