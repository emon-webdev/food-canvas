import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center py-6'>
            <p>{subHeading}</p>
            <h2>{heading}</h2>
        </div>
    );
};

export default SectionTitle;