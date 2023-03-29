import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cards = (props) => {
    const {id, category, name, seller, price, stock, ratings, ratingsCount, img, shipping, quantity} = props.product

    console.log(props.lengt)
  return (
    <div>
      <div className="card w-auto rounded-b-lg h-[500px] bg-base-100 shadow-xl relative">
        <figure>
          <img
            src={props.product.img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-3">
          <h1 className="card-title text-2xl font-bold">{name}</h1>
          <h2 className="card-title font-bold mt-3">Price: ${price}</h2>
          
          <p className="mt-4">Manufacturer : {seller}</p>
          <div className="card-actions">
          <button className="btn btn-primary hover:bg-[#ff9900] bg-[#FFE0B3] w-full left-0 rounded-b-lg absolute bottom-0 h-10">Buy Now <FontAwesomeIcon icon={faShoppingCart} /> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
