import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Faqs from '../Faqs/Faqs';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <Faqs></Faqs>

        </div>
    );
};

export default Home;