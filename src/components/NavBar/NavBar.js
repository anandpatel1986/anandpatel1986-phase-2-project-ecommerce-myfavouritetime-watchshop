import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <header>
        <div className="header">
          <Link to="/">
            <h1>My Favourite Time</h1>
          </Link>
          <div className="searchBar">
            <form>
              <input type="text" placeholder="search products" />
              <button type="button">Search</button>
            </form>
          </div>
          <div className="addNewProduct">
            <Link to="/addnewproduct">Add New Product</Link>
          </div>
          <div>
            <Link to="/cart">
              <img src="" alt="cart" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
