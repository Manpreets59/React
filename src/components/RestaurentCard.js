import { CDN_URL } from "../utils/constants";

export const RestaurentCard = ({ resData }) => {
  return (
    <div className="res-card">
      <div className="img">
        <img
          className="res-logo"
          alt="res-logo"
          src={`${CDN_URL+resData.cloudinaryImageId}`}
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