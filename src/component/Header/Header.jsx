import React, { useContext } from "react";
import logo from "../../images/Logo.svg";
import { Link, Outlet } from "react-router-dom";
import { AuthUser } from "../../AuthContext/AuthContext";

const Header = () => {
  const {user, logOut} = useContext(AuthUser)
  const signOut = () => {
    logOut()
  }
  return (
    <>
      <div className="bg-black font-semibold flex items-center justify-between px-24 h-24 sticky top-0 w-full z-10">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="text-white no-underline items-center flex gap-3">
          <Link to="/">Order</Link>
          <Link to="/review">Order Review</Link>
          <Link to="/inventory">Manage Inventory</Link>
          {
            !user ? <><Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link></> : <><Link to="">{user?.displayName}</Link> <button onClick={signOut} className="btn btn-sm">Log out</button></>
          }
          
        </div>
      </div>
      <Outlet/>
    </>
  );
};

export default Header;
