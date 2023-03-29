import React from 'react';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <>
            <div className='bg-black flex items-center justify-between px-24 h-24 fixed w-full z-10'>
                <div><img src={logo} alt="" /></div>
                <div className='text-white no-underline flex gap-3'>
                    <a href="/Home">Home</a><a href="/About">About</a><a href="/Contact">Contact Us</a><a href="/Product">Product</a>
                </div>


                
            </div>
        </>
    );
};

export default Header;