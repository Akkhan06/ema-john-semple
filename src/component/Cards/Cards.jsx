import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cards = (props) => {
    const {id, category, name, seller, price, stock, ratings, ratingsCount, img, shipping, quantity} = props.product

    const [count, setCount] = useState([])

    useEffect(() => {
      fetch('products.json')
      .then(res => res.json())
      .then(data => setCount(data))
    },[])

    // console.log(props.handler)
    
  return (
    <div>
      <div className="w-auto rounded-b-lg h-[500px] bg-base-100 shadow-xl relative">
        <figure>
          <img
            src={props.product.img}
            alt="Shoes"
          />
        </figure>
        <div className=" p-3 ">
          <div className="p-5">
          <h1 className="card-title text-2xl font-bold">{name}</h1>
          <h2 className="card-title font-bold mt-3">Price: ${price}</h2>
          
          <p className="mt-4">Manufacturer : {seller}</p>
          </div>
          <div className="card-actions">
          <button onClick={()=>props.handler(props.product)} className=" hover:bg-[#ff9900] bg-[#FFE0B3] w-full left-0 rounded-b-lg absolute bottom-0 h-10">Buy Now <FontAwesomeIcon icon={faShoppingCart} /> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
