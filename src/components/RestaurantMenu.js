import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards || [];
  console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  const { name, avgRating, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <div className="bg-white rounded-xl shadow-lg p-6 text-center max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
        <p className="text-gray-600 text-sm mb-2">
          {(cuisines || []).join(",")} - {costForTwoMessage}
        </p>
        <p className="text-yellow-500 font-semibold text-lg mb-4">
          ⭐ {avgRating} / 5
        </p>
        {/* Categories Accordian  */}
        {categories.map((category) => (
          <RestaurantCategory data = {category?.card?.card} key={category?.card?.card?.categoryId} />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
