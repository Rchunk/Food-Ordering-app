import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/download.png";
import logo2 from "./images/chole bhature.avif";
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
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="res-logo" src={logo2}></img>
      <h3>Hansu chole bhature</h3>
      <h4>4.3 stars</h4>
      <h4>20 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard /> 
        <RestaurantCard />
         <RestaurantCard /> 
         <RestaurantCard /> 
         <RestaurantCard />
      </div>
    </div>
  );
};

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
