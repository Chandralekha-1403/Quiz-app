import React from 'react';
import './Footer.scss';

const Footer = ({ label, onClick }) => {
    return (
        <div className="footer">
            <button className="footer-button" onClick={onClick}>
                {label}
            </button>
        </div>
    );
};

export default Footer;
