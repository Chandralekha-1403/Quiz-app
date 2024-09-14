import React from 'react';
import '../styles/QuizFooter.scss';

const Footer = ({ label, onClick }) => {
    return (
        <div className="footer">
                <button
                    className={`footer-button ${
                        label === 'Start' ? 'startpage' :
                        label === 'Start Again' ? 'resultpage' : ''
                }`}
      onClick={onClick}
    >
                {label}
                {label === 'Next' && <span className='arrow' >→</span>}
            </button>
        </div>
    );
};

export default Footer;
