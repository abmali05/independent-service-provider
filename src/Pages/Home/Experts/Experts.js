import React from 'react';
import Expert from '../Expert/Expert';
import './Experts.css';

const experts = [
    { id: 1, name: 'Business Law', desc: 'I have enough experience on business law. I am working on it for the last 13 years.' },
    { id: 2, name: 'Family Law', desc: 'Regarding family law, I have hands on practice for last 20 years. There are a lots of happy clients.' },
    { id: 3, name: 'Civil Litigation', desc: 'This topic is a little bit complex. But I am very much familiar with its ins and outs.' },

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