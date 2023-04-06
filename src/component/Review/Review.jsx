import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import Main from "../Main/Main";
import { Link, useLoaderData } from "react-router-dom";
import ReviewCard from "../ReviewCard/ReviewCard";
import { removeAllItems, removeCardId } from "../Utilitis/Utilitis";
import { faTrashCan, faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LOCALSTORAGE } from "localforage";

const Review = () => {
  // ===========ROUDER HOOK===========
  const card = useLoaderData();

  // ==================RECIVE UPTADE DATA (DELATE DATA) ==============
  const [cards, setCards] = useState(card);


  // ============ONE DATA REMOVE FROM LOCALSTORAGE==============
  const removeOneData = (id) => {
    const removeCard = card.filter((sin) => sin.id !== id);
    setCards(removeCard);
    removeCardId(id);
  };


// ===================REMOVE FROM LOCALSTORAGE ALL DATA=================
  const removeAll = () => {
    setCards([]);
    removeAllItems();
  };

  return (
    // =======================SINGLE CARD IN REVIEW=================
    <div className="grid grid-cols-4">
      <div className="col-span-3">
        {cards.map((single) => (
          <ReviewCard single={single} removeOneData={removeOneData} />
        ))}
      </div>

{/* ==================SIDE BAR FROM REVIEW SECTION============ */}
      <div className="col-end-auto">
        <SideBar product={cards} remove={removeAll} lent={cards.length}>

  {/* =====================CHILDE============         */}
          <Link to="/checkout">
            <button className="bg-[#FF9900] text-white w-[300px] p-2 flex justify-between items-center rounded-lg font-semibold">
              Proceed Checkout <FontAwesomeIcon icon={faCreditCard} />
            </button>
          </Link>
        </SideBar>
      </div>
    </div>
  );
};

export default Review;
