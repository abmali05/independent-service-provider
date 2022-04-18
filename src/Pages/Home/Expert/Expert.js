import React from 'react';
import './Expert.css';

const Expert = ({ expert }) => {
    const { name, desc } = expert;
    return (
        <div className='service bg-light'>



            <h5 className='pt-3'>{name}</h5>
            <p>{desc}</p>
            <a href="#" className="btn btn-secondary">Details</a>



        </div>

    );
};

export default Expert;