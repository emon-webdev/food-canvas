import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Featured from './Featured';
import OrderOnline from './OrderOnline';
import PopularMenu from './PopularMenu';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>FOOD CANVAS ~ HOME</title>
            </Helmet>
            <Banner />
            <OrderOnline />
            <PopularMenu/>
            <Featured/>
        </div>
    );
};

export default Home;