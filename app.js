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

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />

      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(" , ")}</h4>
      <h4>{resData.info.avgRating} Stars</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={reslist[0]}  />
        <RestaurantCard resData={reslist[1]}  />
        <RestaurantCard resData={reslist[2]}  />
        <RestaurantCard resData={reslist[0]}  />
        <RestaurantCard resData={reslist[1]}  />
        <RestaurantCard resData={reslist[2]}  />
      
      </div>
    </div>
  );
};

const reslist = [
  {
    "info": {
      "id": "441815",
      "name": "La Pino'z Pizza",
      "cloudinaryImageId": "vtv5blaldlnundtxkawl",
      "locality": "Banwari Market",
      "areaName": "Rajpura",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.2,
      "parentId": "4961",
      "avgRatingString": "4.2",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 64,
        "lastMileTravel": 0.6,
        "serviceability": "SERVICEABLE",
        "slaString": "60-65 mins",
        "lastMileTravelString": "0.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-16 22:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹90"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      }
    }
  },
  {
    "info": {
      "id": "680972",
      "name": "Flurry's Cakes & Snacks",
      "cloudinaryImageId": "fdf03b547368f189a047ce87b1fa789c",
      "locality": "Durga Mandir",
      "areaName": "Rajpura",
      "costForTwo": "₹100 for two",
      "cuisines": [
        "Chinese",
        "South Indian"
      ],
      "avgRating": 3.8,
      "veg": true,
      "parentId": "406843",
      "avgRatingString": "3.8",
      "totalRatingsString": "7",
      "sla": {
        "deliveryTime": 41,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-16 23:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "aggregatedDiscountInfoV2": {},
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      }
    }
  },
  {
    "info": {
      "id": "915804",
      "name": "THE WOK MASTER",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/26/1a5012d4-0af4-4426-86ac-8cf1f0833fcb_915804.jpg",
      "locality": "arya samaj road",
      "areaName": "Rajpura",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Chinese",
        "Italian",
        "sandwich",
        "Salads",
        "Beverages",
        "Momos",
        "Desserts"
      ],
      "parentId": "287158",
      "avgRatingString": "NEW",
      "sla": {
        "deliveryTime": 40,
        "lastMileTravel": 1.1,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "1.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-16 22:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "aggregatedDiscountInfoV2": {},
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      }
    }
  }
];





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
