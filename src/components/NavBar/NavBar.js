import { React } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ cartItemCount }) {
  return (
    <div className="navbar">
      <header>
        <div className="header">
          <Link to="/" className="link">
            <h1>My Favourite Time</h1>
          </Link>
          <div className="addNewProduct">
            <Link to="/addnewproduct" className="link">
              Add New Product
            </Link>
          </div>
          <div>
            <Link to="/cart" className="link headerCart">
              <img className="cartImg" src="/Shopping_cart_icon.svg.png" alt="cart" />
              {cartItemCount > 0 && <div className="cartCounter">{cartItemCount}</div>}
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
