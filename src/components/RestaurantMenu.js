import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards || [];

  const { name, avgRating, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
        <p className="text-gray-600 text-sm mb-2">
          {(cuisines || []).join(",")} - {costForTwoMessage}
        </p>
        <p className="text-yellow-500 font-semibold text-lg mb-4">
          ⭐ {avgRating} / 5
        </p>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Menu Items
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {itemCards.map((item) => (
            <li
              key={item?.card?.info?.id}
              className="hover:text-green-600 transition"
            >
              {item?.card?.info?.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
