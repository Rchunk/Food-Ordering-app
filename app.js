import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/download.png";
import "./index.css";
/**
 * Header
 *  -Logo
 *  -Nav items
 * Body
 *  -Search
 *  -Card container
 *    -Restuaurant card
 * Footer
 *  -Copyright
 *  -Links
 *  -address
 *  -Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
    return(
        <div className="res-card">
            <h3>Hansu chole bhature</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                <RestaurantCard />
            </div>
        </div>
    )
}

const Applayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);


