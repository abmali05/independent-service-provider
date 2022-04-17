import React from 'react';

import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import Expert from '../Expert/Expert';
import './Experts.css';

const experts = [
    { id: 1, name: 'Will Smith', img: expert1 },
    { id: 2, name: 'Chris Rock', img: expert2 },
    { id: 3, name: 'Dwayne Rock', img: expert3 },

]

const Experts = () => {
    return (
        <div id="experts" className='container'>
            <div className="row">
                <h2 className=' text-center mt-5'>Expertise in various law fields</h2>
                <div className="experts-container">
                    {
                        experts.map(expert => <Expert
                            key={expert.id}
                            expert={expert}
                        ></Expert>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Experts;