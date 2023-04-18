import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';

const Main = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    

    return (
        <div className='grid md:grid-cols-3 gap-4 ml-2'>
            {
                products.map(product => <Cards product={product} handler={props.count} key={product.id}/>)
            }


        </div>
    );
};

export default Main;