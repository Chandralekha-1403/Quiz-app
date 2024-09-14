import React from 'react';
import './Footer.scss';

const Footer = ({ label, onClick }) => {
    return (
        <div className="footer">
            <button className="footer-button" onClick={onClick}>
                {label}
                {label === 'Next' && <span className="arrow">→</span>}
            </button>
        </div>
    );
};

export default Footer;
