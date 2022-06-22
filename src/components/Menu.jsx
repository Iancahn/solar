import React from 'react';
import LargeLogo from '../img/greenco-large-logo.jpg';

function Logo() {
    return (
        <div className='main-logo'>
            <img className='logo' src={LargeLogo} alt='The GreenCo Energy Solution Logo' />
        </div>
    );
};

export default Logo;