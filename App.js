import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjhXKu37Wc4KFOMJLW4bNh-lWjYs79xo7N5A&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>contact Us</li>
          <li> Cart </li>
        </ul>
      </div>
    </div>
  );
};

const resList = {
  id: "342460",
  name: "KFC",
  cloudinaryImageId:
    "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/7c6939fd-86a2-4a03-bd5b-4e49d4b0f9ee_342460.JPG",
  locality: "SRKR Marg",
  areaName: "Somavaram",
  costForTwo: "₹400 for two",
  cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  avgRating: 4.2,
  parentId: "547",
  avgRatingString: "4.2",
  totalRatingsString: "5.7K+",
  sla: {
    deliveryTime: 23,
    lastMileTravel: 3,
    serviceability: "SERVICEABLE",
    slaString: "20-25 mins",
    lastMileTravelString: "3.0 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2025-07-07 01:00:00",
    opened: true,
  },
  badges: {},
  isOpen: true,
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: {},
      textBased: {},
      textExtendedBadges: {},
    },
  },
  aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹59",
  },
  orderabilityCommunication: {
    title: {},
    subTitle: {},
    message: {},
    customIcon: {},
  },
  differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
      mediaType: "ADS_MEDIA_ENUM_IMAGE",
      lottie: {},
      video: {},
    },
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
  externalRatings: {
    aggregatedRating: {
      rating: "--",
    },
  },
  ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
};

const RestaurentCard = ({ resData }) => {
  return (
    <div className="res-card">
      <div className="img">
        <img
          className="res-logo"
          alt="res-logo"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId}`}
        />
      </div>
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.avgRating} Stars</h4>
      <h4>{resData.costForTwo}</h4>
      <h4>{resData.sla.deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurent) => (
          <RestaurentCard key={resList.id} resData={restaurent}/>
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
