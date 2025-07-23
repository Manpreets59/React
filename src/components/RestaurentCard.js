import { CDN_URL } from "../utils/constants";

export const RestaurentCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;
  return (
    <div className="w-72 p-4 m-4 rounded-2xl shadow-lg hover:scale-105 transition-transform bg-white">
      <img
        className="w-full h-44 object-cover rounded-lg"
        alt="Restaurant"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="mt-3">
        <h3 className="text-xl font-semibold truncate">{name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {cuisines.join(", ")}
        </p>
        <div className="flex items-center justify-between mt-2 text-sm text-gray-700">
          <span>⭐ {avgRating}</span>
          <span>{costForTwo}</span>
          <span>{sla?.deliveryTime} min</span>
        </div>
      </div>
    </div>
  );
};

// Higher order component to add a promoted labelif the restaurant is promoted 
// intput- RestaurantCard => RestaurantCardPromoted 

export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div >
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg ">Promoted</label>
        <RestaurentCard {...props}/>
      </div>
    )
  }
}