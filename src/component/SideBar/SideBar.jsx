import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

const SideBar = ({product, lent, remove, children}) => {

    const card = product
    let sum = 0;
    let shipping = 0;
    
    for (const total of card){
        sum = sum + total.price
        shipping += total.shipping
    }

    let tax = sum/100*(7);
    let towDasimal =  tax.toFixed(2)

   let totalPrice = tax + sum + shipping;

    // let totalPriceTowDasimal =  totalPrice.toFixed(2)



    

    // console.log(tax)
 
    return (
        <div className='bg-[#FF99004D] h-full fixed w-full p-5 mt-0 gap-3 flex flex-col'>
            <h1 className='font-bold pb-3'>Order Summary</h1>
            <h2>Selected Items: {lent}</h2>
            <h2>Total Price: ${sum}</h2>
            <h2>Total Shipping Charge: ${shipping}</h2>
            <h2>Tax: ${towDasimal}</h2>
            <h2 className='font-bold'>Grand Total: ${totalPrice.toFixed(2)}</h2>
            <button onClick={remove} className='bg-[#FF3030] text-white w-[300px] p-2 flex justify-between items-center rounded-lg font-semibold'>
                clear all <FontAwesomeIcon icon={faTrashCan} />
            </button>
            {children}
        </div>
    );
};

export default SideBar;