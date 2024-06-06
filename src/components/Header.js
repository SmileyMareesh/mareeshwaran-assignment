import React from 'react';
import Pic from '../assets/ca.svg'
function Header() {
    return (
        <div className='Header'>
            <div className='Brand'>
                 <img src={Pic} alt='brand-logo' style={{height: 40}} />
                </div>
            </div>
    );
}

export default Header;