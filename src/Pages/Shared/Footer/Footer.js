import React from 'react';
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faFacebookF, } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare, FaRegEnvelope } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='container footer-bottom text-center mt-5 pb-1 pt-2 bg-dark text-white'>

            <div className='row '>

                <div className='col-md-6' >Follow me: <FaFacebookSquare></FaFacebookSquare> <FaTwitterSquare></FaTwitterSquare> <FaYoutubeSquare></FaYoutubeSquare>

                </div>
                <div className='col-md-6'>Contact: <FaRegEnvelope></FaRegEnvelope> david@david.com

                </div>
            </div>
            <p><small> &copy; Innocent Law Associate {year}, All rights reserved. </small></p>

        </div>
    );
};

export default Footer;