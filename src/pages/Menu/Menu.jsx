import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../components/SectionTitle';
import useMenu from '../../hooks/useMenu';
import Banner from '../Home/Banner';
import MenuCategory from './MenuCategory';

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
                <MenuCategory items={offered} />
            </div>
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"DESSERT"}
            />
            <div className='py-6'>
                <MenuCategory items={dessert} title={"pizza"} />
            </div>
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"SOUP"}
            />
            <div className='py-6'>
                <MenuCategory items={soup} title={"soup"} />
            </div>
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"SALAD"}
            />
            <div className='py-6'>
                <MenuCategory items={salad} title={"salad"} />
            </div>
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"PIZZA"}
            />
            <div className='py-6'>
                <MenuCategory items={pizza} title={"pizza"} />
            </div>
        </div>
    );
};

export default Menu;