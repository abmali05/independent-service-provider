import React from 'react';
import './Expert.css';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className='service'>

            <img src={img} className="w-100" alt="..." />

            <h5>{name}</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-secondary">Details</a>



        </div>

    );
};

export default Expert;