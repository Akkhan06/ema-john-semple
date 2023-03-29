import React from 'react';

const SideBar = (props) => {
    return (
        <div className='bg-[#FF99004D] h-full fixed w-full p-5 mt-24'>
            <h1 className='font-bold pb-3'>Order Summary</h1>
            <h2>Selected Items: {props.select}</h2>
        </div>
    );
};

export default SideBar;