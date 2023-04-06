import React from 'react';
// import { RiDeleteBinLine } from "react-icons/bs";
<FontAwesomeIcon icon={faTrashCan} />
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

const ReviewCard = ({single, removeOneData}) => {
    const {img, name, id, quantity, price} = single
    return (
        <div>
            <div className="flex w-1/2 border-red-200 border-2 py-2 pl-3 pr-6 rounded-lg gap-3 mt-2 mx-auto items-center">
                <div className="">
                    <img className='w-24  rounded-lg' src={img} alt="" />
                </div>
                <div className="flex items-center justify-between w-full">
                   <div className="">
                   <h1 className='text-[#1C2B35] text-2xl'>{name}</h1>
                    <p>Price: <span className='text-[#FF9900] font-semibold'>${price}</span></p>
                    <p>quantity: {quantity}</p>
                   </div>

                   <div className="">
                    <button onClick={() => removeOneData(id)} className='bg-[#EB57574D] w-14 h-14 p-2 rounded-[50%] text-red-500'>
                    <FontAwesomeIcon icon={faTrashCan} className='text-3xl' />
                    </button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;