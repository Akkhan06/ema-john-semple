import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import SideBar from "./component/SideBar/SideBar";
import {
  addToDb,
  getShoppingCard,
  removeAllItems,
} from "./component/Utilitis/Utilitis";
import { Link, Outlet } from "react-router-dom";
import {
  faCreditCard,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handelProdunt = (product) => {
    const newProduct = [...card, product];
    setCard(newProduct);
    addToDb(product.id);
  };

  useEffect(() => {
    // console.log('products',products)
    const saved = getShoppingCard();
    const savedCard = [];
    for (const id in saved) {
      const savedProduct = products.find((ids) => ids.id === id);

      if (savedProduct) {
        const quantity1 = saved[id];

        savedProduct.quantity = quantity1;
        savedCard.push(savedProduct);
      }
      setCard(savedCard);
    }
  }, [products]);

  const removeAll = () => {
    setCard([]);
    removeAllItems();
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 w-[1240px] scroll-smooth">
        <div className="col-span-3">
          <Main count={handelProdunt} />
        </div>

        <div className="col-end-auto">
          <SideBar product={card} remove={removeAll} lent={card.length}>
            <Link to="/review">
              <button className="bg-[#FF9900] text-white w-[300px] p-2 flex justify-between items-center rounded-lg font-semibold">
                Review Order <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </button>
            </Link>
          </SideBar>
        </div>
      </div>
    </div>
  );
}

export default App;
