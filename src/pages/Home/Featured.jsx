import React, { useEffect } from 'react';
import featuredImg from "../../assets/images/home/05.png";
import SectionTitle from '../../components/SectionTitle';
const Featured = () => {
    useEffect(() => {
        fetch()
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <SectionTitle
                subHeading={"---Check it out----"}
                heading={"Featured Item"}
            />
            <div className='py-12'>
                <img src={featuredImg} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Featured;