import React, { Component } from "react";
import './TopBar.css';
import '../../index.css';
import { Link } from "react-router";

function TopBar() {
  return (
    <>
      <nav className={`topbar-nav inter-400`}>
        <ul className="topbar-ul">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
        </ul>  
      </nav>
    </>
  );
}

export default TopBar;