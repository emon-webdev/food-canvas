import React from 'react';
import featuredImg from "../../assets/images/home/05.png";
import SectionTitle from '../../components/SectionTitle';
const Featured = () => {

    return (
        <div>
            <SectionTitle
                subHeading={"---Check it out----"}
                heading={"Featured Item"}
            />
            <div className='py-12'>
                <img src={featuredImg} alt="" srcSet="" />
            </div>
        </div>
    );
};

export default Featured;