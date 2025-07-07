import { RestaurentCard } from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";

export const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurent) => (
          <RestaurentCard key={restaurent.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};
