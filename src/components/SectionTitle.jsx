import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div>
            <p>{subHeading}</p>
            <h2>{heading}</h2>
        </div>
    );
};

export default SectionTitle;