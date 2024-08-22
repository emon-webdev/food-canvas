import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../components/SectionTitle';
import useMenu from '../../hooks/useMenu';
import Banner from '../Home/Banner';
import Menuitem from '../Shared/Menuitem/Menuitem';

const Menu = () => {

    const [menu, loading] = useMenu()
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const offered = menu.filter(item => item.category === "offered")
    return (
        <div>
            <Helmet>
                <title>FOOD CANVAS ~ MENU</title>
            </Helmet>
            <Banner />
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"TODAYS OFFERED"}
            />
            <div className='py-6'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                    {offered?.map(item => <Menuitem
                        key={item._id}
                        item={item}
                    />)}
                </div>
            </div>
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"DESSERT"}
            />
            <div className='py-6'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                    {dessert?.map(item => <Menuitem
                        key={item._id}
                        item={item}
                    />)}
                </div>
            </div>
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"SOUP"}
            />
            <div className='py-6'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                    {soup?.map(item => <Menuitem
                        key={item._id}
                        item={item}
                    />)}
                </div>
            </div>
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"SALAD"}
            />
            <div className='py-6'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                    {salad?.map(item => <Menuitem
                        key={item._id}
                        item={item}
                    />)}
                </div>
            </div>
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"PIZZA"}
            />
            <div className='py-6'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                    {pizza?.map(item => <Menuitem
                        key={item._id}
                        item={item}
                    />)}
                </div>
            </div>
        </div>
    );
};

export default Menu;