import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.55180&lng=81.52430&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  if(resInfo === null){
    return <Shimmer/>
  }

  const { name, avgRating, cuisines, costForTwo } = resInfo?.info;

  return   (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines}-{costForTwo}</p>
      <h2>{avgRating}</h2>
      <ul>
        <li>Biryani</li> {/*use map to display menu items along with price and don't forget to give key*/} 
        <li>Burgars</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
