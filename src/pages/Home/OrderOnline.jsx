import React from 'react';
import onlineImg from "../../assets/images/home/banner.jpg";
import SectionTitle from '../../components/SectionTitle';
const OrderOnline = () => {
    return (
        <div className='text-center py-12'>
            <SectionTitle
                heading={"---From 11:00am to 10:00pm---"}
                subHeading={"ORDER ONLINE"}
            />
            <div className='py-8'>
                <img src={onlineImg} alt="" srcset="" />
            </div>
        </div>
    );
};

export default OrderOnline;