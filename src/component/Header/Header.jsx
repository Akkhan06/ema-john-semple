import React from "react";
import logo from "../../images/Logo.svg";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-black flex items-center justify-between px-24 h-24 sticky top-0 w-full z-10">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="text-white no-underline flex gap-3">
          <Link to="/order">Order</Link>
          <Link to="/review">Order Review</Link>
          <Link to="/inventory">Manage Inventory</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <Outlet/>
    </>
  );
};

export default Header;
