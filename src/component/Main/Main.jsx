import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';

const Main = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='grid grid-cols-3 gap-4 ml-2 mt-24'>
            {
                products.map(product => <Cards product={product} key={product.id}/>)
            }

            
              
        </div>
    );
};

export default Main;